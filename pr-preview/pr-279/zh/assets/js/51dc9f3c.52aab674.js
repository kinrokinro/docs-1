"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={sidebar_label:"Installing Rollmint"},i="Setting Up Rollmint",a={unversionedId:"developers/install-rollmint",id:"developers/install-rollmint",title:"Setting Up Rollmint",description:"Before we continue with building our Wordle App, we need to set up",source:"@site/docs/developers/install-rollmint.md",sourceDirName:"developers",slug:"/developers/install-rollmint",permalink:"/pr-preview/pr-279/zh/developers/install-rollmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/install-rollmint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Rollmint"},sidebar:"developers",previous:{title:"Scaffolding The Chain",permalink:"/pr-preview/pr-279/zh/developers/scaffold-wordle"},next:{title:"Module",permalink:"/pr-preview/pr-279/zh/developers/wordle-module"}},p={},c=[{value:"Installing Rollmint",id:"installing-rollmint",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setting-up-rollmint"},"Setting Up Rollmint"),(0,l.kt)("p",null,"Before we continue with building our Wordle App, we need to set up\nRollmint on our codebase."),(0,l.kt)("h2",{id:"installing-rollmint"},"Installing Rollmint"),(0,l.kt)("p",null,"Run the following command inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"wordle")," directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.46.1-rollmint-v0.4.0\ngo mod tidy\ngo mod download\n")),(0,l.kt)("p",null,"With that, we have Rollmint changes added to the project directory. Now,\nlet's build the Wordle app!"))}d.isMDXComponent=!0}}]);