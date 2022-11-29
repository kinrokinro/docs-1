"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2912],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(r),u=s,m=g["".concat(o,".").concat(u)]||g[u]||d[u]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3536:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(3117),s=(r(7294),r(3905));const i={sidebar_label:"Message Types"},a="\ud83d\udcac\xa0Message Types",p={unversionedId:"developers/recipe-message",id:"developers/recipe-message",title:"\ud83d\udcac\xa0Message Types",description:"\u2728\xa0Create Message Types",source:"@site/docs/developers/recipe-message.md",sourceDirName:"developers",slug:"/developers/recipe-message",permalink:"/pr-preview/pr-325/developers/recipe-message",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-message.md",tags:[],version:"current",frontMatter:{sidebar_label:"Message Types"},sidebar:"developers",previous:{title:"Scaffold your Rollup",permalink:"/pr-preview/pr-325/developers/recipe-scaffold"},next:{title:"Keepers",permalink:"/pr-preview/pr-325/developers/recipe-keeper"}},o={},c=[{value:"\u2728\xa0Create Message Types",id:"create-message-types",level:2},{value:"\ud83e\udd3f\xa0Diving deeper into the message code",id:"diving-deeper-into-the-message-code",level:3},{value:"\ud83d\udcd5\xa0Define messages logic",id:"define-messages-logic",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"message-types"},"\ud83d\udcac\xa0Message Types"),(0,s.kt)("h2",{id:"create-message-types"},"\u2728\xa0Create Message Types"),(0,s.kt)("p",null,"Create a message type and its handler with the ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold message createRecipe dish ingredients\n")),(0,s.kt)("p",null,"Response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/recipes/recipes/tx.proto\nmodify x/recipes/client/cli/tx.go\ncreate x/recipes/client/cli/tx_create_recipe.go\ncreate x/recipes/keeper/msg_server_create_recipe.go\nmodify x/recipes/module_simulation.go\ncreate x/recipes/simulation/create_recipe.go\nmodify x/recipes/types/codec.go\ncreate x/recipes/types/message_create_recipe.go\ncreate x/recipes/types/message_create_recipe_test.go\n\n\ud83c\udf89 Created a message `createRecipe`.\n")),(0,s.kt)("p",null,"Head to your ",(0,s.kt)("inlineCode",{parentName:"p"},"recipes/proto/recipes/recipes/tx.proto")," file\nand you will see the ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," has been created.\nAdd ",(0,s.kt)("inlineCode",{parentName:"p"},"uint64 id = 1;")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipeResponse")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"message MsgCreateRecipeResponse {\n  uint64 id = 1;\n}\n")),(0,s.kt)("h3",{id:"diving-deeper-into-the-message-code"},"\ud83e\udd3f\xa0Diving deeper into the message code"),(0,s.kt)("p",null,"Looking further into the message, we can see that\n",(0,s.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," has 3 fields: creator, dish, and ingredients."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"message MsgCreateRecipe {\n  string creator = 1;\n  string dish = 2;\n  string ingredients = 3;\n}\n")),(0,s.kt)("p",null,"We can also see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"CreateRecipe")," RPC has already been added to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Msg")," service:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"service Msg {\n  rpc CreateRecipe(MsgCreateRecipe) returns (MsgCreateRecipeResponse);\n}\n")),(0,s.kt)("h2",{id:"define-messages-logic"},"\ud83d\udcd5\xa0Define messages logic"),(0,s.kt)("p",null,"Navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/msg_server_create_recipe.go"),".\nFor our recipes chain, we want the dish and ingredients to be written\nto the blockchain\u2019s state as a new recipe. Add the following code to\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"CreateRecipe")," function underneath the imports:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/msg_server_create_recipe.go"',title:'"recipes/x/recipes/keeper/msg_server_create_recipe.go"'},"func (k msgServer) CreateRecipe(goCtx context.Context, msg *types.MsgCreateRecipe) (*types.MsgCreateRecipeResponse, error) {\n  // Get the context\n  ctx := sdk.UnwrapSDKContext(goCtx)\n\n  // Create variable of type Recipe\n  var recipe = types.Recipe{\n     Creator: msg.Creator,\n     Dish: msg.Dish,\n     Ingredients: msg.Ingredients,\n  }\n\n  // Add a recipe to the store and get back the ID\n  id := k.AppendRecipe(ctx, recipe)\n\n  // Return the ID of the recipe\n  return &types.MsgCreateRecipeResponse{Id: id}, nil\n}\n")),(0,s.kt)("p",null,"You will see errors in your text editor, which we will resolve in the next step."))}d.isMDXComponent=!0}}]);