"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[636],{3898:(e,n,i)=>{i.r(n),i.d(n,{default:()=>o});var a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"meal-planning-page"},[n("h1",{staticClass:"title"},[e._v("Meal Planning")]),0===e.plannedRecipes.length?n("div",[n("p",[e._v("No recipes planned yet.")])]):n("div",e._l(e.plannedRecipes,(function(i,a){return n("div",{key:a},[n("FullRecipeView",{attrs:{recipe:i},on:{"remove-from-meal-planning":e.removeFromMealPlanning}})],1)})),0)])},t=[],l=(i(7327),i(1539),i(8862),i(3));const s={name:"MealPlanningPage",components:{FullRecipeView:l.Z},data:function(){return{plannedRecipes:[]}},mounted:function(){var e=localStorage.getItem("plannedRecipes");e&&(this.plannedRecipes=JSON.parse(e))},methods:{removeFromMealPlanning:function(e){this.plannedRecipes=this.plannedRecipes.filter((function(n){return n.id!==e.id})),localStorage.setItem("plannedRecipes",JSON.stringify(this.plannedRecipes))}}},p=s;var c=i(1001),r=(0,c.Z)(p,a,t,!1,null,"0f22f420",null);const o=r.exports}}]);
//# sourceMappingURL=636.cb6b5d1b.js.map