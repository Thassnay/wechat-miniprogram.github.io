(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{vkJd:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{isShow:!1,isShowTitle:!1}},methods:{openSheet:function(){this.isShow=!0},openTitleSheet:function(){this.isShowTitle=!0},actionChoose:function(t){console.log(t),this.isShow=!1,this.isShowTitle=!1}}},s=i("KHd+"),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("KView",{staticClass:"page actionsheet js_show"},[i("KView",{staticClass:"page__hd"},[i("h1",{staticClass:"page__title"},[t._v("Button")]),i("p",{staticClass:"page__desc"},[t._v("按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。")])]),i("KView",{staticClass:"page__hd"},[i("KButton",{on:{click:t.openSheet}},[t._v("Show ActionSheet")]),i("KButton",{on:{click:t.openTitleSheet}},[t._v("带 title")])],1),i("KActionSheet",{attrs:{actions:["微信","微信读书","微信小程序"],actionClick:t.actionChoose},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}}),i("KActionSheet",{attrs:{actions:["villainhr","淮仁"],label:"选择你的名字",actionClick:t.actionChoose},model:{value:t.isShowTitle,callback:function(e){t.isShowTitle=e},expression:"isShowTitle"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);