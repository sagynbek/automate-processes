(this["webpackJsonpautomate-processes"]=this["webpackJsonpautomate-processes"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=(a(25),a(8)),i=function(){return c.a.createElement("div",null,"Dashoard")},m=a(6),s=a(12),u=function(e){var t=document.createElement("textarea");return t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),Object(s.b)("Copied to clipboard!",{type:"info"}),!0},p=function(e){return e===e.toUpperCase()&&e.match(/[a-zA-Z]/i)},d=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),i=l[0],s=l[1],d=Object(n.useState)(!0),h=Object(m.a)(d,2),b=h[0],E=h[1],g=Object(n.useState)(!0),f=Object(m.a)(g,2),v=f[0],C=f[1],x=Object(n.useState)(!0),j=Object(m.a)(x,2),O=j[0],k=j[1];Object(n.useEffect)((function(){O&&y(a)}),[a]);var y=function(e){if(e){for(var t="",a=0;a<e.length;a++)t+=p(e[a])?" "+e[a].toLowerCase():e[a];t=t.trim(),t=b&&t?t[0].toUpperCase()+t.slice(1):t,v&&u(t),s(t)}};return c.a.createElement("div",null,c.a.createElement("div",{className:""},c.a.createElement("span",null,c.a.createElement("input",{name:"capitalize",type:"checkbox",checked:b,onChange:function(){E(!b)}})," Capitalize"),c.a.createElement("span",null,c.a.createElement("input",{name:"clipboard",type:"checkbox",checked:v,onChange:function(){C(!v)}})," Copy to clipboard"),c.a.createElement("span",null,c.a.createElement("input",{name:"instant-trigger",type:"checkbox",checked:O,onChange:function(){k(!O)}})," Trigger on chage")),c.a.createElement("div",{className:"left-box"},c.a.createElement("textarea",{name:"text",value:a,onChange:function(e){r(e.target.value)}})),c.a.createElement("div",{className:"right-box"},c.a.createElement("textarea",{name:"result",value:i,disabled:!0})),c.a.createElement("div",{className:"center-action"},c.a.createElement("button",{onClick:function(){y(a)}},"Copy to clipboard")))},h=[".","!","?"],b=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),i=l[0],s=l[1],d=Object(n.useState)(!0),b=Object(m.a)(d,2),E=b[0],g=b[1],f=Object(n.useState)(!0),v=Object(m.a)(f,2),C=v[0],x=v[1],j=Object(n.useState)(!0),O=Object(m.a)(j,2),k=O[0],y=O[1];Object(n.useEffect)((function(){k&&S(a)}),[a]);var S=function(e){if(e){for(var t="",a=0;a<e.length;a++)p(e[a])&&(0===a||a-1>=0&&h.includes(e[a-1])||a-2>=0&&""===e[a-1]&&h.includes(e[a-2])||a+1<e.length&&p(e[a+1])||a-1>=0&&p(e[a-1]))?t+=e[a]:t+=e[a].toLowerCase();t=t.trim(),t=E&&t?t[0].toUpperCase()+t.slice(1):t,C&&u(t),s(t)}};return c.a.createElement("div",null,c.a.createElement("div",{className:""},c.a.createElement("span",null,c.a.createElement("input",{name:"capitalize",type:"checkbox",checked:E,onChange:function(){g(!E)}})," Capitalize"),c.a.createElement("span",null,c.a.createElement("input",{name:"clipboard",type:"checkbox",checked:C,onChange:function(){x(!C)}})," Copy to clipboard"),c.a.createElement("span",null,c.a.createElement("input",{name:"instant-trigger",type:"checkbox",checked:k,onChange:function(){y(!k)}})," Trigger on chage")),c.a.createElement("div",{className:"left-box"},c.a.createElement("textarea",{name:"text",value:a,onChange:function(e){r(e.target.value)}})),c.a.createElement("div",{className:"right-box"},c.a.createElement("textarea",{name:"result",value:i,disabled:!0})),c.a.createElement("div",{className:"center-action"},c.a.createElement("button",{onClick:function(){S(a)}},"Copy to clipboard")))},E=function(){return c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:i}),c.a.createElement(l.a,{exact:!0,path:"/text-into-paragraph",component:d}),c.a.createElement(l.a,{exact:!0,path:"/change-paragraph-case",component:b}))},g=(a(31),a(9)),f=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement(g.b,{to:"/"},"Home"),c.a.createElement(g.b,{to:"/text-into-paragraph"},"Convert camelCasedText into paragraph (Camel cased text)"),c.a.createElement(g.b,{to:"/change-paragraph-case"},"Change paragraph case (Upper Cased Text -> Upper cased text)"))};var v=function(){return c.a.createElement(g.a,{basename:"automate-processes"},c.a.createElement(f,null),c.a.createElement("div",{className:"container"},c.a.createElement(E,null)),c.a.createElement(s.a,{position:"bottom-right"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3edfa301.chunk.js.map