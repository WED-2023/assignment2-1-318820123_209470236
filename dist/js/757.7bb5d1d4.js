(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[757],{7502:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("div",{staticClass:"recipe-image-container",on:{click:e.viewRecipe,mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image,alt:"Recipe Image"}}),e.hover?t("div",{staticClass:"overlay"},[t("span",[e._v("Click to view")])]):e._e()]),t("div",{staticClass:"recipe-content"},[t("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("div",{staticClass:"icons"},[e.recipe.vegetarian?t("img",{staticClass:"icon",attrs:{src:i(7943),alt:"Vegetarian"}}):e._e(),e.recipe.vegan?t("img",{staticClass:"icon",attrs:{src:i(4887),alt:"Vegan"}}):e._e(),e.recipe.glutenFree?t("img",{staticClass:"icon",attrs:{src:i(5041),alt:"Gluten Free"}}):e._e()]),t("p",{staticClass:"recipe-meta"},[t("strong",[e._v("Preparation time:")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes"),t("br"),t("strong",[e._v("Likes:")]),e._v(" "+e._s(e.recipe.aggregateLikes)+" ")]),t("div",{staticClass:"status"},[e.recipe.viewed?t("span",{staticClass:"viewed"},[e._v("Viewed")]):e._e(),t("img",{staticClass:"favorite-icon",attrs:{src:e.favoriteIcon,alt:"Favorite"},on:{click:e.toggleFavorite,mouseover:function(t){e.favoriteHover=!0},mouseleave:function(t){e.favoriteHover=!1}}})])])])},s=[];i(7658),i(5212),i(1539),i(7327),i(8862);const a={name:"RecipePreview",props:{recipe:{type:Object,required:!0}},data:function(){return{hover:!1,favoriteHover:!1}},computed:{favoriteIcon:function(){return this.favoriteHover||this.recipe.favorited?i(3e3):i(2996)}},methods:{viewRecipe:function(){this.$router.push({name:"recipe",params:{id:this.recipe.id}})},toggleFavorite:function(){this.recipe.favorited=!this.recipe.favorited,this.updateFavorites(),this.$emit("toggle-favorite",this.recipe)},updateFavorites:function(){var e=this,t=JSON.parse(localStorage.getItem("favoriteRecipes"))||[];this.recipe.favorited?t.some((function(t){return t.id===e.recipe.id}))||t.push(this.recipe):t=t.filter((function(t){return t.id!==e.recipe.id})),localStorage.setItem("favoriteRecipes",JSON.stringify(t))}}},c=a;var o=i(1001),n=(0,o.Z)(c,r,s,!1,null,"86c6ed64",null);const p=n.exports},7757:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>v});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("My Recipes")]),t("div",{staticClass:"recipes-list"},e._l(e.recipes,(function(i,r){return t("div",{key:r,staticClass:"recipe-wrapper"},[t("RecipePreview",{attrs:{recipe:i},on:{"toggle-favorite":e.toggleFavorite}}),t("button",{staticClass:"delete-button",on:{click:function(t){return e.deleteRecipe(i)}}},[e._v("Delete")])],1)})),0)])])},s=[],a=(i(7327),i(1539),i(8862),i(7502));const c={name:"MyRecipesPage",components:{RecipePreview:a.Z},data:function(){return{recipes:[]}},created:function(){this.loadRecipes()},methods:{loadRecipes:function(){this.recipes=JSON.parse(localStorage.getItem("recipes"))||[]},deleteRecipe:function(e){this.recipes=this.recipes.filter((function(t){return t!==e})),localStorage.setItem("recipes",JSON.stringify(this.recipes)),this.updateFavorites()},toggleFavorite:function(e){e.favorited=!e.favorited,this.updateFavorites()},updateFavorites:function(){var e=this.recipes.filter((function(e){return e.favorited}));localStorage.setItem("favoriteRecipes",JSON.stringify(e))}}},o=c;var n=i(1001),p=(0,n.Z)(o,r,s,!1,null,"b331fc9a",null);const v=p.exports},1194:(e,t,i)=>{var r=i(7293),s=i(5112),a=i(7392),c=s("species");e.exports=function(e){return a>=51||!r((function(){var t=[],i=t.constructor={};return i[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},7327:(e,t,i)=>{"use strict";var r=i(2109),s=i(2092).filter,a=i(1194),c=a("filter");r({target:"Array",proto:!0,forced:!c},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},5212:(e,t,i)=>{"use strict";var r=i(2109),s=i(2092).some,a=i(9341),c=a("some");r({target:"Array",proto:!0,forced:!c},{some:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},5041:(e,t,i)=>{"use strict";e.exports=i.p+"img/glutenfree.f36f26b9.jpg"},2996:(e,t,i)=>{"use strict";e.exports=i.p+"img/heart_empty.78edbf9f.png"},3e3:(e,t,i)=>{"use strict";e.exports=i.p+"img/heart_filled.e89ff245.png"},4887:(e,t,i)=>{"use strict";e.exports=i.p+"img/vegan.1da6da0b.jpg"},7943:(e,t,i)=>{"use strict";e.exports=i.p+"img/vegetarian.3b19b30c.jpg"}}]);
//# sourceMappingURL=757.7bb5d1d4.js.map