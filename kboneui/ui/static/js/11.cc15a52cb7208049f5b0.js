(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ea9H:function(s,t,a){"use strict";a.r(t);var e={data:function(){return{successTips:!1,loadingToast:!1}},methods:{successShow:function(){this.successTips=!0},loadingShow:function(){var s=this;this.loadingToast=!0,clearTimeout(this.timeout),this.timeout=setTimeout((function(){s.loadingToast=!1}),1e3)}}},o=a("KHd+"),i=Object(o.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("KView",{staticClass:"page toast js_show"},[a("KView",{staticClass:"page__hd"},[a("h1",{staticClass:"page__title"},[s._v("Toast")]),a("p",{staticClass:"page__desc"},[s._v("弹出式提示")])]),a("KView",{staticClass:"page__bd page__bd_spacing"},[a("KButton",{on:{click:s.successShow}},[s._v("\n      成功提示\n    ")]),a("KButton",{on:{click:s.loadingShow}},[s._v("\n      加载中提示\n    ")])],1),a("KToast",{attrs:{duration:1e3,type:"success"},model:{value:s.successTips,callback:function(t){s.successTips=t},expression:"successTips"}},[s._v("已完成")]),a("KToast",{attrs:{type:"loading"},model:{value:s.loadingToast,callback:function(t){s.loadingToast=t},expression:"loadingToast"}},[s._v("加载中提示")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);