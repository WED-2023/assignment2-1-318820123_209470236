"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[683],{265:(e,t,i)=>{i.d(t,{Z:()=>p});i(2526),i(1817);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image,alt:"Recipe Image"}}),t("div",{staticClass:"recipe-content"},[t("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),t("p",{staticClass:"recipe-description"},[e._v(e._s(e.recipe.description))]),t("p",{staticClass:"recipe-meta"},[t("strong",[e._v("Published on:")]),e._v(" "+e._s(e.recipe.date)),t("br"),t("strong",[e._v("Time:")]),e._v(" "+e._s(e.recipe.time)+" ")]),t("button",{staticClass:"recipe-button",on:{click:e.viewRecipe}},[e._v("View Recipe")]),e.showDeleteButton?t("button",{staticClass:"delete-button",on:{click:e.deleteRecipe}},[e._v("Delete")]):e._e()])])},c=[];i(7658);const a={name:"RecipePreview",props:{recipe:{type:Object,required:!0},showDeleteButton:{type:Boolean,default:!1}},methods:{viewRecipe:function(){this.$router.push({name:"recipe",params:{id:this.recipe.id}})},deleteRecipe:function(){this.$emit("delete-recipe",this.recipe)}}},r=a;var n=i(1001),l=(0,n.Z)(r,s,c,!1,null,"79c4cb78",null);const p=l.exports},7683:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("My Family Recipes")]),t("div",{staticClass:"recipes-list"},e._l(e.familyRecipes,(function(e,i){return t("RecipePreview",{key:i,attrs:{recipe:e}})})),1)])])},c=[],a=i(265);const r={name:"FamilyRecipes",components:{RecipePreview:a.Z},data:function(){return{familyRecipes:[]}},created:function(){this.loadFamilyRecipes()},methods:{loadFamilyRecipes:function(){this.familyRecipes=JSON.parse(localStorage.getItem("familyRecipes"))||[]}}},n=r;var l=i(1001),p=(0,l.Z)(n,s,c,!1,null,"6f7f5dd4",null);const o=p.exports}}]);
//# sourceMappingURL=683.67c251de.js.map