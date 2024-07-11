"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[114],{5324:(e,t,r)=>{r.d(t,{Z:()=>u});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("div",{staticClass:"recipe-image-container",on:{click:e.viewRecipe,mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.imageUrl,alt:"Recipe Image"}}),e.hover?t("div",{staticClass:"overlay"},[t("span",[e._v("Click to view")])]):e._e()]),t("div",{staticClass:"recipe-content"},[t("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("div",{staticClass:"icons"},[e.recipe.vegetarian?t("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:"Vegetarian",expression:"'Vegetarian'"}],staticClass:"icon",attrs:{src:r(7943),alt:"Vegetarian"}}):e._e(),e.recipe.vegan?t("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:"Vegan",expression:"'Vegan'"}],staticClass:"icon",attrs:{src:r(4887),alt:"Vegan"}}):e._e(),e.recipe.glutenFree?t("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:"Gluten Free",expression:"'Gluten Free'"}],staticClass:"icon",attrs:{src:r(5041),alt:"Gluten Free"}}):e._e()]),t("p",{staticClass:"recipe-meta"},[t("strong",[e._v("Preparation time:")]),e._v(" "+e._s(e.recipe.preparation_time)+" minutes"),t("br"),t("strong",[e._v("Likes:")]),e._v(" "+e._s(e.recipe.aggregateLikes)+" ")]),t("div",{staticClass:"status"},[e.recipe.viewed?t("span",{staticClass:"viewed"},[e._v("Viewed")]):e._e(),t("img",{staticClass:"favorite-icon",attrs:{src:e.favoriteIcon,alt:"Favorite"},on:{click:e.toggleFavorite,mouseover:function(t){e.favoriteHover=!0},mouseleave:function(t){e.favoriteHover=!1}}})])])])},a=[],s=r(6835),n=r(8534),o=(r(7658),r(3099));const c={name:"RecipePreview",props:{recipe:{type:Object,required:!0}},data:function(){return{hover:!1,favoriteHover:!1}},computed:{favoriteIcon:function(){return this.favoriteHover||this.recipe.favorited?r(3e3):r(2996)},isLoggedIn:function(){return this.$root.store.username}},methods:{viewRecipe:function(){this.$router.push({name:"recipe",params:{id:this.recipe.id}})},toggleFavorite:function(){var e=this;return(0,n.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isLoggedIn){t.next=3;break}return alert("Please log in to add favorites"),t.abrupt("return");case 3:if(e.recipe.favorited=!e.recipe.favorited,t.prev=4,!e.recipe.favorited){t.next=10;break}return t.next=8,(0,o.a3)(e.recipe.id);case 8:t.next=12;break;case 10:return t.next=12,(0,o.Ni)(e.recipe.id);case 12:e.$emit("toggle-favorite",e.recipe),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](4),console.error("Failed to toggle favorite:",t.t0),alert("Failed to toggle favorite. Please try again.");case 19:case"end":return t.stop()}}),t,null,[[4,15]])})))()}}},v=c;var p=r(1001),l=(0,p.Z)(v,i,a,!1,null,"219630ea",null);const u=l.exports},8114:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Favorite Recipes")]),t("div",{staticClass:"recipes-list"},e._l(e.favoriteRecipes,(function(r,i){return t("RecipePreview",{key:i,attrs:{recipe:r},on:{"toggle-favorite":e.removeFromFavorites}})})),1)])])},a=[],s=r(6835),n=r(8534),o=(r(7327),r(1539),r(5324)),c=r(3099);const v={name:"FavoriteRecipesPage",components:{RecipePreview:o.Z},data:function(){return{favoriteRecipes:[]}},created:function(){this.loadFavoriteRecipes()},methods:{loadFavoriteRecipes:function(){var e=this;return(0,n.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.lZ)();case 3:r=t.sent,e.favoriteRecipes=r,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("Failed to load favorite recipes:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},removeFromFavorites:function(e){var t=this;return(0,n.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,removeFavorite(e.id);case 3:t.favoriteRecipes=t.favoriteRecipes.filter((function(t){return t.id!==e.id})),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),console.error("Failed to remove favorite recipe:",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}}},p=v;var l=r(1001),u=(0,l.Z)(p,i,a,!1,null,"5cce8aea",null);const f=u.exports},5041:(e,t,r)=>{e.exports=r.p+"img/glutenfree.f36f26b9.jpg"},2996:(e,t,r)=>{e.exports=r.p+"img/heart_empty.78edbf9f.png"},3e3:(e,t,r)=>{e.exports=r.p+"img/heart_filled.e89ff245.png"},4887:(e,t,r)=>{e.exports=r.p+"img/vegan.1da6da0b.jpg"},7943:(e,t,r)=>{e.exports=r.p+"img/vegetarian.3b19b30c.jpg"}}]);
//# sourceMappingURL=114.c1e42d74.js.map