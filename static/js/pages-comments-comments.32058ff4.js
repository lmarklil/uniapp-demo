(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comments-comments"],{"6d51":function(t,n,e){"use strict";e.r(n);var r=e("7c65"),o=e("abbb");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);var i,u=e("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"2b98a21c",null,!1,r["a"],i);n["default"]=c.exports},"7c65":function(t,n,e){"use strict";var r,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view")},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}))},"892b":function(t,n,e){"use strict";var r=e("ee27");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("d0ff")),a={onLoad:function(t){this.id=t.id,this.getComments()},data:function(){return{id:"",page:1,comments:[]}},methods:{getComments:function(){var t=this;uni.showToast({icon:"none",title:"因跨域问题，无法获取评论。"}),uni.request({url:"https://hot-topic-comment-wrapper-ms.juejin.im/v1/comments/".concat(this.id,"?pageNum=").concat(this.page,"&pageSize=20"),header:{"X-Juejin-Src":"web"},success:function(n){var e;(e=t.comments).push.apply(e,(0,o.default)(n.data.d.comments))}})}}};n.default=a},abbb:function(t,n,e){"use strict";e.r(n);var r=e("892b"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=o.a},d0ff:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){if(Array.isArray(t))return r(t)}e.r(n);e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("25f0");function i(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return o(t)||a(t)||i(t)||u()}e.d(n,"default",(function(){return c}))}}]);