(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[422],{1422:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});var t=function(){var a=this,e=a._self._c;return e("div",{staticClass:"background"},[e("div",{staticClass:"container custom-font"},[e("h1",{staticClass:"title"},[a._v("Register")]),e("b-form",{on:{submit:function(e){return e.preventDefault(),a.onRegister.apply(null,arguments)},reset:function(e){return e.preventDefault(),a.onReset.apply(null,arguments)}}},[e("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[e("b-form-input",{staticClass:"form-input",attrs:{id:"username",type:"text",state:a.validateState("username")},model:{value:a.$v.form.username.$model,callback:function(e){a.$set(a.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),a.$v.form.username.required?a.$v.form.username.length?a._e():e("b-form-invalid-feedback",[a._v(" Username length should be between 3-8 characters long ")]):e("b-form-invalid-feedback",[a._v(" Username is required ")]),a.$v.form.username.alpha?a._e():e("b-form-invalid-feedback",[a._v(" Username should be alphabetic ")])],1),e("b-form-group",{attrs:{id:"input-group-email","label-cols-sm":"3",label:"Email:","label-for":"email"}},[e("b-form-input",{staticClass:"form-input",attrs:{id:"email",type:"email",state:a.validateState("email")},model:{value:a.$v.form.email.$model,callback:function(e){a.$set(a.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),a.$v.form.email.required?a.$v.form.email.email?a._e():e("b-form-invalid-feedback",[a._v(" Email must be valid ")]):e("b-form-invalid-feedback",[a._v(" Email is required ")])],1),e("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[e("b-form-select",{staticClass:"form-select",attrs:{id:"country",options:a.countries,state:a.validateState("country")},model:{value:a.$v.form.country.$model,callback:function(e){a.$set(a.$v.form.country,"$model",e)},expression:"$v.form.country.$model"}}),e("b-form-invalid-feedback",[a._v(" Country is required ")])],1),e("b-form-group",{attrs:{id:"input-group-password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[e("b-form-input",{staticClass:"form-input",attrs:{id:"password",type:"password",state:a.validateState("password")},model:{value:a.$v.form.password.$model,callback:function(e){a.$set(a.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),a.$v.form.password.required?a.$v.form.password.$error?e("b-form-text",{attrs:{"text-variant":"info"}},[a._v(" Your password should be "),e("strong",[a._v("strong")]),a._v(". "),e("br"),a._v(" For that, your password should be: ")]):a._e():e("b-form-invalid-feedback",[a._v(" Password is required ")]),a.$v.form.password.required&&!a.$v.form.password.length?e("b-form-invalid-feedback",[a._v(" Have length between 5-10 characters long ")]):a._e()],1),e("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[e("b-form-input",{staticClass:"form-input",attrs:{id:"confirmedPassword",type:"password",state:a.validateState("confirmedPassword")},model:{value:a.$v.form.confirmedPassword.$model,callback:function(e){a.$set(a.$v.form.confirmedPassword,"$model",e)},expression:"$v.form.confirmedPassword.$model"}}),a.$v.form.confirmedPassword.required?a.$v.form.confirmedPassword.sameAsPassword?a._e():e("b-form-invalid-feedback",[a._v(" The confirmed password is not equal to the original password ")]):e("b-form-invalid-feedback",[a._v(" Password confirmation is required ")])],1),e("div",{staticClass:"form-buttons"},[e("b-button",{staticClass:"reset-button",attrs:{type:"reset",variant:"danger"}},[a._v("Reset")]),e("b-button",{staticClass:"submit-button",attrs:{type:"submit",variant:"primary"}},[a._v("Register")])],1),e("div",{staticClass:"mt-2"},[a._v(" You have an account already? "),e("router-link",{staticClass:"login-link",attrs:{to:"login"}},[a._v("Log in here")])],1)],1),a.form.submitError?e("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[a._v(" Register failed: "+a._s(a.form.submitError)+" ")]):a._e()],1)])},n=[],i=r(6835),o=r(8534),s=r(5957);r(7658);const l=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var u=r(379),d=r(9239);const c={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:u.C1,length:function(a){return(0,u.Ei)(3)(a)&&(0,u.BS)(8)(a)},alpha:u.Fq},email:{required:u.C1,email:u.Do},country:{required:u.C1},password:{required:u.C1,length:function(a){return(0,u.Ei)(5)(a)&&(0,u.BS)(10)(a)}},confirmedPassword:{required:u.C1,sameAsPassword:(0,u.sH)("password")}}},mounted:function(){var a;(a=this.countries).push.apply(a,(0,s.Z)(l))},methods:{validateState:function(a){var e=this.$v.form[a],r=e.$dirty,t=e.$error;return r?!t:null},Register:function(){var a=this;return(0,o.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{r={username:a.form.username,password:a.form.password},(0,d.mockRegister)(r),a.$router.push("/login")}catch(t){console.log(t.response),a.form.submitError=t.response.data.message}case 1:case"end":return e.stop()}}),e)})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var a=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){a.$v.$reset()}))}}},m=c;var f=r(1001),v=(0,f.Z)(m,t,n,!1,null,"887f0016",null);const p=v.exports},8457:(a,e,r)=>{"use strict";var t=r(9974),n=r(6916),i=r(7908),o=r(3411),s=r(7659),l=r(4411),u=r(6244),d=r(6135),c=r(4121),m=r(1246),f=Array;a.exports=function(a){var e=i(a),r=l(this),v=arguments.length,p=v>1?arguments[1]:void 0,b=void 0!==p;b&&(p=t(p,v>2?arguments[2]:void 0));var g,h,y,w,S,$,x=m(e),C=0;if(!x||this===f&&s(x))for(g=u(e),h=r?new this(g):f(g);g>C;C++)$=b?p(e[C],C):e[C],d(h,C,$);else for(w=c(e,x),S=w.next,h=r?new this:[];!(y=n(S,w)).done;C++)$=b?o(w,p,[y.value,C],!0):y.value,d(h,C,$);return h.length=C,h}},3411:(a,e,r)=>{var t=r(9670),n=r(9212);a.exports=function(a,e,r,i){try{return i?e(t(r)[0],r[1]):e(r)}catch(o){n(a,"throw",o)}}},2261:(a,e,r)=>{"use strict";var t=r(6916),n=r(1702),i=r(1340),o=r(7066),s=r(2999),l=r(2309),u=r(30),d=r(9909).get,c=r(9441),m=r(7168),f=l("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,b=n("".charAt),g=n("".indexOf),h=n("".replace),y=n("".slice),w=function(){var a=/a/,e=/b*/g;return t(v,a,"a"),t(v,e,"a"),0!==a.lastIndex||0!==e.lastIndex}(),S=s.BROKEN_CARET,$=void 0!==/()??/.exec("")[1],x=w||$||S||c||m;x&&(p=function(a){var e,r,n,s,l,c,m,x=this,C=d(x),I=i(a),R=C.raw;if(R)return R.lastIndex=x.lastIndex,e=t(p,R,I),x.lastIndex=R.lastIndex,e;var k=C.groups,A=S&&x.sticky,P=t(o,x),_=x.source,M=0,E=I;if(A&&(P=h(P,"y",""),-1===g(P,"g")&&(P+="g"),E=y(I,x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==b(I,x.lastIndex-1))&&(_="(?: "+_+")",E=" "+E,M++),r=new RegExp("^(?:"+_+")",P)),$&&(r=new RegExp("^"+_+"$(?!\\s)",P)),w&&(n=x.lastIndex),s=t(v,A?r:x,E),A?s?(s.input=y(s.input,M),s[0]=y(s[0],M),s.index=x.lastIndex,x.lastIndex+=s[0].length):x.lastIndex=0:w&&s&&(x.lastIndex=x.global?s.index+s[0].length:n),$&&s&&s.length>1&&t(f,s[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s&&k)for(s.groups=c=u(null),l=0;l<k.length;l++)m=k[l],c[m[0]]=s[m[1]];return s}),a.exports=p},7066:(a,e,r)=>{"use strict";var t=r(9670);a.exports=function(){var a=t(this),e="";return a.hasIndices&&(e+="d"),a.global&&(e+="g"),a.ignoreCase&&(e+="i"),a.multiline&&(e+="m"),a.dotAll&&(e+="s"),a.unicode&&(e+="u"),a.unicodeSets&&(e+="v"),a.sticky&&(e+="y"),e}},2999:(a,e,r)=>{var t=r(7293),n=r(7854),i=n.RegExp,o=t((function(){var a=i("a","y");return a.lastIndex=2,null!=a.exec("abcd")})),s=o||t((function(){return!i("a","y").sticky})),l=o||t((function(){var a=i("^r","gy");return a.lastIndex=2,null!=a.exec("str")}));a.exports={BROKEN_CARET:l,MISSED_STICKY:s,UNSUPPORTED_Y:o}},9441:(a,e,r)=>{var t=r(7293),n=r(7854),i=n.RegExp;a.exports=t((function(){var a=i(".","s");return!(a.dotAll&&a.exec("\n")&&"s"===a.flags)}))},7168:(a,e,r)=>{var t=r(7293),n=r(7854),i=n.RegExp;a.exports=t((function(){var a=i("(?<a>b)","g");return"b"!==a.exec("b").groups.a||"bc"!=="b".replace(a,"$<a>c")}))},1038:(a,e,r)=>{var t=r(2109),n=r(8457),i=r(7072),o=!i((function(a){Array.from(a)}));t({target:"Array",stat:!0,forced:o},{from:n})},4916:(a,e,r)=>{"use strict";var t=r(2109),n=r(2261);t({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},7601:(a,e,r)=>{"use strict";r(4916);var t=r(2109),n=r(6916),i=r(614),o=r(9670),s=r(1340),l=function(){var a=!1,e=/[ac]/;return e.exec=function(){return a=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&a}(),u=/./.test;t({target:"RegExp",proto:!0,forced:!l},{test:function(a){var e=o(this),r=s(a),t=e.exec;if(!i(t))return n(u,e,r);var l=n(t,e,r);return null!==l&&(o(l),!0)}})},5957:(a,e,r)=>{"use strict";r.d(e,{Z:()=>l});r(9753);function t(a,e){(null==e||e>a.length)&&(e=a.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=a[r];return t}function n(a){if(Array.isArray(a))return t(a)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function i(a){if("undefined"!==typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}r(7042),r(8309),r(4916),r(7601);function o(a,e){if(a){if("string"===typeof a)return t(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);return"Object"===r&&a.constructor&&(r=a.constructor.name),"Map"===r||"Set"===r?Array.from(a):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(a,e):void 0}}r(1703),r(6647);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(a){return n(a)||i(a)||o(a)||s()}}}]);
//# sourceMappingURL=422.3008db50.js.map