"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4048],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o=a(4334),r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(3117),o=a(7294),r=a(4334),i=a(2389),s=a(7392),l=a(7094),c=a(2466),d="tabList__CuJ",h="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:u,groupId:m,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,l.U)(),[x,N]=(0,o.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&k.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==x&&(C(t),N(n),null!=m&&w(m,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:I},i,{className:(0,r.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,i.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},4685:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=a(3117),o=(a(7294),a(3905)),r=a(5488),i=a(5162);const s={sidebar_label:"The lifecycle of a celestia-app transaction"},l="The lifecycle of a celestia-app transaction",c={unversionedId:"concepts/how-celestia-works/transaction-lifecycle",id:"concepts/how-celestia-works/transaction-lifecycle",title:"The lifecycle of a celestia-app transaction",description:"Checking data availability",source:"@site/docs/concepts/how-celestia-works/transaction-lifecycle.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/transaction-lifecycle",permalink:"/pr-preview/pr-509/concepts/how-celestia-works/transaction-lifecycle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/transaction-lifecycle.md",tags:[],version:"current",frontMatter:{sidebar_label:"The lifecycle of a celestia-app transaction"},sidebar:"concepts",previous:{title:"Celestia's data availability layer",permalink:"/pr-preview/pr-509/concepts/how-celestia-works/data-availability-layer"},next:{title:"Data Availability FAQ",permalink:"/pr-preview/pr-509/concepts/data-availability-faq"}},d={},h=[{value:"Checking data availability",id:"checking-data-availability",level:2}],p={toc:h};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-lifecycle-of-a-celestia-app-transaction"},"The lifecycle of a celestia-app transaction"),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,o.kt)("p",null,"Users request the celestia-app to make data available by\nsending ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob"),"\ntransactions into a block."),(0,o.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transaction is\nsplit into a namespaced message (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,o.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lifecycle of a celestia-app Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,o.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,o.kt)("a",{parentName:"p",href:"../data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,o.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,o.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,o.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,o.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix.")),(0,o.kt)(i.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("p",null,"Users request the celestia-app to make data available by\nsending ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForData"),"\ntransactions into a block."),(0,o.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForData")," transaction is\nsplit into a namespaced message (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,o.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lifecycle of a celestia-app Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,o.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,o.kt)("a",{parentName:"p",href:"../data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,o.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,o.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,o.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,o.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix.")),(0,o.kt)(i.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("p",null,"Users request the celestia-app to make data available by\nsending ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob"),"\ntransactions into a block."),(0,o.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transaction is\nsplit into a namespaced message (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,o.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lifecycle of a celestia-app Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,o.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,o.kt)("a",{parentName:"p",href:"../data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,o.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,o.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,o.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,o.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix."))),(0,o.kt)("h2",{id:"checking-data-availability"},"Checking data availability"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DA network",src:a(2693).Z,width:"3000",height:"1453"})),(0,o.kt)("p",null,"To enhance connectivity, the celestia-node augments the celestia-app\nwith a separate libp2p network, i.e., the so-called ",(0,o.kt)("em",{parentName:"p"},"DA network"),",\nthat serves DAS requests."),(0,o.kt)("p",null,"Light nodes connect to a celestia-node in the DA network, listen to\nextended block headers (i.e., the block headers together with the\nrelevant DA metadata, such as the 4k intermediate Merkle roots), and\nperform DAS on the received headers (i.e., ask for random data chunks)."),(0,o.kt)("p",null,"Note that although it is recommended, performing DAS is optional -- light\nnodes could just trust that the data corresponding to the commitments in\nthe block headers was indeed made available by the Celestia DA layer.\nIn addition, light nodes can also submit transactions to the celestia-app,\ni.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions."),(0,o.kt)("p",null,"While performing DAS for a block header, every light node queries Celestia\nNodes for a number of random data chunks from the extended matrix and the\ncorresponding Merkle proofs. If all the queries are successful, then the\nlight node accepts the block header as valid (from a DA perspective)."),(0,o.kt)("p",null,"If at least one of the queries fails (i.e., either the data chunk is not\nreceived or the Merkle proof is invalid), then the light node rejects the\nblock header and tries again later. The retrial is necessary to deal with\nfalse negatives, i.e., block headers being rejected although the block\ndata is available. This may happen due to network congestion for example."),(0,o.kt)("p",null,"Alternatively, light nodes may accept a block header although the data\nis not available, i.e., a ",(0,o.kt)("em",{parentName:"p"},"false positive"),". This is possible since the\nsoundness property (i.e., if an honest light node accepts a block as available,\nthen at least one honest full node will eventually have the entire block data)\nis probabilistically guaranteed (for more details, take a look at the\n",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"original paper"),")."),(0,o.kt)("p",null,"By fine tuning Celestia's parameters (e.g., the number of data chunks sampled\nby each light node) the likelihood of false positives can be sufficiently\nreduced such that block producers have no incentive to withhold the block data."))}u.isMDXComponent=!0},2693:function(e,t,a){t.Z=a.p+"assets/images/consensus-da-e09f663089be80daa0f62397bfc8fc78.png"},1293:function(e,t,a){t.Z=a.p+"assets/images/tx-lifecycle-9c80bbe1c320bc02c466665bd873169a.png"}}]);