(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(225),c=a(232),o=a(222);var m=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(o.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};t.default=function(e){var t=e.metadata,a=e.items;return r.a.createElement(l.a,{title:"Blog",description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Stay up-to-date"),r.a.createElement("p",null,"If you would like to stay tuned for the updates that we share, please \xa0",r.a.createElement("a",{title:"subscribe to our newsletter",href:"https://ocyan.substack.com/subscribe?utm_source=ocyan.com"},"subscribe to our newsletter."),"\xa0 You may also follow us on \xa0",r.a.createElement("a",{title:"follow us on twitter",href:"https://twitter.com/ocyan_cloud"},"twitter"),"\xa0 and ",r.a.createElement("a",{title:"follow us on linkedin",href:"https://www.linkedin.com/company/ocyan-tech"},"linkedin"),"."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},a.map((function(e){var t=e.content,a=e.metadata;return r.a.createElement("div",{className:"margin-bottom--xl",key:a.permalink},r.a.createElement(c.a,{frontMatter:t.frontMatter,metadata:a,truncated:!0},r.a.createElement(t,null)))})),r.a.createElement(m,{metadata:t})))))}},225:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(61),c=a(221),o=a(223),m=(a(59),a(222)),i=a(230),s=a(224),u=a.n(s),d=a(228),p=a(226),E=a.n(p);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e){var t=Object(o.a)(e.to);return r.a.createElement(m.a,g({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:t}),e.label)}var v=function(){var e=Object(c.a)(),t=Object(n.useState)(!1),a=t[0],s=t[1],p=Object(n.useState)(!1),v=p[0],b=p[1],y=Object(d.a)(),_=y[0],f=(y[1],e.siteConfig),w=void 0===f?{}:f,N=w.baseUrl,k=w.themeConfig,j=(void 0===k?{}:k).navbar,O=void 0===j?{}:j,C=O.title,x=O.logo,M=void 0===x?{}:x,B=O.links,P=void 0===B?[]:B,T=Object(n.useCallback)((function(){s(!0)}),[s]),F=Object(n.useCallback)((function(){s(!1)}),[s]),I=Object(o.a)(M.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":_})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:T,onKeyDown:T},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(m.a,{className:"navbar__brand",to:N},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:I,alt:M.alt}),null!=C&&r.a.createElement("strong",{className:v?E.a.hideLogoText:""},C)),P.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(h,g({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},P.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(h,g({},e,{key:t}))})),r.a.createElement(i.a,{handleSearchBarToggle:b,isSearchBarExpanded:v}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(m.a,{className:"navbar__brand",onClick:F,to:N},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:I,alt:M.alt}),null!=C&&r.a.createElement("strong",null,C))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},P.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(h,g({className:"menu__link"},e,{onClick:F})))}))))))))},b=a(229);a(227);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,m=a.tagline,i=a.title,s=a.themeConfig.image,u=a.url,d=a.customFields,p=void 0===d?{}:d,E=e.children,g=e.title,h=e.noFooter,y=e.description,_=e.image,f=e.keywords,w=e.permalink,N=e.tags,k=e.author,j=e.authorTwitter,O=e.date,C=y||p.description,x=f||p.keywords,M=g||i+" \xb7 "+m,B=_||s,P=u+Object(o.a)(B),T=Object(o.a)(n),F=k?"article":"website";return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),r.a.createElement("meta",{property:"og:type",content:F}),r.a.createElement("meta",{property:"og:site_name",content:"Ocyan"}),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),M&&r.a.createElement("title",null,"OCYAN | ",M),n&&r.a.createElement("link",{rel:"shortcut icon",href:T}),w&&r.a.createElement("meta",{property:"og:url",content:u+w})||r.a.createElement("meta",{property:"og:url",content:u}),w&&r.a.createElement("link",{rel:"canonical",href:u+w})||r.a.createElement("link",{rel:"canonical",href:u}),M&&r.a.createElement("meta",{property:"og:title",content:M}),M&&r.a.createElement("meta",{property:"twitter:title",content:M}),M&&r.a.createElement("meta",{itemprop:"name",content:"OCYAN | "+M}),"article"==F&&r.a.createElement("meta",{property:"article:section",content:"technology"}),N&&N.length&&r.a.createElement("meta",{name:"article:tag",content:x.join(",")}),k&&r.a.createElement("meta",{name:"article:author",content:k}),j&&r.a.createElement("meta",{name:"twitter:creator",content:"@"+j}),O&&r.a.createElement("meta",{name:"article:published_time",content:O}),C&&r.a.createElement("meta",{name:"description",content:C}),C&&r.a.createElement("meta",{itemprop:"description",content:C}),C&&r.a.createElement("meta",{property:"og:description",content:C}),C&&r.a.createElement("meta",{property:"twitter:description",content:C}),x&&x.length&&r.a.createElement("meta",{name:"keywords",content:x.join(",")}),P&&r.a.createElement("meta",{itemprop:"image",content:P}),P&&r.a.createElement("meta",{property:"og:image",content:P}),P&&r.a.createElement("meta",{property:"twitter:image",content:P}),P&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M}),r.a.createElement("meta",{name:"twitter:site",content:"@ocyan_cloud"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),r.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"}),r.a.createElement("script",{type:"application/ld+json"},'{\n            "@context" : "http://schema.org",\n            "@type" : "Organization",\n            "name" : "Ocyan",\n            "legalName" : "Ocyan Cloud Technology LTD",\n            "url" : "https://ocyan.com",\n            "email" : "contact@ocyan.com",\n            "logo" : "https://ocyan.com/logo.png",\n            "slogan" : "End-to-End Cloud Operating System for Enterprise Blockchains and P2P Networks",\n            "brand" : {\n              "@type" : "Brand",\n              "logo" : "https://ocyan.com/logo.png",\n              "slogan" : "End-to-End Cloud Operating System for Enterprise Blockchains and P2P Networks"\n            },\n            "sameAs" : [\n              "https://twitter.com/ocyan_cloud",\n              "https://www.linkedin.com/company/ocyan-tech"\n            ],\n            "address": {\n              "@type": "PostalAddress",\n              "streetAddress": "Summit House, 4 - 5 Mitchell Street, Edinburgh, United Kingdom, EH6 7BD",\n              "addressRegion": "Edinburgh",\n              "postalCode": "EH6 7BD",\n              "addressCountry": "UK"\n            }\n            "address": {\n              "@type": "ContactPoint",\n              "email": "contact@ocyan.com"\n            }\n          }')),r.a.createElement(v,null),r.a.createElement("main",{className:"main"},E),!h&&r.a.createElement(b.a,null),r.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/twitter.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/gtm.js"}),r.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-WQZQFMN",height:"0",width:"0",style:{display:"none",visibility:"hidden"}}))}},226:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},227:function(e,t,a){},232:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(224),c=a.n(l),o=a(220),m=a(222),i=a(238),s=a(260),u=a(261),d=a(262),p=a(263),E=a(264),g=a(265),h=a(266),v=a(267),b=a(268),y=a(269),_=a(233),f=a.n(_);t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:l}=e,{date:_,permalink:w,tags:N}=n,{author:k,authorURL:j,authorTitle:O,authorFBID:C,title:x,description:M}=a;return r.a.createElement("div",null,(()=>{const e=_.substring(0,10).split("-"),t=e[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(e[1],10)-1],l=parseInt(e[2],10),o=C?"https://graph.facebook.com/"+C+"/picture/?height=200&width=200":a.authorImageURL;return r.a.createElement("header",null,r.a.createElement("h1",{className:c()("margin-bottom--sm",f.a.blogPostTitle)},r.a.createElement(m.a,{to:w},x)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},o&&r.a.createElement("a",{className:"avatar__photo-link",href:j,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:o,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:j,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},O)))),r.a.createElement("div",{className:"social margin-bottom--sm"},r.a.createElement(s.a,{url:"https://ocyan.com"+w,subject:"OCYAN | "+x,body:"https://ocyan.com"+w},r.a.createElement(u.a,{size:24,round:!0})),r.a.createElement(d.a,{url:"https://ocyan.com"+w,title:x,via:"ocyan_cloud",hashtags:["practicalBlockchain"]},r.a.createElement(p.a,{size:24,round:!0})),r.a.createElement(E.a,{url:"https://ocyan.com"+w,title:x,summary:M,source:"Ocyan"},r.a.createElement(g.a,{size:24,round:!0})),r.a.createElement(h.a,{url:"https://ocyan.com"+w,title:x},r.a.createElement(v.a,{size:24,round:!0})),r.a.createElement(b.a,{url:"https://ocyan.com"+w,quote:x,hashtag:"practicalBlockchain"},r.a.createElement(y.a,{size:24,round:!0}))))})(),r.a.createElement("article",{className:"markdown"},r.a.createElement(o.a,{components:i.a},t)),r.a.createElement("div",{className:"row margin-vert--lg"},r.a.createElement("div",{className:"col"},N.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),N.map(({label:e,permalink:t})=>r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},e)))),r.a.createElement("div",{className:"col text--right"},l&&r.a.createElement(m.a,{to:n.permalink},r.a.createElement("strong",null,"Read More")))))}},233:function(e,t,a){e.exports={blogPostTitle:"blogPostTitle_kDB-"}}}]);