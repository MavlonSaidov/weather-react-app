(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(3)),o=(c(10),c(0)),j=function(){var e,t=Object(n.useState)([{}]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),j=Object(i.a)(s,2),d=j[0],p=j[1];return Object(o.jsxs)("div",{children:["undefined"===typeof a.main?Object(o.jsx)("p",{className:"title",children:"Weather Temperature Finder"}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location",children:[Object(o.jsx)("h1",{className:"location__timezone",children:a.name}),Object(o.jsx)("p",{className:"icon",children:Object(o.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,".png"),alt:"weather-icon"})})]}),Object(o.jsxs)("div",{className:"temperature",children:[Object(o.jsxs)("div",{className:"degree-section",children:[Object(o.jsx)("h2",{className:"temperature__degree",children:(e=a.main.temp,(e-273.15).toFixed(2))}),Object(o.jsx)("span",{children:"C\xb0"})]}),Object(o.jsx)("p",{className:"temperature__description",children:a.weather[0].description})]})]}),Object(o.jsx)("form",{action:"#",className:"form",children:Object(o.jsx)("input",{type:"text",className:"input",placeholder:"Enter a city",value:d,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(d,"&appid=").concat("96f6ba150dbfde1782395bffef95d6a2")).then((function(e){return e.json()})).then((function(e){r(e),p("")}))}})})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.0bdab59c.chunk.js.map