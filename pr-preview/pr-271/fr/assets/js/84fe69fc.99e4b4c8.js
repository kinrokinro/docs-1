"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[177],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8763:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],l={sidebar_label:"Types"},p="Wordle Types",i={unversionedId:"developers/wordle-types",id:"developers/wordle-types",title:"Wordle Types",description:"For the next steps, we will be creating types to be used by",source:"@site/docs/developers/wordle-types.md",sourceDirName:"developers",slug:"/developers/wordle-types",permalink:"/pr-preview/pr-271/fr/developers/wordle-types",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-types.md",tags:[],version:"current",frontMatter:{sidebar_label:"Types"},sidebar:"developers",previous:{title:"Messages",permalink:"/pr-preview/pr-271/fr/developers/wordle-messages"},next:{title:"Keeper",permalink:"/pr-preview/pr-271/fr/developers/wordle-keeper"}},c={},u=[{value:"Scaffolding Wordle Types",id:"scaffolding-wordle-types",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"wordle-types"},"Wordle Types"),(0,s.kt)("p",null,"For the next steps, we will be creating types to be used by\nthe messages we created."),(0,s.kt)("h2",{id:"scaffolding-wordle-types"},"Scaffolding Wordle Types"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold map wordle word submitter --no-message\n")),(0,s.kt)("p",null,"This type is a map called ",(0,s.kt)("inlineCode",{parentName:"p"},"Wordle")," with two values of\n",(0,s.kt)("inlineCode",{parentName:"p"},"word")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"submitter"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"submitter")," is the address of the\nperson that submitted the Wordle."),(0,s.kt)("p",null,"The second type is the ",(0,s.kt)("inlineCode",{parentName:"p"},"Guess")," type. It allows us to store\nthe latest guess for each address that submitted a solution."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold map guess word submitter count --no-message\n")),(0,s.kt)("p",null,"Here, we are also storing ",(0,s.kt)("inlineCode",{parentName:"p"},"count")," to count how many guesses\nthis address submitted."))}f.isMDXComponent=!0}}]);