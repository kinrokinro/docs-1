"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1462],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const a={},l="Deploy A Solidity Smart Contract on Ethermint Sovereign Rollup with Foundry",i={unversionedId:"developers/deploy-solidity-ethermint-foundry",id:"developers/deploy-solidity-ethermint-foundry",title:"Deploy A Solidity Smart Contract on Ethermint Sovereign Rollup with Foundry",description:"In this guide you'll learn how to deploy a Solidity smart contract to",source:"@site/docs/developers/deploy-solidity-ethermint-foundry.md",sourceDirName:"developers",slug:"/developers/deploy-solidity-ethermint-foundry",permalink:"/pr-preview/pr-241/fr/developers/deploy-solidity-ethermint-foundry",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/deploy-solidity-ethermint-foundry.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Setting Up Your Environment for Ethermint on Celestia",permalink:"/pr-preview/pr-241/fr/developers/instantiate-ethermint"},next:{title:"Integrate Celestia",permalink:"/pr-preview/pr-241/fr/developers/integrate-celestia"}},p={},s=[{value:"About Foundry",id:"about-foundry",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Initialize development environment",id:"initialize-development-environment",level:3},{value:"Updating the contract and tests",id:"updating-the-contract-and-tests",level:3},{value:"Updating the deployment script",id:"updating-the-deployment-script",level:3},{value:"Deploying locally",id:"deploying-locally",level:3},{value:"Deploying to the Ethermint Sovereign Rollup",id:"deploying-to-the-ethermint-sovereign-rollup",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-a-solidity-smart-contract-on-ethermint-sovereign-rollup-with-foundry"},"Deploy A Solidity Smart Contract on Ethermint Sovereign Rollup with Foundry"),(0,o.kt)("p",null,"In this guide you'll learn how to deploy a Solidity smart contract to\nthe Ethermint chain you just instantiated on Celestia with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/foundry-rs/foundry"},"Foundry"),"."),(0,o.kt)("h2",{id:"about-foundry"},"About Foundry"),(0,o.kt)("p",null,"Foundry is a portable, fast and modular toolkit for Ethereum application development."),(0,o.kt)("p",null,"Foundry is made up of three components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/tree/master/forge"},(0,o.kt)("strong",{parentName:"a"},"Forge"))," - Ethereum\ntesting framework (like Truffle, Hardhat and DappTools)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/tree/master/cast"},(0,o.kt)("strong",{parentName:"a"},"Cast"))," - CLI for\ninteracting with EVM smart contracts, sending transactions, and getting chain data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/tree/master/anvil"},(0,o.kt)("strong",{parentName:"a"},"Anvil"))," - Local\nEthereum node, similar to Ganache or Hardhat Network.")),(0,o.kt)("p",null,"We'll use all three to create, test, and deploy our Solidity project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn more about Foundry, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/"},"Foundry Book"),".")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"initialize-development-environment"},"Initialize development environment"),(0,o.kt)("p",null,"First, be sure to\n",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/getting-started/installation.html"},"install Foundry"),"\non your local development environment."),(0,o.kt)("p",null,"Next, create a new project and change into the directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"forge init celestia-ethermint-app\ncd celestia-ethermint-app\n")),(0,o.kt)("p",null,"Foundry has created an example smart contract located at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Contract.sol"),"."),(0,o.kt)("h3",{id:"updating-the-contract-and-tests"},"Updating the contract and tests"),(0,o.kt)("p",null,"Let's update the contracts to include a basic counter example. Create a new file\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter.sol")," and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Counter {\n    int private count;\n    \n    constructor(int _count) {\n        count = _count;\n    }\n\n    function incrementCounter() public {\n        count += 1;\n    }\n    function decrementCounter() public {\n        count -= 1;\n    }\n\n    function getCount() public view returns (int) {\n        return count;\n    }\n}\n")),(0,o.kt)("p",null,"Next, let's create a test for this contract."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"test/Contract.T.Sol")," and update the code with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport \"forge-std/Test.sol\";\nimport 'src/Counter.sol';\n\ncontract ContractTest is Test {\n    Counter counter;\n    function setUp() public {\n        counter = new Counter(10);\n    }\n\n    function testGetCount() public {\n        int value = counter.getCount();\n        assertEq(value, 10);\n        emit log_int(value);\n    }\n\n    function testIncrement() public {\n        counter.incrementCounter();\n        counter.incrementCounter();\n        int value = counter.getCount();\n        assertEq(value, 12);\n        emit log_int(value);\n    }\n\n    function testDecrement() public {\n        counter.decrementCounter();\n        int value = counter.getCount();\n        assertEq(value, 9);\n        emit log_int(value);\n    }\n}\n")),(0,o.kt)("p",null,"Foundry uses ",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html"},"Dappsys Test")," to\nprovide basic logging and assertion functionality. It's included in the Forge\nStandard Library."),(0,o.kt)("p",null,"Here, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"assertEq")," to assert equality. You can view all of the assertion\nfunctions available\n",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html?highlight=log_int#asserting"},"here"),"."),(0,o.kt)("p",null,"Next, we can test the contract using ",(0,o.kt)("strong",{parentName:"p"},"Forge")," with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"forge test -vv\n")),(0,o.kt)("h3",{id:"updating-the-deployment-script"},"Updating the deployment script"),(0,o.kt)("p",null,"Now that we've tested the contract, let's try deploying it locally using\n",(0,o.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/tutorials/solidity-scripting.html"},"Solidity Scripting"),"."),(0,o.kt)("p",null,"To do so, update the deloyment script at ",(0,o.kt)("inlineCode",{parentName:"p"},"script/Contracts.s.sol")," with the\nfollowing code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport "forge-std/Script.sol";\n\nimport {Counter} from "src/Counter.sol";\n\ncontract ContractScript is Script {\n    function setUp() public {}\n\n    function run() public {\n        vm.startBroadcast();\n        new Counter(10);\n        vm.stopBroadcast();\n    }\n}\n')),(0,o.kt)("p",null,"Now we can use this script to deploy our smart contract to either a live or\ntest network."),(0,o.kt)("h3",{id:"deploying-locally"},"Deploying locally"),(0,o.kt)("p",null,"Next start Anvil, the local testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"anvil\n")),(0,o.kt)("p",null,"Once started, Anvil will give you a local RPC endpoint as well as a handful\nof Private Keys and Accounts that you can use."),(0,o.kt)("p",null,"We can now use the local RPC along with one of the private keys to deploy locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"forge script script/Contract.s.sol:ContractScript --fork-url \\\nhttp://localhost:8545  --private-key $PRIVATE_KEY --broadcast\n")),(0,o.kt)("p",null,"Once the contract has been deployed locally, Anvil will log out the contract address."),(0,o.kt)("p",null,"Next, set the contract address as an environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export CONTRACT_ADDRESS=<contract-address>\n")),(0,o.kt)("p",null,"We can then test sending transactions to it with ",(0,o.kt)("inlineCode",{parentName:"p"},"cast send"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cast send $CONTRACT_ADDRESS "incrementCounter()" \\\n--private-key $PRIVATE_KEY\n')),(0,o.kt)("p",null,"We can then perform read operations with ",(0,o.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cast call $CONTRACT_ADDRESS "getCount()(int)"\n')),(0,o.kt)("h3",{id:"deploying-to-the-ethermint-sovereign-rollup"},"Deploying to the Ethermint Sovereign Rollup"),(0,o.kt)("p",null,"Now that we've deployed and tested locally, we can deploy to our\nEthermint chain."),(0,o.kt)("p",null,"First, we will need to export the private key generated by\nthe ethermint ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"PRIVATE_KEY=$(ethermintd keys unsafe-export-eth-key mykey --keyring-backend test)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Here, the key name from ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"mykey")," but you can modify\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"init.sh")," to change the name of your key.")),(0,o.kt)("p",null,"Now, we can start deploying the smart contract to our Ethermint chain."),(0,o.kt)("p",null,"To do so, run the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"forge script script/Contract.s.sol:ContractScript \\\n--rpc-url http://localhost:8545 --private-key $PRIVATE_KEY --broadcast\n")),(0,o.kt)("p",null,"Once the contract has been deployed to the Ethermint rollup, we can\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"cast send")," to test sending transactions to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cast send $CONTRACT_ADDRESS "incrementCounter()" \\\n--rpc-url http://localhost:8545 --private-key $PRIVATE_KEY \n')),(0,o.kt)("p",null,"We can then perform read operations with ",(0,o.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cast call $CONTRACT_ADDRESS "getCount()(int)" --rpc-url http://35.208.160.145:8545\n')))}u.isMDXComponent=!0}}]);