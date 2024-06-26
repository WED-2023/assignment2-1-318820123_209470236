(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[236],{3688:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("div",{staticClass:"recipe-image-container",on:{click:e.viewRecipe,mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image,alt:"Recipe Image"}}),e.hover?t("div",{staticClass:"overlay"},[t("span",[e._v("Click to view")])]):e._e()]),t("div",{staticClass:"recipe-content"},[t("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("div",{staticClass:"icons"},[e.recipe.vegetarian?t("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:"Vegetarian",expression:"'Vegetarian'"}],staticClass:"icon",attrs:{src:r(7943),alt:"Vegetarian"}}):e._e(),e.recipe.vegan?t("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:"Vegan",expression:"'Vegan'"}],staticClass:"icon",attrs:{src:r(4887),alt:"Vegan"}}):e._e(),e.recipe.glutenFree?t("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:"Gluten Free",expression:"'Gluten Free'"}],staticClass:"icon",attrs:{src:r(5041),alt:"Gluten Free"}}):e._e()]),t("p",{staticClass:"recipe-meta"},[t("strong",[e._v("Preparation time:")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes"),t("br"),t("strong",[e._v("Likes:")]),e._v(" "+e._s(e.recipe.aggregateLikes)+" ")]),t("div",{staticClass:"status"},[e.recipe.viewed?t("span",{staticClass:"viewed"},[e._v("Viewed")]):e._e(),t("img",{staticClass:"favorite-icon",attrs:{src:e.favoriteIcon,alt:"Favorite"},on:{click:e.toggleFavorite,mouseover:function(t){e.favoriteHover=!0},mouseleave:function(t){e.favoriteHover=!1}}})])])])},n=[];r(7658),r(5212),r(1539),r(7327),r(8862);const a={name:"RecipePreview",props:{recipe:{type:Object,required:!0}},data:function(){return{hover:!1,favoriteHover:!1}},computed:{favoriteIcon:function(){return this.favoriteHover||this.recipe.favorited?r(3e3):r(2996)},isLoggedIn:function(){return this.$root.store.username}},methods:{viewRecipe:function(){this.$router.push({name:"recipe",params:{id:this.recipe.id}})},toggleFavorite:function(){this.isLoggedIn?(this.recipe.favorited=!this.recipe.favorited,this.updateFavorites(),this.$emit("toggle-favorite",this.recipe)):alert("Please log in to add favorites")},updateFavorites:function(){var e=this,t=JSON.parse(localStorage.getItem("favoriteRecipes"))||[];this.recipe.favorited?t.some((function(t){return t.id===e.recipe.id}))||t.push(this.recipe):t=t.filter((function(t){return t.id!==e.recipe.id})),localStorage.setItem("favoriteRecipes",JSON.stringify(t))}}},s=a;var o=r(1001),u=(0,o.Z)(s,i,n,!1,null,"78e36e59",null);const c=u.exports},7127:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+" "),e._t("default")],2),t("b-row",e._l(e.displayedRecipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},n=[],a=(r(9653),r(7042),r(3688));const s={name:"RecipePreviewList",components:{RecipePreview:a.Z},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0},amountToShow:{type:Number,default:3}},computed:{displayedRecipes:function(){return this.recipes.slice(0,this.amountToShow)}}},o=s;var u=r(1001),c=(0,u.Z)(o,i,n,!1,null,"2b1af709",null);const f=c.exports},3236:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"container"},[t("div",{staticClass:"left-side-container"},[t("div",{staticClass:"left-side"},[t("h2",{staticClass:"container-title"},[e._v("Random Recipes")]),t("RecipePreviewList",{attrs:{recipes:e.randomRecipes,amountToShow:e.numRandomRecipes}}),t("div",{staticClass:"button-container"},[t("button",{staticClass:"form-button-custom",on:{click:e.fetchRandomRecipes}},[e._v("Get New Recipes")])])],1)]),t("div",{staticClass:"right-side-container"},[t("div",{staticClass:"right-side"},[e.$root.store.username?[t("div",{staticClass:"user-section"},[t("h2",{staticClass:"container-title"},[e._v("Last Viewed Recipes")]),t("RecipePreviewList",{attrs:{recipes:e.lastViewedRecipes,amountToShow:e.numLastViewedRecipes}})],1)]:[t("LoginForm",{on:{"login-success":e.onLoginSuccess}})]],2)])])])},n=[],a=r(4293),s=r(7127),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{staticClass:"form-group-custom",attrs:{id:"input-group-Username",label:"Username:","label-for":"Username"}},[t("b-form-input",{staticClass:"form-input-custom",attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{staticClass:"form-group-custom",attrs:{id:"input-group-Password",label:"Password:","label-for":"Password"}},[t("b-form-input",{staticClass:"form-input-custom",attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"form-button-custom",attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{staticClass:"login-link",attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},u=[],c=r(6835),f=r(8534),l=(r(7658),r(379)),d=r(9239);const p={name:"LoginForm",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:l.C1},password:{required:l.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,i=t.$error;return r?!i:null},Login:function(){var e=this;return(0,f.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{!0,(0,d.sD)(e.form.username,e.form.password,"success"),e.$root.store.login(e.form.username),e.$router.push("/")}catch(r){e.form.submitError=r.response.data.message}case 1:case"end":return t.stop()}}),t)})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},v=p;var m=r(1001),g=(0,m.Z)(v,o,u,!1,null,"fbc64654",null);const y=g.exports,h={components:{RecipePreviewList:s.Z,LoginForm:y},data:function(){return{lastViewedRecipes:[],randomRecipes:[],numRandomRecipes:3,numLastViewedRecipes:5}},methods:{fetchLastViewedRecipes:function(){if(this.$root.store.username){var e=(0,a.uM)(3);this.lastViewedRecipes=e.data.recipes}},fetchRandomRecipes:function(){var e=(0,a.OI)(3);this.randomRecipes=e.data.recipes},onLoginSuccess:function(){this.fetchLastViewedRecipes()}},mounted:function(){this.fetchLastViewedRecipes(),this.fetchRandomRecipes()}},b=h;var _=(0,m.Z)(b,i,n,!1,null,"07d170cd",null);const w=_.exports},3111:(e,t,r)=>{var i=r(1702),n=r(4488),a=r(1340),s=r(1361),o=i("".replace),u=RegExp("^["+s+"]+"),c=RegExp("(^|[^"+s+"])["+s+"]+$"),f=function(e){return function(t){var r=a(n(t));return 1&e&&(r=o(r,u,"")),2&e&&(r=o(r,c,"$1")),r}};e.exports={start:f(1),end:f(2),trim:f(3)}},863:(e,t,r)=>{var i=r(1702);e.exports=i(1..valueOf)},1361:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:(e,t,r)=>{"use strict";var i=r(2109),n=r(1913),a=r(9781),s=r(7854),o=r(857),u=r(1702),c=r(4705),f=r(2597),l=r(9587),d=r(7976),p=r(2190),v=r(7593),m=r(7293),g=r(8006).f,y=r(1236).f,h=r(3070).f,b=r(863),_=r(3111).trim,w="Number",P=s[w],x=o[w],R=P.prototype,O=s.TypeError,C=u("".slice),S=u("".charCodeAt),$=function(e){var t=v(e,"number");return"bigint"==typeof t?t:j(t)},j=function(e){var t,r,i,n,a,s,o,u,c=v(e,"number");if(p(c))throw O("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=_(c),t=S(c,0),43===t||45===t){if(r=S(c,2),88===r||120===r)return NaN}else if(48===t){switch(S(c,1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+c}for(a=C(c,2),s=a.length,o=0;o<s;o++)if(u=S(a,o),u<48||u>n)return NaN;return parseInt(a,i)}return+c},M=c(w,!P(" 0o1")||!P("0b1")||P("+0x1")),L=function(e){return d(R,e)&&m((function(){b(e)}))},N=function(e){var t=arguments.length<1?0:P($(e));return L(this)?l(Object(t),this,N):t};N.prototype=R,M&&!n&&(R.constructor=N),i({global:!0,constructor:!0,wrap:!0,forced:M},{Number:N});var I=function(e,t){for(var r,i=a?g(t):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),n=0;i.length>n;n++)f(t,r=i[n])&&!f(e,r)&&h(e,r,y(t,r))};n&&x&&I(o[w],x),(M||n)&&I(o[w],P)},9239:(e,t,r)=>{"use strict";function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"A user is already logged in",success:!1}}};return{status:200,response:{data:{message:"login succeeded",success:!0}}}}function n(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}r.d(t,{Ge:()=>n,sD:()=>i})},6408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=n},6195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=n},5573:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,i)}),!0)}))};t["default"]=n},7884:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e,t){return(0,i.withParams)({type:"between",min:e,max:t},(function(r){return!(0,i.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=n},6681:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}});var i=n(r(8085));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var c=function(e,t){return(0,i.default)({type:e},(function(e){return!s(e)||t.test(e)}))};t.regex=c},4078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=n},8107:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,a=(0,i.regex)("email",n);t["default"]=a},379:(e,t,r)=>{"use strict";function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"Fq",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"BS",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sH",{enumerable:!0,get:function(){return g.default}});var n=$(r(6408)),a=$(r(6195)),s=$(r(5669)),o=$(r(7884)),u=$(r(8107)),c=$(r(9103)),f=$(r(7340)),l=$(r(5287)),d=$(r(3091)),p=$(r(2419)),v=$(r(2941)),m=$(r(8300)),g=$(r(918)),y=$(r(3213)),h=$(r(5832)),b=$(r(5573)),_=$(r(2500)),w=$(r(2628)),P=$(r(301)),x=$(r(6673)),R=$(r(4078)),O=S(r(6681));function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(C=function(e){return e?r:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var r=C(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}function $(e){return e&&e.__esModule?e:{default:e}}},6673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=n},9103:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.withParams)({type:"ipAddress"},(function(e){if(!(0,i.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t["default"]=n;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},7340:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,i.withParams)({type:"macAddress"},(function(t){if(!(0,i.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t["default"]=n;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5287:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"maxLength",max:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)<=e}))};t["default"]=n},301:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"maxValue",max:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=n},3091:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"minLength",min:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)>=e}))};t["default"]=n},2628:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"minValue",min:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=n},2500:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"not"},(function(t,r){return!(0,i.req)(t)||!e.call(this,t,r)}))};t["default"]=n},5669:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.regex)("numeric",/^[0-9]*$/);t["default"]=n},5832:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,i)}),!1)}))};t["default"]=n},2419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=(0,i.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,i.req)(e.trim()):(0,i.req)(e)}));t["default"]=n},2941:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,i.ref)(e,this,r)||(0,i.req)(t)}))};t["default"]=n},8300:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,i.ref)(e,this,r)||(0,i.req)(t)}))};t["default"]=n},918:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=function(e){return(0,i.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,i.ref)(e,this,r)}))};t["default"]=n},3213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=r(6681),n=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,i.regex)("url",n);t["default"]=a},8085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(16).R:r(8413).withParams,n=i;t["default"]=n},16:(e,t,r)=>{"use strict";function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}t.R=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},a=function(e,t){return"object"===i(e)&&void 0!==t?t:e((function(){}))},s=n.vuelidate?n.vuelidate.withParams:a;t.R=s}}]);
//# sourceMappingURL=236.7c7522b2.js.map