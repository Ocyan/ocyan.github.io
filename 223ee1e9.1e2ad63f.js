(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return l}));n(0);var o=n(229);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const i={id:"the-ultimate-guide-to-implementing-enterprise-blockchain-solutions",date:new Date("2020-01-31T10:37:58.000Z"),title:"The Ultimate Guide to Implementing Enterprise Blockchain Solutions",subtitle:"How to be production ready for your next blockchain project.",tags:["blockchains","enterprise blockchain","practical blockchain"],keywords:["practical blockchain","blockchain","enterprise blockchain","enterprise blockchain adoption","blockchain adoption","consensus","blockchain in enterprise","blockchain enterprise adoption","Bitcoin","Ethereum","hyperledger","hyperledger fabric","hyperledger besu","corda","r3 corda","blockchain data pipeline","data pipeline","blockchain integration","blockchain analytics"],description:"Join us as we take a look at the current Blockchain market and discuss how you can successfully implement your next Blockchain project. Find out more at Ocyan.",hero:"/images/posts/ocyan-The-Ultimate-Guide-to-Implementing-Enterprise-Blockchain-Solutions.png",author:"Anton Christoff",authorTitle:"CSO of Ocyan",authorURL:"https://www.linkedin.com/in/antonhristoff/",authorImageURL:"/images/posts/anton.jpg",authorTwitter:"antonhristoff"},r=[{value:"The Current Enterprise Blockchain Market",id:"the-current-enterprise-blockchain-market",children:[]},{value:"When to Consider the Application of Blockchain",id:"when-to-consider-the-application-of-blockchain",children:[]},{value:"Important Aspects of Blockchain Technologies",id:"important-aspects-of-blockchain-technologies",children:[]},{value:"Benefits of Blockchain Technology",id:"benefits-of-blockchain-technology",children:[]},{value:"Three Main Challenges of Live Production for Enterprises",id:"three-main-challenges-of-live-production-for-enterprises",children:[]},{value:"Key Factors to Consider Before Implementing an Enterprise Blockchain Solution",id:"key-factors-to-consider-before-implementing-an-enterprise-blockchain-solution",children:[{value:"Do You Need an Enterprise-Ready Platform?",id:"do-you-need-an-enterprise-ready-platform",children:[]},{value:"Do You Need to Interchangeably Use Multiple Blockchains?",id:"do-you-need-to-interchangeably-use-multiple-blockchains",children:[]},{value:"How Will You Mitigate Risk?",id:"how-will-you-mitigate-risk",children:[]}]},{value:"Successfully Transition to Blockchain with Ocyan",id:"successfully-transition-to-blockchain-with-ocyan",children:[]}],c={rightToc:r};function l({components:e,...t}){return Object(o.b)("wrapper",a({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.forbes.com/sites/andrewarnold/2019/02/21/why-2019-may-become-the-year-of-enterprise-blockchain/#100fdb25427e"}),"Forbes article")," in January last year predicted that 2019 could be the year of the enterprise Blockchain and it certainly was a big year for Blockchain in general."),Object(o.b)("p",null,"As Deloitte\u2019s ",Object(o.b)("a",a({parentName:"p"},{href:"https://www2.deloitte.com/content/dam/Deloitte/se/Documents/risk/DI_2019-global-blockchain-survey.pdf"}),"2019 Global Blockchain Survey")," shows, 2019 was the year when \u2018Blockchain tourism\u2019 officially ended and companies started to seriously consider the practical applications of the technology. Financial service and FinTech brands led the way throughout 2019 as other industries like media, telecommunications, and healthcare started to explore the potential opportunities."),Object(o.b)("p",null,"This survey also showed a continued increase in investments with 40% of companies willing to invest $5 million or more in Blockchain initiatives while 53% rank Blockchain as a top priority within their organisation (a 10% increase from 2018)."),Object(o.b)("p",null,"So, as the Blockchain market begins to mature and play a role in companies\u2019 strategic vision, where does this leave enterprise Blockchain?"),Object(o.b)("h2",{id:"the-current-enterprise-blockchain-market"},"The Current Enterprise Blockchain Market"),Object(o.b)("p",null,"At the point of writing and despite company demand, there are relatively few enterprise-ready blockchain platforms on the market. Blockchain solutions based on Trade Finance consortia between connected networks are some of the closest examples of enterprise grade-production cases in the financial service market."),Object(o.b)("p",null,Object(o.b)("img",a({parentName:"p"},{src:"https://disruptionbanking.com/app/uploads/2018/11/trade-finance-bank-and-regulator-consortia-voltron-marco-polo-batavia-hktfp-we.trade_2.png",alt:"finance consortia",title:"Figure 2: Publicly announced consortia in the Finance space"}))),Object(o.b)("p",null,"Within this sector of the market, 21 of the consortia across the world have received public support from 90% of FTSE 100, 250, 350. Of these FTSEs, eight are in Banking & Finance sectors while 5 are in the EMEA. Furthermore, 41% of enterprises are willing to join a consortium in the next few years if objectives align while more than 53% rank Blockchain as top 5 strategic priority."),Object(o.b)("h2",{id:"when-to-consider-the-application-of-blockchain"},"When to Consider the Application of Blockchain"),Object(o.b)("p",null,"By now, most senior leaders recognise the importance of Blockchain or have, at very least, recognise its potential use and eventual mainstream adoption. As Blockchain continues to mature, companies will increasingly jump on the bandwagon."),Object(o.b)("p",null,"Blockchain features like decentralisation, immutability, business process automation with smart contracts and interconnectivity with other alien technologies hold exciting potential. Blockchain is also not a one-size-fits-all solution. So, it\u2019s important to fully consider whether Blockchain can solve your problems before implementing this technology."),Object(o.b)("p",null,"Start by architecting your solution to uncover whether Blockchain is part of the answer and necessary within your organisation."),Object(o.b)("h2",{id:"important-aspects-of-blockchain-technologies"},"Important Aspects of Blockchain Technologies"),Object(o.b)("p",null,"Blockchain is essentially a collection of long-trusted technologies wrapped up with a distributed consensus algorithm that then operates in heterogenic, geo-distributed networks with different topologies. More specifically, Blockchains like Ethereum, Hyperledger and Bitcoin consist of well-known, long-running technologies like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Public Key Cryptography & Certificates. Public key cryptography and certifications are used to identity authorisation and authentication, resources allocation and API Keys, similar to PGP and OpenSSL."),Object(o.b)("li",{parentName:"ul"},"Signatures. On Blockchain, signatures are derived from your keys and certificates."),Object(o.b)("li",{parentName:"ul"},"RPC, gRPC or similar. RPC or gRPC offers a more flexible API layer between services than REST."),Object(o.b)("li",{parentName:"ul"},"PoW. PoW acts as a defence mechanism to prevent spam and DDoS."),Object(o.b)("li",{parentName:"ul"},"PBFT, PoA, PoW, and others. PBFT, PoA, PoW, etc. form part of consensus algorithms like Zookeeper, Consul, Etcd, Kubernetes, Kafka."),Object(o.b)("li",{parentName:"ul"},"Digital Money. Digital money like HashCash, BitGold, E-Gold, B-money, DigiCash and others are early examples of this idea."),Object(o.b)("li",{parentName:"ul"},"Smart Contracts. Rather than outdated, old-school custodial agreements, smart contracts offer a more advanced and modern solution."),Object(o.b)("li",{parentName:"ul"},"P2P. MNet and BitTorrent were used as a direct peer-to-peer file sharing protocols."),Object(o.b)("li",{parentName:"ul"},"Hash Trees and Merkle Trees. We\u2019re all familiar with git, which provides the hashed chain for validations.")),Object(o.b)("p",null,"So, while Blockchain itself is a relatively new technology, the underlying, blockchain-like approaches have always been around. And, used when there was a need to securely connect with untrusted and external sources."),Object(o.b)("h2",{id:"benefits-of-blockchain-technology"},"Benefits of Blockchain Technology"),Object(o.b)("p",null,"When questioning whether Blockchain should play a role in modern organisations, you need to ask yourself whether your company requires any of the following benefits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tamper resistance (Immutable-records). With Blockchain, data can\u2019t be altered or deleted. You can only update the record using a timestamp approach."),Object(o.b)("li",{parentName:"ul"},"Data Consistency and Access. Blockchain gives all participants the same view and access to records without exception."),Object(o.b)("li",{parentName:"ul"},"Data Integrity. Blockchain makes it easy to prove the evolution of a record and uncover any individuals or actions associated with it."),Object(o.b)("li",{parentName:"ul"},"Persistence & Auditability. Data is stored in an easy to retrieve and safeguard manner, which makes it suitable for storing data over the long-term."),Object(o.b)("li",{parentName:"ul"},"Trusted Automation. With Blockchain, participants can make sure they approve of the agreed logic."),Object(o.b)("li",{parentName:"ul"},"Decentralisation. Data and any resulting actions are not controlled by a single entity, which ensures the trust and longevity of the network."),Object(o.b)("li",{parentName:"ul"},"Selected Confidentiality. Blockchain allows you to reveal data to a selected group of participants on the network."),Object(o.b)("li",{parentName:"ul"},"Extensibility and Flexibility. You can extend your Blockchain model in-house and don\u2019t need to wait for a centralised provider to release new features.")),Object(o.b)("h2",{id:"three-main-challenges-of-live-production-for-enterprises"},"Three Main Challenges of Live Production for Enterprises"),Object(o.b)("p",null,"Once you\u2019ve completed a PoC, the next step is to roll out to live production. Typically, during this process, enterprises face three main challenges centred around governance, regulation and technology."),Object(o.b)("p",null,"When implementing a Blockchain solution, companies often encounter the following tactical pain points:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Interoperability. Struggling to find a way to interoperate between DLT and legacy systems."),Object(o.b)("li",{parentName:"ul"},"Scalability & Performance. Main blockchain protocols fall behind."),Object(o.b)("li",{parentName:"ul"},"DevOps. Complexity in the team setup and involved processes."),Object(o.b)("li",{parentName:"ul"},"Production Readiness. Missing a platform that provides SLA."),Object(o.b)("li",{parentName:"ul"},"Integrations. Link cost with the legacy infrastructure."),Object(o.b)("li",{parentName:"ul"},"Analytics. Understanding of the business what\u2019s happening.")),Object(o.b)("p",null,"These issues cause can have some pretty serious impacts on the success of your project. In more than 90% of use cases, we\u2019ve found that the required infrastructure investment for deploying and integrating a blockchain application exceeded the Return on Investment or ROI. As a result, many Blockchain projects are put on hold or cancelled entirely."),Object(o.b)("h2",{id:"key-factors-to-consider-before-implementing-an-enterprise-blockchain-solution"},"Key Factors to Consider Before Implementing an Enterprise Blockchain Solution"),Object(o.b)("p",null,"Implementing a Blockchain solution certainly isn\u2019t easy, and you don\u2019t want to invest time and money only to realise that it won\u2019t deliver the expected results. So, before you start to implement a Blockchain solution, it\u2019s important to think about the following points."),Object(o.b)("h3",{id:"do-you-need-an-enterprise-ready-platform"},"Do You Need an Enterprise-Ready Platform?"),Object(o.b)("p",null,"An enterprise-ready platform for Blockchain is a cloud-native platform that provides the complete ecosystem to support companies during and after the implementation process. The platform allows you to integrate your cloud and legacy services with any Blockchain protocols and emerging tech stack. This often allows companies to achieve a more successful and seamless transition."),Object(o.b)("p",null,"Enterprise-ready solutions include the complete protocol (DLT) and infrastructure (cloud provider or data centre) agnostic. It also provides all required infrastructure, automation, monitoring, integration and analytics for Blockchain adoption and future sustainability."),Object(o.b)("p",null,"This solution goes beyond Blockchain as a Service to help organisations integrate and scale their on-premises cloud architectures to any DLT/Blockchain network."),Object(o.b)("h3",{id:"do-you-need-to-interchangeably-use-multiple-blockchains"},"Do You Need to Interchangeably Use Multiple Blockchains?"),Object(o.b)("p",null,"If so, you might need to consider multi-protocol or cloud agnostic technology. Many companies and markets require the ability to operate between different blockchain protocols. For example, if you want to interchangeably use multiple blockchains based on the consortium you've joined or had unique application needs."),Object(o.b)("p",null,"An infrastructure platform designed as an abstraction middleware provides identical operations regardless of the network you\u2019ve joined."),Object(o.b)("h3",{id:"how-will-you-mitigate-risk"},"How Will You Mitigate Risk?"),Object(o.b)("p",null,"Developing new products on the Blockchain carries an element of risk, such as associated cost, monetisation, or execution. So, it\u2019s important to understand and be aware of these challenges and have a plan in place for avoiding or mitigating any risk."),Object(o.b)("h2",{id:"successfully-transition-to-blockchain-with-ocyan"},"Successfully Transition to Blockchain with Ocyan"),Object(o.b)("p",null,"Before you roll out your PoC project to implementation, schedule a call with our Blockchain experts to find out more about our on-premise \u2018cloud operating system\u2019. We\u2019ve worked with many tier-1, tier-2 and tier-3 organisations within the FinTech, Logistics, Energy, Oil and Gas and Telecom industries to scale, deploy and manage Blockchain applications within the enterprise environment."),Object(o.b)("p",null,"Our on-premise \u2018Cloud Operating System\u2019 helps with the formation and management of trusted and secure Blockchain consortia, backend and legacy integrations with Blockchain and P2P networks and serverless data pipelines for any Blockchain networks."),Object(o.b)("p",null,"Find out more about our services and how we can help ",Object(o.b)("a",a({parentName:"p"},{href:"https://ocyan.com/docs/solutions"}),"here"),". Or follow us on ",Object(o.b)("a",a({parentName:"p"},{href:"https://twitter.com/ocyan_cloud"}),"twitter")," or ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.linkedin.com/company/ocyan-tech"}),"LinkedIn")," to stay up-to-date."),Object(o.b)("p",null,Object(o.b)("a",a({parentName:"p"},{href:"/docs/solutions",title:"Deploy, Manage and Integrate Blockchains"}),Object(o.b)("img",a({parentName:"a"},{src:"/images/posts/ocyan-infrastructure-fabric-for-blockchains.png",alt:"ocyan",title:"Deploy, Manage and Integrate Blockchains"})))))}l.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),h=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=h(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=o,b=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);