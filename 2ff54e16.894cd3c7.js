(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(0);var a=n(178);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const r={id:"blockchain-which-one",date:new Date("2020-01-13T10:37:58.000Z"),title:"Blockchain... but which one?",subtitle:"What to consider to choose a blockhain network",tags:["blockchains","blockchain adoption","consensus"],keywords:["blockchain","blockchain adoption","consensus","blockchain in enterprise","blockchain enterprise adoption","Bitcoin","Ethereum","Hyperledger Fabric","R3 Corda","Stellar","Monero","ZCash","Quorum","VeChain","Ethereum Parity","aura","PoA","Pos","pow","proof of authority","proof of stake","proof of work","RomanAgora","validators","EWF","Komgo","Marco Polo"],description:"If you or your company are considering kickstarting a blockchain project, and maybe you are in the initial discovery phase, you will discover that the Blockchain universe contains many different flavours.",hero:"/images/banner.png",author:"Gabriele Cacciola",authorTitle:"CTO of Ocyan",authorURL:"https://www.linkedin.com/in/gabrielecacciola90/",authorImageURL:"/images/posts/gabriele.jpg",authorTwitter:"ocyan_cloud"},i=[{value:"Blockchain... but which one",id:"blockchain-but-which-one",children:[{value:"Blockchain for everyone",id:"blockchain-for-everyone",children:[]},{value:"Consensus",id:"consensus",children:[]},{value:"What about private networks",id:"what-about-private-networks",children:[]},{value:"Conclusions",id:"conclusions",children:[]}]}],s={rightToc:i},c="wrapper";function l({components:e,...t}){return Object(a.b)(c,o({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hi! I am Gabriele, CTO of ",Object(a.b)("a",o({parentName:"p"},{href:"https://ocyan.com"}),"Ocyan"),", and in this article I will try to go through all the flavours of the most commonly used Blockchain protocols."),Object(a.b)("h2",{id:"blockchain-but-which-one"},"Blockchain... but which one"),Object(a.b)("p",null,"At Ocyan, we have come across multiple ",Object(a.b)("a",o({parentName:"p"},{href:"https://ocyan.com/docs/features"}),"use cases")," for Blockchain in Enterprise. They can vary from supply chain, fintech, logistic, telecommunications, and so on and so forth."),Object(a.b)("p",null,"If you or your company are considering kickstarting a blockchain project, and maybe you are in the initial discovery phase, you will discover that the Blockchain universe contains many different flavours. But before you do that, you want to consider the following questions first:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Which problem are you trying to solve? Does it comprehend decentralisation, trust, immutability, security, asset exchange?"),Object(a.b)("li",{parentName:"ul"},"Are you trying to replace or remove any intermediary? In a few words, are you trying to ",Object(a.b)("strong",{parentName:"li"},"automate trust"),"?"),Object(a.b)("li",{parentName:"ul"},"Do you require a not particularly high transaction speed?")),Object(a.b)("p",null,"If the answer of those questions is yes, then you most probably require a blockchain solution."),Object(a.b)("h3",{id:"blockchain-for-everyone"},"Blockchain for everyone"),Object(a.b)("p",null,Object(a.b)("img",o({parentName:"p"},{src:"https://steemitimages.com/640x0/https://pospi.github.io/talk-solidity-blockchain-intro/res/randart/everybodygetsablockchain.jpg",alt:"Blockchain for everyone"}))),Object(a.b)("p",null,"Bitcoin, Ethereum, Hyperledger Fabric, R3 Corda, Stellar, Monero, ZCash, Quorum, VeChain... Nowadays hundreds (or maybe thousands) different blockchain protocols have been implemented. Where do we start from?"),Object(a.b)("p",null,"Let's first distinguish between several types of blockchain."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Public")," or ",Object(a.b)("strong",{parentName:"p"},"Permissionless"),": designed on the assumption that everybody is potentially corrupt, in public networks anyone can validate, write, and read transactions (if consensus permits!). The ledger is completely open and transparent, e.g. ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.blockchain.com/explorer"}),"https://www.blockchain.com/explorer"),". Example of permissionless blockchains are Bitcoin, Ethereum (main net), Stellar, Monero, ZCash and so on."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Private")," or ",Object(a.b)("strong",{parentName:"p"},"Permissionised"),": when one or more actors decide to join forces into a ",Object(a.b)("em",{parentName:"p"},"consortium"),", roles and responsibilities have to be established between the members. Using certain specific blockchain protocols, like Hyperledger Fabric or R3 Corda, it is possible to enshrine those rules into Admin policies and maximise security, privacy and performances. Moreover, it is possible to achieve similar results starting from permissionless technologies (e.g. Ethereum Parity supports Aura as PoA algorithm, or Quorum)."),Object(a.b)("p",null,"Summarising:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Features"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Public"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Private"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Access"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"RW, public to anyone"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"RW upon invitation only")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Membership"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Unknown"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Known and trusted")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Security"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Economic incentives (e.g. PoW)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Legal contracts, Admin Policies")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Speed (tx/s)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Slower"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Faster")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Examples"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Bitcoin, Ethereum, Monero, ZCash"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"RomanAgora (",Object(a.b)("a",o({parentName:"td"},{href:"https://www.finextra.com/pressarticle/79823/clearscore-uses-blockchain-to-reduce-fraud-in-credit-applications"}),"https://www.finextra.com/pressarticle/79823/clearscore-uses-blockchain-to-reduce-fraud-in-credit-applications"),"), Komgo, Marco Polo, EWF")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Scope"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Disrupt the current business models by decentralisation, transparency and disintermediation"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Data or asset sharing, reach closer integration between enterprises without compromising on reliability and ownership of data")))),Object(a.b)("h3",{id:"consensus"},"Consensus"),Object(a.b)("p",null,"As the name suggests, given the decentralised nature of the network it is necessary to define a set of rules and steps to follow in order to precisely define the status of the ledger at any point in time. This efficient, fair, real-time, functional, reliable, and secure algorithm is known as ",Object(a.b)("strong",{parentName:"p"},"consensus"),". It is necessary because decentralised system don't have a central administration authority that maintains and updates the database, while decentralised systems need a mechanism to ensure that all the transactions occurring on the network are genuine and all participants agree on a consensus on the status of the ledger."),Object(a.b)("p",null,"There are several consensus algorithm that can be used by the different blockchain protocols, so here we will describe just the major ones:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Proof of Work"),": used by the most known cryptocurrencies like Bitcoin and Ethereum (supported by ",Object(a.b)("a",o({parentName:"li"},{href:"http://localhost:3000/docs/solutions"}),"Ocyan")," \ud83d\ude0e), it requires a participant node to prove that the work done and submitted by them by solving a cryptographic puzzle qualifies them to receive the right to add new transactions to the blockchain. This special participant node is known as ",Object(a.b)("strong",{parentName:"li"},"miner"),", and they participate in the network by contributing large amounts of computing power."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Proof of Authority"),": in this case, consensus is reached using special approved accounts, known as ",Object(a.b)("strong",{parentName:"li"},"validators"),', that allow them to put transactions in a block. It is possible to attach a reputation to a validator account, in order to make sure that validator node "keep behaving" and help maintain the network. An example could be Aura in Ethereum Parity PoA networks (supported by ',Object(a.b)("a",o({parentName:"li"},{href:"http://localhost:3000/docs/solutions"}),"Ocyan")," \ud83d\ude0e)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Proof of Stake"),": another common consensus algorithm that evolved as a low-cost, low-energy consuming alternative to POW algorithm. It involves allocation of responsibility in maintaining the public ledger to a participant node in proportion to the number of virtual currency tokens held by it. However, this comes with a drawback that it promotes cryptocoin saving, instead of spending. The Ethereum main network is moving towards replacing PoW with PoS in the next future.")),Object(a.b)("p",null,"PoS and PoW have similar problems but in different ways."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"In PoS, an entity can own a majority of coins and reap most of the benefits."),"  This does NOT provide for a safe or fair economic environment, as it opens the door to a series of economic scenarios."),Object(a.b)("p",null,"In PoS, unlike PoW, you have no baseline of physical cost to create a coin. The only metrics you have are total supply,  circulating supply, inflation rate, and current market price. So, you can treat this market similarly to a fiat currency - driven by supply and demand. In this case though, the price is still not backed by any phisical asset."),Object(a.b)("p",null,"On the other hand, the upside is that you can gain staking rewards as a node much easier than in a PoW protocol. This is the main reason the community has been siding with PoS."),Object(a.b)("h3",{id:"what-about-private-networks"},"What about private networks"),Object(a.b)("p",null,"While tokenized incentives make the untrusted networks safe, they also make them very slow. Public and permissionless networks can only handle a few transactions per second, which makes them unfeasible for large-scale applications with high transaction volumes.\nIf we are able to add a pinch of trust to our blockchain recipe, then the situation becomes much easier to manage. In private networks, due to the absence of many problems that are brought by the untrusted and various nature of the nodes and thanks to the presence to legal contracts in most cases, it is possible to reach much better performances. Just to throw some numbers in the discussion, while Bitcoin and Ethereum reach just a few dozens tx/s as limits, Hyperledger Fabric has been ",Object(a.b)("a",o({parentName:"p"},{href:"https://arxiv.org/pdf/1912.11456.pdf"}),"demonstrated")," to be able to reach about 3,000 tx/s."),Object(a.b)("p",null,"Examples of blockchain consortia are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"RomanAgora"),": In 2019 Ocyan has worked with ",Object(a.b)("a",o({parentName:"li"},{href:"https://www.clearscore.com"}),"ClearScore")," in order to create and scale RomanAgora, the first blockchain backed system in fintech for Identity Verification across financial institutions. You can find more informations ",Object(a.b)("a",o({parentName:"li"},{href:"%5Bhttps://www.businessinsider.com/clearscore-leveraging-blockchain-to-reduce-credit-fraud-2019-9?r=US&IR=T%5D(https://www.businessinsider.com/clearscore-leveraging-blockchain-to-reduce-credit-fraud-2019-9?r=US&IR=T)"}),"here"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EWF"),": ",Object(a.b)("a",o({parentName:"li"},{href:"https://www.energyweb.org"}),"Energy Web Foundation"),", Ethereum backed consortium, it has become the industry\u2019s largest energy blockchain ecosystem and leading choice for decentralized technology powering the world\u2019s energy future."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Komgo"),": powered by Consensys, it represents the world scale commodity trading network."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Marco Polo"),": trading alliance between Financial Institutions, Corporates and Technology & Service Providers. It is backed by an R3 Corda network.")),Object(a.b)("h3",{id:"conclusions"},"Conclusions"),Object(a.b)("p",null,"As of today (Jan '20) there are multiple problems that can be solved nicely and efficiently with a blockchain architecture, but it is of paramount importance to understand the characteristics of such a solution, plus consider all the implications of building and maintaining a completely innovative system. Ocyan is a Cloud Operating System that deploys all the required infrastructure, automation, monitoring, security and data integration components to run any blockchain and P2P (Peer to Peer) network on any corporate production environment (always on-prem)."),Object(a.b)("p",null,"If you want to reach out for more clarifications, any blockchain discussion or build something together just contact me at ",Object(a.b)("a",o({parentName:"p"},{href:"mailto:gabriele@ocyan.com"}),"gabriele@ocyan.com"),"."))}l.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=i(n),u=a,h=b[s+"."+u]||b[u]||l[u]||r;return n?o.a.createElement(h,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(h,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);