(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[935],{8935:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",{staticClass:"title"},[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")])]),e._v(" Ingredients: "),t("ul",e._l(e.recipe.extendedIngredients,(function(r,a){return t("li",{key:a+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[e._v(" Instructions: "),t("ol",e._l(e.recipe._instructions,(function(r){return t("li",{key:r.number},[e._v(" "+e._s(r.step)+" ")])})),0)])])])]):e._e()])])},n=[],i=r(6835),s=r(5957),o=r(8534),u=(r(5827),r(1539),r(1249),r(8309),r(2222),r(4916),r(5306),r(4293));const c={data:function(){return{recipe:null}},created:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var r,a,n,o,c,l,p,g,d,m,f;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r=e.$route.params.id,a=(0,u.iG)(r),n=a.data.recipe,o=n.analyzedInstructions,c=n.instructions,l=n.extendedIngredients,p=n.aggregateLikes,g=n.readyInMinutes,d=n.image,m=n.title,f=o.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat((0,s.Z)(e),(0,s.Z)(t))}),[]),e.recipe={instructions:c,_instructions:f,analyzedInstructions:o,extendedIngredients:l,aggregateLikes:p,readyInMinutes:g,image:d,title:m}}catch(i){console.log(i),e.$router.replace("/NotFound")}case 1:case"end":return t.stop()}}),t)})))()}},l=c;var p=r(1001),g=(0,p.Z)(l,a,n,!1,null,"2d09de55",null);const d=g.exports},1530:(e,t,r)=>{"use strict";var a=r(8710).charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},8457:(e,t,r)=>{"use strict";var a=r(9974),n=r(6916),i=r(7908),s=r(3411),o=r(7659),u=r(4411),c=r(6244),l=r(6135),p=r(4121),g=r(1246),d=Array;e.exports=function(e){var t=i(e),r=u(this),m=arguments.length,f=m>1?arguments[1]:void 0,h=void 0!==f;h&&(f=a(f,m>2?arguments[2]:void 0));var v,b,y,w,x,I,S=g(t),k=0;if(!S||this===d&&o(S))for(v=c(t),b=r?new this(v):d(v);v>k;k++)I=h?f(t[k],k):t[k],l(b,k,I);else for(w=p(t,S),x=w.next,b=r?new this:[];!(y=n(x,w)).done;k++)I=h?s(w,f,[y.value,k],!0):y.value,l(b,k,I);return b.length=k,b}},3671:(e,t,r)=>{var a=r(9662),n=r(7908),i=r(8361),s=r(6244),o=TypeError,u=function(e){return function(t,r,u,c){a(r);var l=n(t),p=i(l),g=s(l),d=e?g-1:0,m=e?-1:1;if(u<2)while(1){if(d in p){c=p[d],d+=m;break}if(d+=m,e?d<0:g<=d)throw o("Reduce of empty array with no initial value")}for(;e?d>=0:g>d;d+=m)d in p&&(c=r(c,p[d],d,l));return c}};e.exports={left:u(!1),right:u(!0)}},3411:(e,t,r)=>{var a=r(9670),n=r(9212);e.exports=function(e,t,r,i){try{return i?t(a(r)[0],r[1]):t(r)}catch(s){n(e,"throw",s)}}},7007:(e,t,r)=>{"use strict";r(4916);var a=r(1470),n=r(8052),i=r(2261),s=r(7293),o=r(5112),u=r(8880),c=o("species"),l=RegExp.prototype;e.exports=function(e,t,r,p){var g=o(e),d=!s((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=d&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!d||!m||r){var f=a(/./[g]),h=t(g,""[e],(function(e,t,r,n,s){var o=a(e),u=t.exec;return u===i||u===l.exec?d&&!s?{done:!0,value:f(t,r,n)}:{done:!0,value:o(r,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(l,g,h[1])}p&&u(l[g],"sham",!0)}},647:(e,t,r)=>{var a=r(1702),n=r(7908),i=Math.floor,s=a("".charAt),o=a("".replace),u=a("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,p,g){var d=r+e.length,m=a.length,f=l;return void 0!==p&&(p=n(p),f=c),o(g,f,(function(n,o){var c;switch(s(o,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,r);case"'":return u(t,d);case"<":c=p[u(o,1,-1)];break;default:var l=+o;if(0===l)return n;if(l>m){var g=i(l/10);return 0===g?n:g<=m?void 0===a[g-1]?s(o,1):a[g-1]+s(o,1):n}c=a[l-1]}return void 0===c?"":c}))}},7651:(e,t,r)=>{var a=r(6916),n=r(9670),i=r(614),s=r(4326),o=r(2261),u=TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var c=a(r,e,t);return null!==c&&n(c),c}if("RegExp"===s(e))return a(o,e,t);throw u("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{"use strict";var a=r(6916),n=r(1702),i=r(1340),s=r(7066),o=r(2999),u=r(2309),c=r(30),l=r(9909).get,p=r(9441),g=r(7168),d=u("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,f=m,h=n("".charAt),v=n("".indexOf),b=n("".replace),y=n("".slice),w=function(){var e=/a/,t=/b*/g;return a(m,e,"a"),a(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=o.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],S=w||I||x||p||g;S&&(f=function(e){var t,r,n,o,u,p,g,S=this,k=l(S),C=i(e),L=k.raw;if(L)return L.lastIndex=S.lastIndex,t=a(f,L,C),S.lastIndex=L.lastIndex,t;var _=k.groups,T=x&&S.sticky,A=a(s,S),O=S.source,E=0,R=C;if(T&&(A=b(A,"y",""),-1===v(A,"g")&&(A+="g"),R=y(C,S.lastIndex),S.lastIndex>0&&(!S.multiline||S.multiline&&"\n"!==h(C,S.lastIndex-1))&&(O="(?: "+O+")",R=" "+R,E++),r=new RegExp("^(?:"+O+")",A)),I&&(r=new RegExp("^"+O+"$(?!\\s)",A)),w&&(n=S.lastIndex),o=a(m,T?r:S,R),T?o?(o.input=y(o.input,E),o[0]=y(o[0],E),o.index=S.lastIndex,S.lastIndex+=o[0].length):S.lastIndex=0:w&&o&&(S.lastIndex=S.global?o.index+o[0].length:n),I&&o&&o.length>1&&a(d,o[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&_)for(o.groups=p=c(null),u=0;u<_.length;u++)g=_[u],p[g[0]]=o[g[1]];return o}),e.exports=f},7066:(e,t,r)=>{"use strict";var a=r(9670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var a=r(7293),n=r(7854),i=n.RegExp,s=a((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=s||a((function(){return!i("a","y").sticky})),u=s||a((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:o,UNSUPPORTED_Y:s}},9441:(e,t,r)=>{var a=r(7293),n=r(7854),i=n.RegExp;e.exports=a((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var a=r(7293),n=r(7854),i=n.RegExp;e.exports=a((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},2222:(e,t,r)=>{"use strict";var a=r(2109),n=r(7293),i=r(3157),s=r(111),o=r(7908),u=r(6244),c=r(7207),l=r(6135),p=r(5417),g=r(1194),d=r(5112),m=r(7392),f=d("isConcatSpreadable"),h=m>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),v=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)},b=!h||!g("concat");a({target:"Array",proto:!0,arity:1,forced:b},{concat:function(e){var t,r,a,n,i,s=o(this),g=p(s,0),d=0;for(t=-1,a=arguments.length;t<a;t++)if(i=-1===t?s:arguments[t],v(i))for(n=u(i),c(d+n),r=0;r<n;r++,d++)r in i&&l(g,d,i[r]);else c(d+1),l(g,d++,i);return g.length=d,g}})},1038:(e,t,r)=>{var a=r(2109),n=r(8457),i=r(7072),s=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:s},{from:n})},9753:(e,t,r)=>{var a=r(2109),n=r(3157);a({target:"Array",stat:!0},{isArray:n})},1249:(e,t,r)=>{"use strict";var a=r(2109),n=r(2092).map,i=r(1194),s=i("map");a({target:"Array",proto:!0,forced:!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,t,r)=>{"use strict";var a=r(2109),n=r(3671).left,i=r(9341),s=r(7392),o=r(5268),u=!o&&s>79&&s<83,c=u||!i("reduce");a({target:"Array",proto:!0,forced:c},{reduce:function(e){var t=arguments.length;return n(this,e,t,t>1?arguments[1]:void 0)}})},4916:(e,t,r)=>{"use strict";var a=r(2109),n=r(2261);a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},7601:(e,t,r)=>{"use strict";r(4916);var a=r(2109),n=r(6916),i=r(614),s=r(9670),o=r(1340),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),c=/./.test;a({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=s(this),r=o(e),a=t.exec;if(!i(a))return n(c,t,r);var u=n(a,t,r);return null!==u&&(s(u),!0)}})},5306:(e,t,r)=>{"use strict";var a=r(2104),n=r(6916),i=r(1702),s=r(7007),o=r(7293),u=r(9670),c=r(614),l=r(8554),p=r(9303),g=r(7466),d=r(1340),m=r(4488),f=r(1530),h=r(8173),v=r(647),b=r(7651),y=r(5112),w=y("replace"),x=Math.max,I=Math.min,S=i([].concat),k=i([].push),C=i("".indexOf),L=i("".slice),_=function(e){return void 0===e?e:String(e)},T=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),O=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,r){var i=A?"$":"$0";return[function(e,r){var a=m(this),i=l(e)?void 0:h(e,w);return i?n(i,e,a,r):n(t,d(a),e,r)},function(e,n){var s=u(this),o=d(e);if("string"==typeof n&&-1===C(n,i)&&-1===C(n,"$<")){var l=r(t,s,o,n);if(l.done)return l.value}var m=c(n);m||(n=d(n));var h=s.global;if(h){var y=s.unicode;s.lastIndex=0}var w=[];while(1){var T=b(s,o);if(null===T)break;if(k(w,T),!h)break;var A=d(T[0]);""===A&&(s.lastIndex=f(o,g(s.lastIndex),y))}for(var O="",E=0,R=0;R<w.length;R++){T=w[R];for(var $=d(T[0]),N=x(I(p(T.index),o.length),0),P=[],j=1;j<T.length;j++)k(P,_(T[j]));var D=T.groups;if(m){var B=S([$],P,N,o);void 0!==D&&k(B,D);var G=d(a(n,void 0,B))}else G=v($,o,N,P,D,n);N>=E&&(O+=L(o,E,N)+G,E=N+$.length)}return O+L(o,E)}]}),!O||!T||A)},4293:(e,t,r)=>{"use strict";r.d(t,{uM:()=>o,iG:()=>s,ij:()=>i});r(7658);const a=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}'),n=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}');function i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],r=0;r<e;r++)t.push(n);return{data:{recipes:t}}}function s(e){return{data:{recipe:a}}}function o(){var e=[n,n];return{data:{recipes:e}}}},5957:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});r(9753);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e){if(Array.isArray(e))return a(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function s(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}r(1703),r(6647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return n(e)||i(e)||s(e)||o()}}}]);
//# sourceMappingURL=935.eb3ba2ba.js.map