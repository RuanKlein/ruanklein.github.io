(this["webpackJsonpruanklein.github.io"]=this["webpackJsonpruanklein.github.io"]||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var r,o=t(12),a=t.n(o),c=t(13),i=t(3),u=t.n(i),s=t(5),d=t(10),f=t(0),m=t(14),h=t(8),l=t(2),p=function(e){var n=e.dark,t=void 0!==n&&n,r=e.commandList,o=e.welcome,a=void 0===o?"":o,c=e.commandNotFound,i=void 0===c?"Command not found":c,u=e.prompt,s=void 0===u?"\u279c ":u,d=e.showControlButton,f=void 0!==d&&d;return Object(l.jsx)(h.b,{children:Object(l.jsx)(h.a,{themes:{default:{themeBGColor:t?"#1E1E1E":"#fff",themeToolbarColor:t?"#282828":"#DDD9D6",themeColor:t?"#fff":"#000",themePromptColor:"#558417"}},theme:"default",commands:r,welcomeMessage:a,errorMessage:i,showControlButtons:f,prompt:s})})},O=function(){var e=navigator.appVersion.toLowerCase();return-1!==e.indexOf("win")?"Windows OS":-1!==e.indexOf("mac")?"macOS":-1!==e.indexOf("android")?"Android OS":-1!==e.indexOf("ios")?"iOS":-1!==e.indexOf("linux")?"Linux OS":-1!==e.indexOf("x11")?"UNIX OS":"Unknown OS"},b=function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("opera")?"Opera":-1!==e.indexOf("chrome")?"Chrome":-1!==e.indexOf("safari")?"Safari":-1!==e.indexOf("firefox")?"Firefox":-1!==e.indexOf("edge")?"Edge":"Unknown Browser"},x=function(){var e=Object(s.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cloudflare.com/cdn-cgi/trace");case 2:return n=e.sent,e.next=5,n.text();case 5:return t=e.sent.match(/[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/),e.abrupt("return",t?t[0]:"Unknown IP");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=Object(m.a)(r||(r=Object(c.a)(["\n    body {\n        background: ",";\n    }\n"])),(function(e){return e.darkTheme?"#333":"#eee"})),j=function(){var e=Object(f.useState)(!1),n=Object(d.a)(e,2),t=n[0],r=n[1],o=Object(f.useState)(""),a=Object(d.a)(o,2),c=a[0],i=a[1];Object(f.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var n,t,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,t=b(),r=O(),o=(new Date).toISOString().slice(0,19).replace("T"," "),i("[".concat(o,"] IP ").concat(n,", ").concat(t," from ").concat(r," "));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m={"about-me":function(){return JSON.stringify({name:"Ruan",state:"Paran\xe1",city:"Curitiba",skills:["JavaScript","TypeScript","Node.js","React.js","PHP","Shell Script"],social:{linkedin:"https://www.linkedin.com/in/ruanklein/",github:"https://github.com/RuanKlein"}})},"change-theme":function(){return r((function(e){return!e})),"theme changed to '".concat(t?"light":"dark","'")},help:"Commands: about-me, change-theme, clear"};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(w,{darkTheme:t}),Object(l.jsx)(p,{dark:t,commandList:m,commandNotFound:"Command not found. Type 'help' to print available commands.",welcome:c})]})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("container"))}},[[29,1,2]]]);
//# sourceMappingURL=main.354034ee.chunk.js.map