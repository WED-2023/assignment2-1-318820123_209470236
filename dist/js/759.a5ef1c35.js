(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[759],{1194:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(7392),u=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[],e=r.constructor={};return e[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},1589:(t,r,e)=>{var n=e(1400),o=e(6244),i=e(6135),u=Array,s=Math.max;t.exports=function(t,r,e){for(var f=o(t),a=n(r,f),c=n(void 0===e?f:e,f),v=u(s(c-a,0)),l=0;a<c;a++,l++)i(v,l,t[a]);return v.length=l,v}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3463),i=e(9114);t.exports=function(t,r,e){var u=n(r);u in t?o.f(t,u,i(0,e)):t[u]=e}},1156:(t,r,e)=>{var n=e(4326),o=e(5656),i=e(8006).f,u=e(1589),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return i(t)}catch(r){return u(s)}};t.exports.f=function(t){return s&&"Window"==n(t)?f(t):i(o(t))}},857:(t,r,e)=>{var n=e(7854);t.exports=n},6532:(t,r,e)=>{var n=e(6916),o=e(5005),i=e(5112),u=e(8052);t.exports=function(){var t=o("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,s=i("toPrimitive");r&&!r[s]&&u(r,s,(function(t){return n(e,this)}),{arity:1})}},2015:(t,r,e)=>{var n=e(6293);t.exports=n&&!!Symbol["for"]&&!!Symbol.keyFor},6800:(t,r,e)=>{var n=e(857),o=e(2597),i=e(6061),u=e(3463).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},6061:(t,r,e)=>{var n=e(5112);r.f=n},9660:(t,r,e)=>{var n=e(2109),o=e(6293),i=e(7293),u=e(5181),s=e(7908),f=!o||i((function(){u.f(1)}));n({target:"Object",stat:!0,forced:f},{getOwnPropertySymbols:function(t){var r=u.f;return r?r(s(t)):[]}})},4032:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(6916),u=e(1702),s=e(1913),f=e(9781),a=e(6293),c=e(7293),v=e(2597),l=e(7976),p=e(9670),y=e(5656),b=e(4948),m=e(1340),g=e(9114),d=e(30),h=e(1956),S=e(8006),w=e(1156),O=e(5181),x=e(1236),j=e(3463),P=e(6048),k=e(5296),E=e(8052),_=e(7045),C=e(2309),F=e(6200),N=e(3501),T=e(9711),$=e(5112),A=e(6061),B=e(6800),D=e(6532),I=e(8003),M=e(9909),Q=e(2092).forEach,W=F("hidden"),q="Symbol",z="prototype",G=M.set,H=M.getterFor(q),J=Object[z],K=o.Symbol,L=K&&K[z],R=o.TypeError,U=o.QObject,V=x.f,X=j.f,Y=w.f,Z=k.f,tt=u([].push),rt=C("symbols"),et=C("op-symbols"),nt=C("wks"),ot=!U||!U[z]||!U[z].findChild,it=f&&c((function(){return 7!=d(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=V(J,r);n&&delete J[r],X(t,r,e),n&&t!==J&&X(J,r,n)}:X,ut=function(t,r){var e=rt[t]=d(L);return G(e,{type:q,tag:t,description:r}),f||(e.description=r),e},st=function(t,r,e){t===J&&st(et,r,e),p(t);var n=b(r);return p(e),v(rt,n)?(e.enumerable?(v(t,W)&&t[W][n]&&(t[W][n]=!1),e=d(e,{enumerable:g(0,!1)})):(v(t,W)||X(t,W,g(1,{})),t[W][n]=!0),it(t,n,e)):X(t,n,e)},ft=function(t,r){p(t);var e=y(r),n=h(e).concat(pt(e));return Q(n,(function(r){f&&!i(ct,e,r)||st(t,r,e[r])})),t},at=function(t,r){return void 0===r?d(t):ft(d(t),r)},ct=function(t){var r=b(t),e=i(Z,this,r);return!(this===J&&v(rt,r)&&!v(et,r))&&(!(e||!v(this,r)||!v(rt,r)||v(this,W)&&this[W][r])||e)},vt=function(t,r){var e=y(t),n=b(r);if(e!==J||!v(rt,n)||v(et,n)){var o=V(e,n);return!o||!v(rt,n)||v(e,W)&&e[W][n]||(o.enumerable=!0),o}},lt=function(t){var r=Y(y(t)),e=[];return Q(r,(function(t){v(rt,t)||v(N,t)||tt(e,t)})),e},pt=function(t){var r=t===J,e=Y(r?et:y(t)),n=[];return Q(e,(function(t){!v(rt,t)||r&&!v(J,t)||tt(n,rt[t])})),n};a||(K=function(){if(l(L,this))throw R("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,r=T(t),e=function(t){this===J&&i(e,et,t),v(this,W)&&v(this[W],r)&&(this[W][r]=!1),it(this,r,g(1,t))};return f&&ot&&it(J,r,{configurable:!0,set:e}),ut(r,t)},L=K[z],E(L,"toString",(function(){return H(this).tag})),E(K,"withoutSetter",(function(t){return ut(T(t),t)})),k.f=ct,j.f=st,P.f=ft,x.f=vt,S.f=w.f=lt,O.f=pt,A.f=function(t){return ut($(t),t)},f&&(_(L,"description",{configurable:!0,get:function(){return H(this).description}}),s||E(J,"propertyIsEnumerable",ct,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!a,sham:!a},{Symbol:K}),Q(h(nt),(function(t){B(t)})),n({target:q,stat:!0,forced:!a},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!f},{create:at,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:vt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:lt}),D(),I(K,q),N[W]=!0},1817:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(7854),u=e(1702),s=e(2597),f=e(614),a=e(7976),c=e(1340),v=e(7045),l=e(9920),p=i.Symbol,y=p&&p.prototype;if(o&&f(p)&&(!("description"in y)||void 0!==p().description)){var b={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),r=a(y,this)?new p(t):void 0===t?p():p(t);return""===t&&(b[r]=!0),r};l(m,p),m.prototype=y,y.constructor=m;var g="Symbol(test)"==String(p("test")),d=u(y.valueOf),h=u(y.toString),S=/^Symbol\((.*)\)[^)]+$/,w=u("".replace),O=u("".slice);v(y,"description",{configurable:!0,get:function(){var t=d(this);if(s(b,t))return"";var r=h(t),e=g?O(r,7,-1):w(r,S,"$1");return""===e?void 0:e}}),n({global:!0,constructor:!0,forced:!0},{Symbol:m})}},763:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(2597),u=e(1340),s=e(2309),f=e(2015),a=s("string-to-symbol-registry"),c=s("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var r=u(t);if(i(a,r))return a[r];var e=o("Symbol")(r);return a[r]=e,c[e]=r,e}})},2526:(t,r,e)=>{e(4032),e(763),e(6620),e(8862),e(9660)},6620:(t,r,e)=>{var n=e(2109),o=e(2597),i=e(2190),u=e(6330),s=e(2309),f=e(2015),a=s("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!f},{keyFor:function(t){if(!i(t))throw TypeError(u(t)+" is not a symbol");if(o(a,t))return a[t]}})}}]);
//# sourceMappingURL=759.a5ef1c35.js.map