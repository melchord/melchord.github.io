(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9939:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),i=n(5141),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"April 4, 1996",n=new Date(t),r=(e-n)/315576e5;return r.toFixed(7)},a=n(7294),c=function(e,t){var n=(0,a.useRef)();(0,a.useEffect)((function(){n.current=e}),[e]),(0,a.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current.apply(n,arguments)}),t);return function(){return clearInterval(e)}}}),t)},l=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.lastUpdate})),n=s(t);return c((function(){e({type:"tick",light:!0,lastUpdate:new Date}),n=s()}),[1e3]),n};l.displayName="Age";var o=l,u=n(9008),h=n(4501),d=n.n(h),v=function(e){var t=e.children,n=e.title;return(0,r.jsxs)("div",{className:d().layout,children:[(0,r.jsxs)(u.default,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Montserrat&display=swap"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("title",{children:n})]}),t]})};v.displayName="Layout",v.defaultProps={title:"default title"};var p=v,f=n(9583),m=n(4184),j=function(e){var t=e.active,n=e.current,i=m("previewPanel",n,{active:t}),s=m("title",n),a=m("description"),c="Others",l="I have also working in Java, C/C++, and a bit of Python. I have yet to make any personal projects to display here, but hope to change that soon.",o=null;return"nextjs"===n?(c="Next.js",l="Next.js is an open-source React front-end framework that enables functionality such as server-sider rendering and static generation. I have been \n      using this framework since December 2020.",o=(0,r.jsxs)("div",{className:"previewsContainer",children:[(0,r.jsx)("a",{href:"https://github.com/melchord/melchord.github.io",children:(0,r.jsxs)("div",{className:"preview",children:[(0,r.jsx)("h3",{children:"Personal Website"}),(0,r.jsx)("span",{children:(0,r.jsx)(f.zKd,{})})]})}),(0,r.jsx)("a",{href:"https://github.com/melchord/nextjs-blog",children:(0,r.jsxs)("div",{className:"preview",children:[(0,r.jsx)("h3",{children:"Blog Site"}),(0,r.jsx)("span",{children:(0,r.jsx)(f.SV_,{})})]})})]})):"react"===n&&(c="React",l="I first picked up react during my previous employment in 2020. I was a full stack developer for the company website, check it out:",o=(0,r.jsx)("div",{className:"previewsContainer",children:(0,r.jsx)("a",{href:"https://quoininc.com/",children:(0,r.jsxs)("div",{className:"preview",children:[(0,r.jsx)("h3",{children:"Company Website"}),(0,r.jsx)("span",{children:(0,r.jsx)(f.zKd,{})})]})})})),(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("div",{className:s,children:c}),(0,r.jsx)("div",{className:a,children:l}),o]})};j.displayName="PreviewPanel",j.defaultProps={active:!1,current:"nextjs"};var x=j,_=n(4184),y=function(e){var t=e.type,n=(0,i.I0)(),s=(0,i.v9)((function(e){return e.active})),a=(0,i.v9)((function(e){return e.currentPreview})),c="others",l="other";"nextjs"===t?(c="Next.js",l="nextjs"):"react"===t&&(c="React",l="react");var o=_("previewSelector",l);return(0,r.jsx)("span",{className:o,onClick:function(){return n(!1===s?{type:"setActive",active:!s,currentPreview:t}:a!==t?{type:"setActive",active:s,currentPreview:t}:{type:"setActive",active:!s,currentPreview:t})},children:c})};y.displayName="PreviewSelector",y.defaultProps={type:"other"};var E=y,I=n(5503),N=(n(6690),n(3759),n(6550),n(7713),n(8108),n(4155)),g={apiKey:N.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:N.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,projectId:N.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,storageBucket:N.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,messagingSenderId:N.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,appId:N.env.NEXT_PUBLIC_FIREBASE_APP_ID,measurementId:N.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID};var w=function(){return null},P=function(){return null},A=n(3679),b=n.n(A);I.Z.apps.length||(I.Z.initializeApp(g),"measurementId"in g&&(I.Z.analytics(),I.Z.performance()),console.log("Firebase was successfully installed")),P(),w();var C=function(){var e=(0,i.v9)((function(e){return e.active})),t=(0,i.v9)((function(e){return e.currentPreview})),n=(0,r.jsx)("a",{href:"https://github.com/melchord",children:"Github"}),s=(0,r.jsx)("a",{href:"mailto: mdmngz411@gmail.com",children:"Email Me!"}),a=(0,r.jsx)(E,{type:"nextjs"}),c=(0,r.jsx)(E,{type:"react"}),l=(0,r.jsx)(E,{type:"others"});return(0,r.jsxs)(p,{title:"Melchor Dominguez",children:[(0,r.jsx)("div",{className:b().title,children:"Melchor Dominguez"}),(0,r.jsxs)("h2",{children:["I'm a ",(0,r.jsx)(o,{})," year-old developer"]}),(0,r.jsxs)("h2",{children:["who has used ",a,", ",c,", and ",l,"."]}),(0,r.jsx)(x,{active:e,current:t}),(0,r.jsx)("br",{}),(0,r.jsxs)("h2",{children:["Check out my ",n,"."]}),(0,r.jsx)("br",{}),(0,r.jsx)("h2",{children:"Currently working on a Flutter/Dart mobile application, an Advanced Google Analytics Certificate, and updating projects."}),(0,r.jsxs)("h2",{children:["Business inquiry? ",s]}),(0,r.jsx)("img",{src:"/owl.gif"}),(0,r.jsx)("br",{}),";"]})};C.displayName="Home";var k=C},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9939)}])},4501:function(e){e.exports={layout:"Layout_layout___Gf3r"}},3679:function(e){e.exports={title:"Home_title__28pEg"}}},function(e){e.O(0,[445,828,834,990,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);