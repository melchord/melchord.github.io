_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r("nKUr");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c,i=r("/MKj"),u=r("q1tI"),p=r("ANjH"),O=r("5HXA");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={active:!1,currentPreview:"nextjs",lastUpdate:0,light:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"tick":return s(s({},e),{},{lastUpdate:t.lastUpdate,light:!!t.light});case"update":return s(s({},e),{},{currentPreview:t.preview});case"setActive":default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return Object(p.createStore)(l,e,Object(O.composeWithDevTools)(Object(p.applyMiddleware)()))},_=function(e){return Object(u.useMemo)((function(){return function(e){var t,r=null!==(t=c)&&void 0!==t?t:b(e);return e&&c&&(r=b(s(s({},c.getState()),e)),c=void 0),c||(c=r),r}(e)}))};r("IbaP"),r("H/sG");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){var t=e.Component,r=e.pageProps,o=_(r.initialReduxState);return Object(n.jsxs)(i.a,{store:o,children:[Object(n.jsx)(t,d({},r)),";"]})}},"5HXA":function(e,t,r){"use strict";var n=r("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?n:n.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},"H/sG":function(e,t,r){},IbaP:function(e,t,r){}},[[0,0,1,4,3,2]]]);