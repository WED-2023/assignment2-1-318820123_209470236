(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[356],{6356:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>L});var a=function(){var e=this,i=e._self._c;return i("div",{staticClass:"background"},[i("div",{staticClass:"container"},[i("div",{staticClass:"left-side-container"},[i("div",{staticClass:"left-side"},[i("RecipePreviewList",{attrs:{title:"Random Recipes",recipes:e.randomRecipes,amountToShow:e.numRandomRecipes}}),i("button",{staticClass:"form-button-custom",on:{click:e.fetchRandomRecipes}},[e._v("Get New Recipes")])],1)]),i("div",{staticClass:"right-side-container"},[i("div",{staticClass:"right-side"},[e.$root.store.username?[i("div",{staticClass:"user-section"},[i("RecipePreviewList",{attrs:{title:"Last Viewed Recipes",recipes:e.lastViewedRecipes,amountToShow:e.numLastViewedRecipes}})],1)]:[i("div",{staticClass:"guest-section"},[i("button",{staticClass:"login",on:{click:e.goToLogin}},[e._v("Click To Login")]),i("button",{staticClass:"register",on:{click:e.goToRegister}},[e._v("Click To Register")])])]],2)])])])},s=[],r=(t(7658),t(4293)),n=function(){var e=this,i=e._self._c;return i("b-container",[i("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),i("b-row",e._l(e.displayedRecipes,(function(e){return i("b-col",{key:e.id},[i("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},o=[],c=(t(9653),t(7042),t(2526),t(1817),function(){var e=this,i=e._self._c;return i("div",{staticClass:"recipe-preview"},[i("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image,alt:"Recipe Image"}}),i("div",{staticClass:"recipe-content"},[i("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),i("p",{staticClass:"recipe-description"},[e._v(e._s(e.recipe.description))]),i("p",{staticClass:"recipe-meta"},[i("strong",[e._v("Published on:")]),e._v(" "+e._s(e.recipe.date)),i("br"),i("strong",[e._v("Time:")]),e._v(" "+e._s(e.recipe.time)+" ")]),i("button",{staticClass:"recipe-button",on:{click:e.viewRecipe}},[e._v("View Recipe")])])])}),u=[];const l={name:"RecipePreview",props:{recipe:{type:Object,required:!0}},methods:{viewRecipe:function(){this.$router.push({name:"recipe",params:{id:this.recipe.id}})}}},p=l;var m=t(1001),g=(0,m.Z)(p,c,u,!1,null,"05c2c8f2",null);const d=g.exports,h={name:"RecipePreviewList",components:{RecipePreview:d},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0},amountToShow:{type:Number,default:3}},computed:{displayedRecipes:function(){return this.recipes.slice(0,this.amountToShow)}}},f=h;var b=(0,m.Z)(f,n,o,!1,null,"5a8ea1c5",null);const v=b.exports,w={components:{RecipePreviewList:v},data:function(){return{lastViewedRecipes:[],randomRecipes:[],numRandomRecipes:3,numLastViewedRecipes:5}},methods:{goToLogin:function(){this.$router.push({name:"login"})},goToRegister:function(){this.$router.push({name:"register"})},fetchLastViewedRecipes:function(){if(this.$root.store.username){var e=(0,r.uM)();this.lastViewedRecipes=e.data.recipes}},fetchRandomRecipes:function(){var e=(0,r.ij)(3);this.randomRecipes=e.data.recipes}},mounted:function(){this.fetchLastViewedRecipes(),this.fetchRandomRecipes()}},S=w;var y=(0,m.Z)(S,a,s,!1,null,"31928d32",null);const L=y.exports},3111:(e,i,t)=>{var a=t(1702),s=t(4488),r=t(1340),n=t(1361),o=a("".replace),c=RegExp("^["+n+"]+"),u=RegExp("(^|[^"+n+"])["+n+"]+$"),l=function(e){return function(i){var t=r(s(i));return 1&e&&(t=o(t,c,"")),2&e&&(t=o(t,u,"$1")),t}};e.exports={start:l(1),end:l(2),trim:l(3)}},863:(e,i,t)=>{var a=t(1702);e.exports=a(1..valueOf)},1361:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9653:(e,i,t)=>{"use strict";var a=t(2109),s=t(1913),r=t(9781),n=t(7854),o=t(857),c=t(1702),u=t(4705),l=t(2597),p=t(9587),m=t(7976),g=t(2190),d=t(7593),h=t(7293),f=t(8006).f,b=t(1236).f,v=t(3070).f,w=t(863),S=t(3111).trim,y="Number",L=n[y],I=o[y],C=L.prototype,R=n.TypeError,k=c("".slice),T=c("".charCodeAt),_=function(e){var i=d(e,"number");return"bigint"==typeof i?i:N(i)},N=function(e){var i,t,a,s,r,n,o,c,u=d(e,"number");if(g(u))throw R("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=S(u),i=T(u,0),43===i||45===i){if(t=T(u,2),88===t||120===t)return NaN}else if(48===i){switch(T(u,1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+u}for(r=k(u,2),n=r.length,o=0;o<n;o++)if(c=T(r,o),c<48||c>s)return NaN;return parseInt(r,a)}return+u},P=u(y,!L(" 0o1")||!L("0b1")||L("+0x1")),x=function(e){return m(C,e)&&h((function(){w(e)}))},O=function(e){var i=arguments.length<1?0:L(_(e));return x(this)?p(Object(i),this,O):i};O.prototype=C,P&&!s&&(C.constructor=O),a({global:!0,constructor:!0,wrap:!0,forced:P},{Number:O});var j=function(e,i){for(var t,a=r?f(i):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),s=0;a.length>s;s++)l(i,t=a[s])&&!l(e,t)&&v(e,t,b(i,t))};s&&I&&j(o[y],I),(P||s)&&j(o[y],L)},4293:(e,i,t)=>{"use strict";t.d(i,{uM:()=>o,iG:()=>n,ij:()=>r});t(7658);const a=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}'),s=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}');function r(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=[],t=0;t<e;t++)i.push(s);return{data:{recipes:i}}}function n(e){return{data:{recipe:a}}}function o(){var e=[s,s];return{data:{recipes:e}}}}}]);
//# sourceMappingURL=356.e779d383.js.map