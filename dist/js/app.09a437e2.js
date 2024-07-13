(()=>{"use strict";var e={5306:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727),n(9554),n(1539),n(4747);var r=n(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"d-flex justify-content-between align-items-center nav-custom",attrs:{id:"nav"}},[t("b-nav",{staticClass:"flex-grow-1 nav-links",attrs:{pills:""}},[t("b-nav-item",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),t("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),t("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")]),e.$root.store.username?[t("b-nav-item",{on:{click:e.showNewRecipeModal}},[e._v("Add new recipe")]),t("b-nav-item-dropdown",{attrs:{text:"Personal Area",right:""}},[t("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v("My favorite recipes")]),t("b-dropdown-item",{attrs:{to:{name:"myRecipes"}}},[e._v("My recipes")]),t("b-dropdown-item",{attrs:{to:{name:"familyRecipes"}}},[e._v("My family recipes")])],1),t("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"position-relative",attrs:{to:{name:"mealPlanning"},title:"Meal Planning"}},[t("img",{staticClass:"chef-icon",attrs:{src:n(2310),alt:"Meal Planning"}}),t("span",{staticClass:"badge badge-pill custom-badge"},[e._v(e._s(e.mealCount))])])]:[t("b-nav-item",{attrs:{to:{name:"register"}}},[e._v("Register")]),t("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")])]],2),t("div",{staticClass:"nav-user d-flex align-items-center"},[e.$root.store.username?[t("b-nav-item",{staticClass:"nav-link logout-button",on:{click:e.Logout}},[e._v("Logout")]),t("span",{staticClass:"separator"}),t("span",[e._v(e._s(e.$root.store.username))]),t("svg",{staticClass:"bi bi-person user-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"White",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"}})])]:[t("span",[e._v("Hello Guest!")])]],2)],1),t("router-view",{on:{"add-to-meal-planning":e.addToMealPlanning,"remove-from-meal-planning":e.removeFromMealPlanning}}),e.isModalVisible?t("NewRecipe",{on:{close:e.hideNewRecipeModal}}):e._e()],1)},i=[],s=(n(7658),n(5212),n(8862),n(7327),n(9753),n(2222),n(7042),function(){var e=this,t=e._self._c;return e.visible?t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-content"},[t("span",{staticClass:"close",on:{click:e.closeModal}},[e._v("×")]),t("h2",[e._v("Submit Your Recipe")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitRecipe.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"recipe-name"}},[e._v("Recipe Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeName,expression:"recipeName"}],staticClass:"form-input",attrs:{type:"text",id:"recipe-name",required:""},domProps:{value:e.recipeName},on:{input:function(t){t.target.composing||(e.recipeName=t.target.value)}}})]),t("div",{staticClass:"form-group"},[e._m(0),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],staticClass:"form-textarea",attrs:{id:"ingredients",rows:"5",required:""},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"preparation-time"}},[e._v("Preparation Time (in minutes)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.preparationTime,expression:"preparationTime"}],staticClass:"form-input",attrs:{type:"number",id:"preparation-time",required:""},domProps:{value:e.preparationTime},on:{input:function(t){t.target.composing||(e.preparationTime=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"servings"}},[e._v("Number of Servings")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.servings,expression:"servings"}],staticClass:"form-input",attrs:{type:"number",id:"servings",required:""},domProps:{value:e.servings},on:{input:function(t){t.target.composing||(e.servings=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"instructions"}},[e._v("Instructions")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.instructions,expression:"instructions"}],staticClass:"form-textarea",attrs:{id:"instructions",rows:"5",required:""},domProps:{value:e.instructions},on:{input:function(t){t.target.composing||(e.instructions=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"image-url"}},[e._v("Image URL")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.imageUrl,expression:"imageUrl"}],staticClass:"form-input",attrs:{type:"text",id:"image-url"},domProps:{value:e.imageUrl},on:{input:function(t){t.target.composing||(e.imageUrl=t.target.value)}}})]),t("div",{staticClass:"form-group dietary-group"},[t("label",[e._v("Dietary Restrictions")]),t("div",{staticClass:"checkbox-group"},[t("label",{staticClass:"custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isVegetarian,expression:"isVegetarian"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isVegetarian)?e._i(e.isVegetarian,null)>-1:e.isVegetarian},on:{change:function(t){var n=e.isVegetarian,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.isVegetarian=n.concat([i])):s>-1&&(e.isVegetarian=n.slice(0,s).concat(n.slice(s+1)))}else e.isVegetarian=a}}}),t("span",{staticClass:"checkmark"}),e._v(" Vegetarian ")]),t("label",{staticClass:"custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isVegan,expression:"isVegan"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isVegan)?e._i(e.isVegan,null)>-1:e.isVegan},on:{change:function(t){var n=e.isVegan,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.isVegan=n.concat([i])):s>-1&&(e.isVegan=n.slice(0,s).concat(n.slice(s+1)))}else e.isVegan=a}}}),t("span",{staticClass:"checkmark"}),e._v(" Vegan ")]),t("label",{staticClass:"custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isGlutenFree,expression:"isGlutenFree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isGlutenFree)?e._i(e.isGlutenFree,null)>-1:e.isGlutenFree},on:{change:function(t){var n=e.isGlutenFree,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.isGlutenFree=n.concat([i])):s>-1&&(e.isGlutenFree=n.slice(0,s).concat(n.slice(s+1)))}else e.isGlutenFree=a}}}),t("span",{staticClass:"checkmark"}),e._v(" Gluten Free ")])])]),t("div",{staticClass:"modal-buttons"},[t("b-button",{staticClass:"reset-button",attrs:{type:"button"},on:{click:e.closeModal}},[e._v("Cancel")]),t("b-button",{staticClass:"submit-button",attrs:{type:"submit"}},[e._v("OK")])],1)])])]):e._e()}),o=[function(){var e=this,t=e._self._c;return t("label",{staticClass:"multi-line-label",attrs:{for:"ingredients"}},[t("div",[e._v("Ingredients")]),t("div",[e._v("and")]),t("div",[e._v("Quantity")])])}],c=n(6835),l=n(8534),u=n(3099);const p={name:"NewRecipe",data:function(){return{recipeName:"",ingredients:"",preparationTime:"",servings:"",instructions:"",isVegetarian:!1,isVegan:!1,isGlutenFree:!1,visible:!0,imageUrl:""}},methods:{closeModal:function(){this.$emit("close")},submitRecipe:function(){var e=this;return(0,l.Z)((0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={title:e.recipeName,imageUrl:e.imageUrl,preparation_time:e.preparationTime,vegan:e.isVegan,vegetarian:e.isVegetarian,gluten_free:e.isGlutenFree,ingredients:e.ingredients,instructions:e.instructions,servings:e.servings},t.next=4,(0,u.kW)(n);case 4:e.$router.push({name:"myRecipes"}),e.closeModal(),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Failed to submit recipe:",t.t0),alert("Failed to submit recipe. Please try again.");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},mounted:function(){this.visible=!0}},d=p;var m=n(1001),v=(0,m.Z)(d,s,o,!1,null,"ce99e6b8",null);const f=v.exports,h={name:"App",components:{NewRecipe:f},data:function(){return{isModalVisible:!1,mealCount:0,plannedRecipes:[]}},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},showNewRecipeModal:function(){this.isModalVisible=!0},hideNewRecipeModal:function(){this.isModalVisible=!1},addToMealPlanning:function(e){this.plannedRecipes.some((function(t){return t.id===e.id}))||(this.plannedRecipes.push(e),this.mealCount=this.plannedRecipes.length,localStorage.setItem("plannedRecipes",JSON.stringify(this.plannedRecipes)))},removeFromMealPlanning:function(e){this.plannedRecipes=this.plannedRecipes.filter((function(t){return t.id!==e.id})),this.mealCount=this.plannedRecipes.length,localStorage.setItem("plannedRecipes",JSON.stringify(this.plannedRecipes))}},created:function(){var e=JSON.parse(localStorage.getItem("plannedRecipes"))||[];this.plannedRecipes=e,this.mealCount=e.length}},g=h;var b=(0,m.Z)(g,a,i,!1,null,null,null);const w=b.exports;var y=n(1939),C=n.n(y),_=n(9669),x=n.n(_),k=(n(8783),n(3948),[{path:"/",name:"main",component:function(){return Promise.all([n.e(26),n.e(648)]).then(n.bind(n,6651))}},{path:"/register",name:"register",component:function(){return n.e(544).then(n.bind(n,3544))}},{path:"/login",name:"login",component:function(){return n.e(818).then(n.bind(n,7818))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e(26),n.e(942)]).then(n.bind(n,9659))}},{path:"/my-recipes",name:"myRecipes",component:function(){return Promise.all([n.e(26),n.e(157)]).then(n.bind(n,6327))}},{path:"/family-recipes",name:"familyRecipes",component:function(){return n.e(183).then(n.bind(n,4183))}},{path:"/favorites",name:"favorites",component:function(){return Promise.all([n.e(26),n.e(567)]).then(n.bind(n,8114))}},{path:"/about",name:"about",component:function(){return n.e(146).then(n.bind(n,8146))}},{path:"/recipe",name:"recipe",component:function(){return Promise.all([n.e(3),n.e(868)]).then(n.bind(n,6780))}},{path:"*",name:"notFound",component:function(){return n.e(80).then(n.bind(n,4080))}},{path:"/mealPlanning",name:"mealPlanning",component:function(){return Promise.all([n.e(3),n.e(636)]).then(n.bind(n,3898))}}]);const P=k;var N=n(8345),R=n(6123),Z=n.n(R),V=n(869),A=n(3017),M=n(1151),F=n(8620),S=(n(7024),n(508)),T=n(7563),O=n(7419),j=n(1869),G=n(295),E=n(3090),I=n(794),L=n(4063),$=n(8793),U=n(7772);r["default"].use(M.ZP),r["default"].use(V.XG7),r["default"].use(A.A7),r["default"].use(N.ZP),r["default"].use(Z());var q=new N.ZP({routes:P});[S.E,T.w6,O.g,j.SY,G.xL,E.u3,I.v5,L.F,$.m$,U.A6].forEach((function(e){return r["default"].use(e)})),r["default"].use(F.ZP),x().defaults.withCredentials=!0,x().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),x().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(C(),x()),r["default"].config.productionTip=!1;var D={server_domain:"http://localhost:80",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(D),new r["default"]({router:q,data:function(){return{store:D}},methods:{toast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:n,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(w)}}).$mount("#app")},3099:(e,t,n)=>{n.d(t,{Dq:()=>y,Ni:()=>u,V4:()=>v,a3:()=>c,eI:()=>b,kW:()=>h,lZ:()=>d});var r=n(6835),a=n(8534),i=n(9669),s=n.n(i),o="http://localhost:80";function c(e){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().post("".concat(o,"/users/favorites"),{recipeId:t},{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),l.apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()["delete"]("".concat(o,"/users/favorites"),{data:{recipeId:t},withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),p.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/users/favorites"),{withCredentials:!0});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),m.apply(this,arguments)}function v(){return f.apply(this,arguments)}function f(){return f=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(o,"/users/userRecipes"),{withCredentials:!0});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),f.apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().post("".concat(o,"/users/createARecipe"),t,{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),g.apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return w=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()["delete"]("".concat(o,"/users/deleteRecipe"),{params:{title:t},withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),w.apply(this,arguments)}function y(e){return C.apply(this,arguments)}function C(){return C=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().post("".concat(o,"/users/isFavorite"),{recipeId:t},{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data.favorite);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),C.apply(this,arguments)}},2310:(e,t,n)=>{e.exports=n.p+"img/chef.ece84808.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,i)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,a,i]=e[u],o=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(o=!1,i<s&&(s=i));if(o){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{3:"8a5ff562",26:"e03f5424",80:"8f372de9",146:"abf38c70",157:"12dbae43",183:"0e5637bc",544:"9ca7567c",567:"9575154e",636:"cb6b5d1b",648:"000ee18c",818:"5392f8c0",868:"547f5084",942:"b254c7ec"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{146:"13aaac04",157:"4cb1e933",183:"f74d25e2",544:"198c572e",567:"cb44ee9d",636:"18d484ee",648:"deb3a574",818:"084e5836",868:"019bffa6",942:"cf4d2241"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";n.l=(r,a,i,s)=>{if(e[r])e[r].push(a);else{var o,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+i),o.src=r),e[r]=[a];var d=(t,n)=>{o.onerror=o.onload=null,clearTimeout(m);var a=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,r,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=n=>{if(i.onerror=i.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){a=s[r],i=a.getAttribute("data-href");if(i===e||i===t)return a}},r=r=>new Promise(((a,i)=>{var s=n.miniCssF(r),o=n.p+s;if(t(s,o))return a();e(r,o,null,a,i)})),a={143:0};n.f.miniCss=(e,t)=>{var n={146:1,157:1,183:1,544:1,567:1,636:1,648:1,818:1,868:1,942:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=i);var s=n.p+n.u(t),o=new Error,c=r=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,a[1](o)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[s,o,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var u=c(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(5306)));r=n.O(r)})();
//# sourceMappingURL=app.09a437e2.js.map