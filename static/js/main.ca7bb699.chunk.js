(this["webpackJsonprick-morty-app"]=this["webpackJsonprick-morty-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/home.782c905d.png"},17:function(e,t,a){e.exports=a.p+"static/media/arrow.328ef7fc.svg"},19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),m=a(6),i=a(1),s=(a(24),a(16)),u=a.n(s),o=a(17),E=a.n(o),p=function(){return c.a.createElement("h1",{className:"title"},"Rick and Morty")},h=function(e){var t=e.children;return c.a.createElement("main",null,c.a.createElement(p,null),t)},d=function(){return c.a.createElement("div",{className:"home"},c.a.createElement(h,null,c.a.createElement("figure",{className:"home__figure"},c.a.createElement("img",{src:u.a,alt:"Rick and Morty"})),c.a.createElement("nav",{className:"home__nav"},c.a.createElement(m.b,{className:"btn",to:"/Rick-Morty-SPA/characters"},c.a.createElement("h3",{className:"home__nav-text"},"Characters"),c.a.createElement("img",{className:"home__nav-img",src:E.a,alt:"icons"})))))},f=a(7),_=function(e){var t=Object(n.useState)("https://rickandmortyapi.com/api/character/"),a=Object(f.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)({}),m=Object(f.a)(l,2),i=m[0],s=m[1];return Object(n.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[c]),[i,r]},v=function(e){return e.results.map((function(e){return c.a.createElement("article",{className:"characters__card",key:e.id},c.a.createElement(m.b,{to:"/Rick-Morty-SPA/characters/".concat(e.id)},c.a.createElement("figure",null,c.a.createElement("img",{className:"characters__card-img",src:e.image,alt:e.name}))),c.a.createElement("div",{className:"characters__card-description"},c.a.createElement("h3",null,e.name),c.a.createElement("div",{className:"description__grid"},c.a.createElement("p",null,"Species:"),c.a.createElement("p",null,e.species),c.a.createElement("p",null,"Status:"),c.a.createElement("p",null,e.status),c.a.createElement("p",null,"Gender:"),c.a.createElement("p",null,e.gender))))}))},g=function(e){var t=e.text,a=e.handleClick,n=e.location;return c.a.createElement("button",{className:"btn",type:"button",onClick:function(){return a(n)}},c.a.createElement("h4",null,t))},N=function(e){var t=e.info,a=e.setUrl,n=function(e){a(e)},r=t.prev,l=t.next;return c.a.createElement("nav",{className:"navbar"},null===r?null:c.a.createElement(g,{text:"Prev",handleClick:n,location:r}),null===l?null:c.a.createElement(g,{text:"Next",handleClick:n,location:l}))},k=function(){var e=_(),t=Object(f.a)(e,2),a=t[0],n=t[1];if(!a.results)return null;var r=a.info,l=a.results;return c.a.createElement("div",{className:"characters"},c.a.createElement(h,null,c.a.createElement("section",{className:"characters__container"},c.a.createElement(v,{results:l})),c.a.createElement(N,{info:r,setUrl:n})))},b=function(){var e=Object(i.f)(),t=Object(i.g)().pathname.slice(27),a="https://rickandmortyapi.com/api/character/".concat(t),r=_(),l=Object(f.a)(r,2),m=l[0],s=l[1];if(Object(n.useEffect)((function(){s(a)}),[a,s]),!m)return null;var u=m.name,o=m.status,E=m.species,p=m.gender,d=m.origin,v=m.location,N=m.image,k=m.episode;return c.a.createElement("div",{className:"characters one-character"},c.a.createElement(h,null,c.a.createElement("article",{className:"characters__card"},c.a.createElement("figure",null,c.a.createElement("img",{className:"characters__card-img",src:N,alt:u})),c.a.createElement("div",{className:"characters__card-description"},c.a.createElement("h3",null,u),c.a.createElement("div",{className:"description__grid"},c.a.createElement("p",null,"Species:"),c.a.createElement("p",null,E),c.a.createElement("p",null,"Status:"),c.a.createElement("p",null,o),c.a.createElement("p",null,"Gender:"),c.a.createElement("p",null,p),c.a.createElement("p",null,"Origin:"),c.a.createElement("p",null,d?d.name:""),c.a.createElement("p",null,"Location:"),c.a.createElement("p",null,v?v.name:""),c.a.createElement("p",null,"Episodes:"),c.a.createElement("p",null,k?k.length:"")))),c.a.createElement(g,{text:"All Characters",handleClick:function(t){e.push(t)},location:"/Rick-Morty-SPA/characters"})))},y=function(){return c.a.createElement(m.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/Rick-Morty-SPA",component:d}),c.a.createElement(i.a,{exact:!0,path:"/Rick-Morty-SPA/characters",component:k}),c.a.createElement(i.a,{exact:!0,path:"/Rick-Morty-SPA/characters/:id",component:b})))};l.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ca7bb699.chunk.js.map