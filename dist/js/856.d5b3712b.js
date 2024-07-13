"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[856],{4856:(e,t,r)=>{r.d(t,{A:()=>v});var n=function(){var e,t=this,n=t._self._c;return t.recipe?n("div",{staticClass:"recipe-container"},[n("div",{staticClass:"recipe-header mt-3 mb-4"},[n("h1",{staticClass:"title"},[t._v(t._s(t.recipe.title))]),n("img",{staticClass:"center",attrs:{src:t.recipeImage}})]),n("div",{staticClass:"recipe-body"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapped"},[n("div",{staticClass:"mb-3"},[n("div",[t._v("Ready in "+t._s(t.recipe.readyInMinutes)+" minutes")]),n("div",[t._v("Likes: "+t._s(t.recipe.aggregateLikes)+" likes")]),n("div",[t._v("Servings: "+t._s(t.recipe.servings))]),n("div",{staticClass:"icons"},[t.recipe.vegetarian?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Vegetarian",expression:"'Vegetarian'",modifiers:{hover:!0}}],staticClass:"icon",attrs:{src:r(9104),alt:"Vegetarian"}}):t._e(),t.recipe.vegan?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Vegan",expression:"'Vegan'",modifiers:{hover:!0}}],staticClass:"icon",attrs:{src:r(1905),alt:"Vegan"}}):t._e(),t.recipe.glutenFree?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Gluten Free",expression:"'Gluten Free'",modifiers:{hover:!0}}],staticClass:"icon",attrs:{src:r(5669),alt:"Gluten Free"}}):t._e()])]),t._v(" Ingredients: "),n("ul",t._l(t.recipe.extendedIngredients,(function(e,r){return n("li",{key:r+"_"+e.id},[t._v(" "+t._s(e.original)+" ")])})),0)]),n("div",{staticClass:"wrapped"},[t._v(" Instructions: "),n("ol",t._l((null===(e=t.recipe.analyzedInstructions[0])||void 0===e?void 0:e.steps)||[],(function(e,r){return n("li",{key:r},[t._v(" "+t._s(e.step)+" ")])})),0)])]),n("div",{staticClass:"summary"},[n("p",{domProps:{innerHTML:t._s(t.recipe.summary)}})])]),n("div",{staticClass:"status"},[n("div",{staticClass:"icon-container"},[n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Add to Favorite",expression:"'Add to Favorite'",modifiers:{hover:!0}}],staticClass:"favorite-icon",attrs:{src:t.favoriteIcon,alt:"Favorite"},on:{click:t.toggleFavorite,mouseover:function(e){t.favoriteHover=!0},mouseleave:function(e){t.favoriteHover=!1}}})]),n("div",{staticClass:"icon-container"},[n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Add to Meal Planning",expression:"'Add to Meal Planning'",modifiers:{hover:!0}}],staticClass:"add-icon",attrs:{src:t.addIcon,alt:"Add to Meal Planning"},on:{click:t.toggleMealPlanning,mouseover:function(e){t.addHover=!0},mouseleave:function(e){t.addHover=!1}}})])])]):n("div",[n("p",[t._v("Loading...")])])},a=[],i=r(459),s=r(388),c=(r(7495),r(1761),r(6547)),o=r(9205);const u={data:function(){return{recipe:null,favoriteHover:!1,addHover:!1,isPlanned:!1}},created:function(){var e=this;return(0,s.A)((0,i.A)().mark((function t(){var r,n;return(0,i.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.prev=1,t.next=4,(0,c.dU)(r);case 4:return n=t.sent,e.recipe=n,t.next=8,(0,c.YX)(r);case 8:console.log("Recipe:",e.recipe),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.error("Failed to fetch recipe or mark as watched:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},computed:{recipeImage:function(){return this.recipe.image&&this.recipe.image.match(/\.(jpeg|jpg|gif|png)$/)?this.recipe.image:r(4563)},favoriteIcon:function(){return this.favoriteHover||this.recipe&&this.recipe.favorited?r(6227):r(768)},addIcon:function(){return this.addHover||this.isPlanned?r(9919):r(9113)}},methods:{toggleFavorite:function(){var e=this;return(0,s.A)((0,i.A)().mark((function t(){return(0,i.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$root.store.username){t.next=3;break}return alert("Please log in to add favorites"),t.abrupt("return");case 3:if(t.prev=3,!e.recipe.favorited){t.next=10;break}return t.next=7,(0,o.Fy)(e.recipe.id);case 7:e.recipe.favorited=!1,t.next=13;break;case 10:return t.next=12,(0,o.Gm)(e.recipe.id);case 12:e.recipe.favorited=!0;case 13:t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](3),console.error("Failed to toggle favorite:",t.t0),alert("Failed to update favorite status.");case 19:case"end":return t.stop()}}),t,null,[[3,15]])})))()},toggleMealPlanning:function(){this.isPlanned=!this.isPlanned,this.isPlanned?this.$emit("add-to-meal-planning",this.recipe):this.$emit("remove-from-meal-planning",this.recipe)}}},p=u;var l=r(1656),d=(0,l.A)(p,n,a,!1,null,"30effbd0",null);const v=d.exports},6547:(e,t,r)=>{r.d(t,{AM:()=>f,WI:()=>c,YX:()=>v,ZB:()=>x,dU:()=>u,qq:()=>l});var n=r(459),a=r(388),i=(r(8706),r(4335)),s="https://liors-recipes.cs.bgu.ac.il";function c(){return o.apply(this,arguments)}function o(){return o=(0,a.A)((0,n.A)().mark((function e(){var t;return(0,n.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.A.get("".concat(s,"/recipes/recipe/random"),{params:{number:3},withCredentials:!0});case 3:return t=e.sent,e.abrupt("return",{data:{recipes:t.data}});case 7:return e.prev=7,e.t0=e["catch"](0),console.error("Error fetching random recipes:",e.t0),e.abrupt("return",{data:{recipes:[]}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),o.apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return p=(0,a.A)((0,n.A)().mark((function e(t){var r;return(0,n.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.A.get("".concat(s,"/recipes/").concat(t),{withCredentials:!0});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),console.error("Error fetching recipe by ID:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),p.apply(this,arguments)}function l(e,t,r,n,a){return d.apply(this,arguments)}function d(){return d=(0,a.A)((0,n.A)().mark((function e(t,r,a,c,o){var u;return(0,n.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.A.get("".concat(s,"/recipes/search"),{params:{recipeName:t,cuisine:r,diet:a,intolerance:c,number:o},withCredentials:!0});case 3:return u=e.sent,e.abrupt("return",u.data);case 7:throw e.prev=7,e.t0=e["catch"](0),console.error("Error searching for recipes:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),d.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=(0,a.A)((0,n.A)().mark((function e(t){var r;return(0,n.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.A.post("".concat(s,"/users/watched"),{recipeId:t},{withCredentials:!0});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),console.error("Error marking recipe as watched:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),g.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,a.A)((0,n.A)().mark((function e(t){var r;return(0,n.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.A.get("".concat(s,"/users/lastWatchedRecipes"),{params:{number:t},withCredentials:!0});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),console.error("Error fetching last viewed recipes:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),h.apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return m=(0,a.A)((0,n.A)().mark((function e(t){var r;return(0,n.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.A.post("".concat(s,"/users/isWatched"),{recipeId:t},{withCredentials:!0});case 3:return r=e.sent,e.abrupt("return",r.data.watched);case 7:throw e.prev=7,e.t0=e["catch"](0),console.error("Error checking if recipe is watched:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),m.apply(this,arguments)}},9919:(e,t,r)=>{e.exports=r.p+"img/add_black.43d6230e.png"},9113:(e,t,r)=>{e.exports=r.p+"img/add_white.1fca82fa.png"},4563:(e,t,r)=>{e.exports=r.p+"img/defult_recipe_image.866614de.jpg"},5669:(e,t,r)=>{e.exports=r.p+"img/glutenfree.f36f26b9.jpg"},768:(e,t,r)=>{e.exports=r.p+"img/heart_empty.78edbf9f.png"},6227:(e,t,r)=>{e.exports=r.p+"img/heart_filled.e89ff245.png"},1905:(e,t,r)=>{e.exports=r.p+"img/vegan.1da6da0b.jpg"},9104:(e,t,r)=>{e.exports=r.p+"img/vegetarian.3b19b30c.jpg"},7829:(e,t,r)=>{var n=r(8183).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9228:(e,t,r)=>{r(7495);var n=r(9565),a=r(6840),i=r(7323),s=r(9039),c=r(8227),o=r(6699),u=c("species"),p=RegExp.prototype;e.exports=function(e,t,r,l){var d=c(e),v=!s((function(){var t={};return t[d]=function(){return 7},7!==""[e](t)})),g=v&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!v||!g||r){var f=/./[d],h=t(d,""[e],(function(e,t,r,a,s){var c=t.exec;return c===i||c===p.exec?v&&!s?{done:!0,value:n(f,t,r,a)}:{done:!0,value:n(e,r,t,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(p,d,h[1])}l&&o(p[d],"sham",!0)}},6682:(e,t,r)=>{var n=r(9565),a=r(8551),i=r(4901),s=r(4576),c=r(7323),o=TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var u=n(r,e,t);return null!==u&&a(u),u}if("RegExp"===s(e))return n(c,e,t);throw new o("RegExp#exec called on incompatible receiver")}},7323:(e,t,r)=>{var n=r(9565),a=r(9504),i=r(655),s=r(7979),c=r(8429),o=r(5745),u=r(2360),p=r(1181).get,l=r(3635),d=r(8814),v=o("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,f=g,h=a("".charAt),x=a("".indexOf),m=a("".replace),w=a("".slice),b=function(){var e=/a/,t=/b*/g;return n(g,e,"a"),n(g,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),A=c.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],I=b||_||A||l||d;I&&(f=function(e){var t,r,a,c,o,l,d,I=this,y=p(I),k=i(e),C=y.raw;if(C)return C.lastIndex=I.lastIndex,t=n(f,C,k),I.lastIndex=C.lastIndex,t;var E=y.groups,R=A&&I.sticky,P=n(s,I),F=I.source,H=0,M=k;if(R&&(P=m(P,"y",""),-1===x(P,"g")&&(P+="g"),M=w(k,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==h(k,I.lastIndex-1))&&(F="(?: "+F+")",M=" "+M,H++),r=new RegExp("^(?:"+F+")",P)),_&&(r=new RegExp("^"+F+"$(?!\\s)",P)),b&&(a=I.lastIndex),c=n(g,R?r:I,M),R?c?(c.input=w(c.input,H),c[0]=w(c[0],H),c.index=I.lastIndex,I.lastIndex+=c[0].length):I.lastIndex=0:b&&c&&(I.lastIndex=I.global?c.index+c[0].length:a),_&&c&&c.length>1&&n(v,c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&E)for(c.groups=l=u(null),o=0;o<E.length;o++)d=E[o],l[d[0]]=c[d[1]];return c}),e.exports=f},7979:(e,t,r)=>{var n=r(8551);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},8429:(e,t,r)=>{var n=r(9039),a=r(4475),i=a.RegExp,s=n((function(){var e=i("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),c=s||n((function(){return!i("a","y").sticky})),o=s||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!==e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:s}},3635:(e,t,r)=>{var n=r(9039),a=r(4475),i=a.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.test("\n")&&"s"===e.flags)}))},8814:(e,t,r)=>{var n=r(9039),a=r(4475),i=a.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7495:(e,t,r)=>{var n=r(6518),a=r(7323);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},1761:(e,t,r)=>{var n=r(9565),a=r(9228),i=r(8551),s=r(4117),c=r(8014),o=r(655),u=r(7750),p=r(5966),l=r(7829),d=r(6682);a("match",(function(e,t,r){return[function(t){var r=u(this),a=s(t)?void 0:p(t,e);return a?n(a,t,r):new RegExp(t)[e](o(r))},function(e){var n=i(this),a=o(e),s=r(t,n,a);if(s.done)return s.value;if(!n.global)return d(n,a);var u=n.unicode;n.lastIndex=0;var p,v=[],g=0;while(null!==(p=d(n,a))){var f=o(p[0]);v[g]=f,""===f&&(n.lastIndex=l(a,c(n.lastIndex),u)),g++}return 0===g?null:v}]}))}}]);
//# sourceMappingURL=856.d5b3712b.js.map