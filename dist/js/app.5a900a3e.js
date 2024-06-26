(()=>{"use strict";var e={7488:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727),n(9554),n(1539),n(4747);var r=n(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"d-flex justify-content-between align-items-center nav-custom",attrs:{id:"nav"}},[t("b-nav",{staticClass:"flex-grow-1 nav-links",attrs:{pills:""}},[t("b-nav-item",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),t("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),t("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")]),e.$root.store.username?[t("b-nav-item",{on:{click:e.showNewRecipeModal}},[e._v("Add new recipe")]),t("b-nav-item-dropdown",{attrs:{text:"Personal Area",right:""}},[t("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v("My favorite recipes")]),t("b-dropdown-item",{attrs:{to:{name:"myRecipes"}}},[e._v("My recipes")]),t("b-dropdown-item",{attrs:{to:{name:"familyRecipes"}}},[e._v("My family recipes")])],1)]:[t("b-nav-item",{attrs:{to:{name:"register"}}},[e._v("Register")]),t("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")])]],2),t("div",{staticClass:"nav-user d-flex align-items-center"},[e.$root.store.username?[t("b-nav-item",{staticClass:"nav-link logout-button",on:{click:e.Logout}},[e._v("Logout")]),t("span",{staticClass:"separator"}),t("span",[e._v(e._s(e.$root.store.username))]),t("svg",{staticClass:"bi bi-person user-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"White",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"}})])]:[t("span",[e._v("Hello Guest!")])]],2)],1),t("router-view"),e.isModalVisible?t("NewRecipe",{on:{close:e.hideNewRecipeModal}}):e._e()],1)},a=[],s=(n(7658),n(9753),n(2222),n(7042),function(){var e=this,t=e._self._c;return e.visible?t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-content"},[t("span",{staticClass:"close",on:{click:e.closeModal}},[e._v("×")]),t("h2",[e._v("Submit Your Recipe")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitRecipe.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"recipe-name"}},[e._v("Recipe Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeName,expression:"recipeName"}],staticClass:"form-input",attrs:{type:"text",id:"recipe-name",required:""},domProps:{value:e.recipeName},on:{input:function(t){t.target.composing||(e.recipeName=t.target.value)}}})]),t("div",{staticClass:"form-group"},[e._m(0),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],staticClass:"form-textarea",attrs:{id:"ingredients",rows:"5",required:""},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"preparation-time"}},[e._v("Preparation Time (in minutes)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.preparationTime,expression:"preparationTime"}],staticClass:"form-input",attrs:{type:"number",id:"preparation-time",required:""},domProps:{value:e.preparationTime},on:{input:function(t){t.target.composing||(e.preparationTime=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"servings"}},[e._v("Number of Servings")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.servings,expression:"servings"}],staticClass:"form-input",attrs:{type:"number",id:"servings",required:""},domProps:{value:e.servings},on:{input:function(t){t.target.composing||(e.servings=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"instructions"}},[e._v("Instructions")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.instructions,expression:"instructions"}],staticClass:"form-textarea",attrs:{id:"instructions",rows:"5",required:""},domProps:{value:e.instructions},on:{input:function(t){t.target.composing||(e.instructions=t.target.value)}}})]),t("div",{staticClass:"form-group dietary-group"},[t("label",[e._v("Dietary Restrictions")]),t("div",{staticClass:"checkbox-group"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isVegetarian,expression:"isVegetarian"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isVegetarian)?e._i(e.isVegetarian,null)>-1:e.isVegetarian},on:{change:function(t){var n=e.isVegetarian,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);r.checked?s<0&&(e.isVegetarian=n.concat([a])):s>-1&&(e.isVegetarian=n.slice(0,s).concat(n.slice(s+1)))}else e.isVegetarian=i}}}),e._v(" Vegetarian")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isVegan,expression:"isVegan"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isVegan)?e._i(e.isVegan,null)>-1:e.isVegan},on:{change:function(t){var n=e.isVegan,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);r.checked?s<0&&(e.isVegan=n.concat([a])):s>-1&&(e.isVegan=n.slice(0,s).concat(n.slice(s+1)))}else e.isVegan=i}}}),e._v(" Vegan")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isGlutenFree,expression:"isGlutenFree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isGlutenFree)?e._i(e.isGlutenFree,null)>-1:e.isGlutenFree},on:{change:function(t){var n=e.isGlutenFree,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);r.checked?s<0&&(e.isGlutenFree=n.concat([a])):s>-1&&(e.isGlutenFree=n.slice(0,s).concat(n.slice(s+1)))}else e.isGlutenFree=i}}}),e._v(" Gluten Free")])])]),t("div",{staticClass:"modal-buttons"},[t("b-button",{staticClass:"reset-button",attrs:{type:"button"},on:{click:e.closeModal}},[e._v("Cancel")]),t("b-button",{staticClass:"submit-button",attrs:{type:"submit"}},[e._v("OK")])],1)])])]):e._e()}),o=[function(){var e=this,t=e._self._c;return t("label",{staticClass:"multi-line-label",attrs:{for:"ingredients"}},[t("div",[e._v("Ingredients")]),t("div",[e._v("and")]),t("div",[e._v("Quantity")])])}];n(3710),n(8862);const l={name:"NewRecipe",data:function(){return{recipeName:"",ingredients:"",preparationTime:"",servings:"",instructions:"",isVegetarian:!1,isVegan:!1,isGlutenFree:!1,visible:!0}},methods:{closeModal:function(){this.$emit("close")},submitRecipe:function(){var e={title:this.recipeName,description:this.ingredients,time:this.preparationTime,servings:this.servings,instructions:this.instructions,date:(new Date).toLocaleDateString(),image:"https://img.mako.co.il/2015/06/22/cakepops_shokolit_c.jpg",url:"#",dietaryRestrictions:{vegetarian:this.isVegetarian,vegan:this.isVegan,glutenFree:this.isGlutenFree}},t=JSON.parse(localStorage.getItem("recipes"))||[];t.push(e),localStorage.setItem("recipes",JSON.stringify(t)),this.$router.push({name:"myRecipes"}),this.closeModal()}},mounted:function(){this.visible=!0}},c=l;var u=n(1001),d=(0,u.Z)(c,s,o,!1,null,"3755b7de",null);const m=d.exports,p={name:"App",components:{NewRecipe:m},data:function(){return{isModalVisible:!1}},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},showNewRecipeModal:function(){this.isModalVisible=!0},hideNewRecipeModal:function(){this.isModalVisible=!1}}},v=p;var g=(0,u.Z)(v,i,a,!1,null,null,null);const f=g.exports;var h=n(1939),b=n.n(h),y=n(9669),_=n.n(y),w=(n(8783),n(3948),[{path:"/",name:"main",component:function(){return Promise.all([n.e(527),n.e(187),n.e(236)]).then(n.bind(n,3236))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e(527),n.e(656)]).then(n.bind(n,8656))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e(527),n.e(930)]).then(n.bind(n,2930))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e(187),n.e(723)]).then(n.bind(n,9850))}},{path:"/my-recipes",name:"myRecipes",component:function(){return n.e(794).then(n.bind(n,7794))}},{path:"/family-recipes",name:"familyRecipes",component:function(){return n.e(424).then(n.bind(n,1424))}},{path:"/favorites",name:"favorites",component:function(){return n.e(835).then(n.bind(n,9835))}},{path:"/about",name:"about",component:function(){return n.e(146).then(n.bind(n,8146))}},{path:"/recipe",name:"recipe",component:function(){return Promise.all([n.e(527),n.e(187),n.e(201)]).then(n.bind(n,8201))}},{path:"*",name:"notFound",component:function(){return n.e(80).then(n.bind(n,4080))}}]);const C=w;var k=n(8345),N=n(5002),x=n(1151),P=n(8620),V=(n(7024),n(508)),A=n(7563),S=n(7419),R=n(1869),F=n(295),M=n(3090),T=n(794),O=n(4063),j=n(8793),E=n(7772);r["default"].use(x.ZP),r["default"].use(N.ZPm),r["default"].use(k.ZP);var G=new k.ZP({routes:C});[V.E,A.w6,S.g,R.SY,F.xL,M.u3,T.v5,O.F,j.m$,E.A6].forEach((function(e){return r["default"].use(e)})),r["default"].use(P.ZP),_().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),_().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(b(),_()),r["default"].config.productionTip=!1;var L={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(L),new r["default"]({router:G,data:function(){return{store:L}},methods:{toast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:n,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(f)}}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,i,a]=e[u],o=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,i,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{80:"8f372de9",146:"abf38c70",187:"e8352aa8",201:"f0206d2d",236:"7c7522b2",424:"3f56abe2",527:"ac712910",656:"e19427e7",723:"e516f151",794:"f046d158",835:"c1db5af6",930:"9efdbdd4"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{146:"13aaac04",201:"641ace86",236:"ea110832",424:"b844bc4e",656:"bc6c85c2",723:"adca06ae",794:"38ddf96c",835:"f62ebd7a",930:"ec69a4c6"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";n.l=(r,i,a,s)=>{if(e[r])e[r].push(i);else{var o,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+a),o.src=r),e[r]=[i];var m=(t,n)=>{o.onerror=o.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,r,i)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=o,a.parentNode&&a.parentNode.removeChild(a),i(l)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){i=s[r],a=i.getAttribute("data-href");if(a===e||a===t)return i}},r=r=>new Promise(((i,a)=>{var s=n.miniCssF(r),o=n.p+s;if(t(s,o))return i();e(r,o,null,i,a)})),i={143:0};n.f.miniCss=(e,t)=>{var n={146:1,201:1,236:1,424:1,656:1,723:1,794:1,835:1,930:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var s=n.p+n.u(t),o=new Error,l=r=>{if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,i[1](o)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[s,o,l]=r,c=0;if(s.some((t=>0!==e[t]))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var u=l(n)}for(t&&t(r);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(7488)));r=n.O(r)})();
//# sourceMappingURL=app.5a900a3e.js.map