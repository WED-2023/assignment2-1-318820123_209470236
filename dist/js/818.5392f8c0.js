"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[818],{7818:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"login-container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{staticClass:"form-group-custom",attrs:{id:"input-group-Username",label:"Username:","label-for":"Username"}},[t("b-form-input",{staticClass:"form-input-custom",attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{staticClass:"form-group-custom",attrs:{id:"input-group-Password",label:"Password:","label-for":"Password"}},[t("b-form-input",{staticClass:"form-input-custom",attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"form-button-custom",attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{staticClass:"login-link",attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)])},o=[],a=r(6835),u=r(8534),i=(r(7658),r(379)),f=r(9669),l=r.n(f);const s={name:"LoginPage",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i.C1},password:{required:i.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return(0,u.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Attempting to log in..."),r={username:e.form.username,password:e.form.password},t.next=5,l().post("http://localhost:80/Login",r);case 5:t.sent,e.$root.store.login(e.form.username),"/"!==e.$router.currentRoute.path&&e.$router.push("/"),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error("Error during login:",t.t0),t.t0.response&&t.t0.response.data&&t.t0.response.data.message?e.form.submitError=t.t0.response.data.message:e.form.submitError="An error occurred during login.";case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},onLogin:function(){console.log("onLogin called"),this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},d=s;var c=r(1001),p=(0,c.Z)(d,n,o,!1,null,"faa3656a",null);const m=p.exports},6408:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=o},6195:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=o},5573:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=o},7884:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=o},6681:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=o(r(8085));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=i;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=l},4078:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=o},8107:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,a=(0,n.regex)("email",o);t["default"]=a},379:(e,t,r)=>{function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"Fq",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"BS",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sH",{enumerable:!0,get:function(){return y.default}});var o=S(r(6408)),a=S(r(6195)),u=S(r(5669)),i=S(r(7884)),f=S(r(8107)),l=S(r(9103)),s=S(r(7340)),d=S(r(5287)),c=S(r(3091)),p=S(r(2419)),m=S(r(2941)),v=S(r(8300)),y=S(r(918)),b=S(r(3213)),g=S(r(5832)),h=S(r(5573)),_=S(r(2500)),P=S(r(2628)),w=S(r(301)),x=S(r(6673)),j=S(r(4078)),O=M(r(6681));function $(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return($=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=$(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(o,u,i):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}function S(e){return e&&e.__esModule?e:{default:e}}},6673:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=o},9103:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t["default"]=o;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},7340:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t["default"]=o;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5287:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=o},301:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=o},3091:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=o},2628:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=o},2500:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=o},5669:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=o},5832:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=o},2419:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=o},2941:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=o},8300:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=o},918:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=o},3213:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),o=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",o);t["default"]=a},8085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(16).R:r(8413).withParams,o=n;t["default"]=o},16:(e,t,r)=>{function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var o="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},a=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},u=o.vuelidate?o.vuelidate.withParams:a;t.R=u}}]);
//# sourceMappingURL=818.5392f8c0.js.map