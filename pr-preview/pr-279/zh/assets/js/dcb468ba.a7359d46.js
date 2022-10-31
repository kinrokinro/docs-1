"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"Setup"},o="\ud83d\udcbb\xa0Setup",i={unversionedId:"developers/gm-setup",id:"developers/gm-setup",title:"\ud83d\udcbb\xa0Setup",description:"- Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).",source:"@site/docs/developers/gm-setup.md",sourceDirName:"developers",slug:"/developers/gm-setup",permalink:"/pr-preview/pr-279/zh/developers/gm-setup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-setup.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup"},sidebar:"developers",previous:{title:"gm world Overview",permalink:"/pr-preview/pr-279/zh/developers/gm-world"},next:{title:"Run a Light Node",permalink:"/pr-preview/pr-279/zh/developers/gm-node"}},s={},p=[{value:"\ud83c\udfc3\xa0Install Golang",id:"install-golang",level:2},{value:"\ud83d\udd25\xa0Install Ignite CLI",id:"install-ignite-cli",level:2},{value:"\ud83c\udf7a\xa0Install Homebrew",id:"install-homebrew",level:2},{value:"\ud83c\udfc3\xa0Install wget and jq",id:"install-wget-and-jq",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup"},"\ud83d\udcbb\xa0Setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).\nRecommended GNU/Linux or macOS.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This tutorial was made on an M2 Mac with macOS Monterey Version 12.6.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://go.dev/"},"Golang v1.18.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ignite/cli/releases/tag/v0.24.0"},"Ignite CLI v0.24.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/wget/"},"wget")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/light-node/"},"A Celestia Light Node"))),(0,l.kt)("h2",{id:"install-golang"},"\ud83c\udfc3\xa0Install Golang"),(0,l.kt)("p",null,"Celestia-App, Celestia-Node, and Cosmos-SDK are written in the Golang\nprogramming language. We\u2019ll need Golang to build and run them. Celestia\u2019s\nMamaki testnet requires Golang v1.18.2 to build and run correctly."),(0,l.kt)("p",null,"You can ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-279/zh/developers/environment#install-golang"},"install Golang here"),"."),(0,l.kt)("h2",{id:"install-ignite-cli"},"\ud83d\udd25\xa0Install Ignite CLI"),(0,l.kt)("p",null,"First, you will need to create ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," if you have not already:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 775 /usr/local/bin\n")),(0,l.kt)("p",null,"Run this command in your terminal to install Ignite CLI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.ignite.com/cli! | bash\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u270b On some machines, you may run into permissions errors like the one below.\nYou can resolve this error by following the guidance\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/install#write-permission"},"here")," and below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Error\njcs @ ~ % curl https://get.ignite.com/cli! | bash\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  38631      0 --:--:-- --:--:-- --:--:-- 41322\nInstalling ignite v0.24.0.....\n######################################################################## 100.0%\n**mv: rename ./ignite to /usr/local/bin/ignite: Permission denied**\n============\n**Error: mv failed**\njcs @ ~ %\n")),(0,l.kt)("p",null,"The following command should resolve the permissions error:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl https://get.ignite.com/cli! | sudo bash\n")),(0,l.kt)("p",null,"A successful installation will return something similar the response below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0   4122      0 --:--:-- --:--:-- --:--:--  4136\nInstalling ignite v0.22.2.....\n######################################################################## 100.0%\nInstalled at /usr/local/bin/ignite\n")),(0,l.kt)("p",null,"Verify you\u2019ve installed Ignite CLI by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,l.kt)("p",null,"The response that you receive should look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite version\nIgnite CLI version: v0.24.0\nIgnite CLI build date:  2022-09-12T14:14:32Z\nIgnite CLI source hash: 21c6430cfcc17c69885524990c448d4a3f56461c\nYour OS:        darwin\nYour arch:      arm64\nYour go version:    go version go1.18.2 darwin/arm64\nYour uname -a:      Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Sat Jun 18 17:07:28 PDT 2022; root:xnu-8020.140.41~1/RELEASE_ARM64_T8110 arm64\nYour cwd:       /Users/joshcs\nIs on Gitpod:       false\n")),(0,l.kt)("h2",{id:"install-homebrew"},"\ud83c\udf7a\xa0Install Homebrew"),(0,l.kt)("p",null,"Homebrew will allow us to install dependencies for our Mac:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Be sure to run the commands similar to the output below from the successful installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,l.kt)("h2",{id:"install-wget-and-jq"},"\ud83c\udfc3\xa0Install wget and jq"),(0,l.kt)("p",null,"wget is an Internet file retriever and jq is a lightweight and flexible\ncommand-line JSON processor."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget && brew install jq\n")))}c.isMDXComponent=!0}}]);