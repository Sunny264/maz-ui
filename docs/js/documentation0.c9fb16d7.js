(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation0"],{"3c2d":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"get-started"},[t("h2",{staticClass:"mb-4"},[e._v(" Get Started ")]),t("h3",[e._v("NPM")]),t("CodeContainer",{staticClass:"my-4",attrs:{code:e.codeBase}}),t("p",[e._v("Or use some components")]),t("CodeContainer",{staticClass:"my-4",attrs:{code:e.codeCustom}})],1)},o=[],u={name:"GetStarted",data:function(){return{codeBase:"import Vue from 'vue';\nimport VueMazelUi from 'vue-mazel-ui';\nimport App from './App.vue';\n\nVue.use(VueMazelUi);\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});",codeCustom:"import Vue from 'vue';\nimport { MazBtn, MazSelect } from 'vue-mazel-ui';\nimport App from './App.vue';\n\nVue.component(MazBtn.name, MazBtn);\nVue.component(MazSelect.name, MazSelect);\n/* ou\n * Vue.use(MazBtn)\n * Vue.use(MazSelect)\n */\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});"}}},r=u,s=t("2877"),p=Object(s["a"])(r,a,o,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=documentation0.c9fb16d7.js.map