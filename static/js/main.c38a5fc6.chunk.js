(this["webpackJsonpmy-family"]=this["webpackJsonpmy-family"]||[]).push([[2],[,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var a=e(35),o=e.n(a),r=e(71),s=e(7),c=e(0);n.default=function(t,n){var a=Object(c.useState)(""),i=Object(s.a)(a,2),u=i[0],m=i[1],d=Object(c.useState)(""),l=Object(s.a)(d,2),f=l[0],p=l[1];return Object(c.useEffect)((function(){function a(){return(a=Object(r.a)(o.a.mark((function t(){var a,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(107)("./".concat(n));case 2:return a=t.sent,t.next=5,fetch(a.default);case 5:return r=t.sent,t.next=8,r.text();case 8:s=t.sent,m(s);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=Object(r.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(107)("./".concat(t));case 2:a=n.sent,p(a.default);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),function(){s.apply(this,arguments)}()})),[u,f]}},,function(t,n,e){"use strict";e.r(n),e.d(n,"momentsDataPath",(function(){return a})),e.d(n,"aboutDataPath",(function(){return o})),e.d(n,"momentsImagesPath",(function(){return r})),e.d(n,"aboutImagesPath",(function(){return s})),e.d(n,"moments",(function(){return c}));var a="data/moments",o="data/about",r="data/images/moments",s="data/images/about",c={ammaMoments:["chavithi-garelu-skewers","chicago-trip","fatehnagar-crow","outer-banks-tour"],gopiMoments:["amtrak-pickup-dropoff","balaji-temple-raleigh","washington-tour"],nanaMoments:["school-flooding-rescue","scooter-flat-tire-arunachalam","super-market-chocolate-groceries","super-market-diwali-crackers"],ammammaMoments:["avakayi-pachadi"],pravasthiMoments:[]}},,,,function(t,n,e){"use strict";e.r(n),e.d(n,"FAMILY",(function(){return a})),e.d(n,"MORE",(function(){return o}));var a=["Amma","Nana","Gopi","Ammamma","Pravasthi"],o="\x3c!--more--\x3e"},function(t,n,e){"use strict";e.r(n);e(0);var a=e(114),o=e.n(a),r=(e(106),e(1));n.default=function(t){return Object(r.jsxs)("div",{className:"card",children:[t.imageFile&&Object(r.jsx)("img",{src:t.imageFile,alt:t.imageAlt}),Object(r.jsx)(o.a,{children:t.markdown})]})}},,function(t,n,e){"use strict";e.r(n);var a=e(24);e.d(n,"Burger",(function(){return a.default}));var o=e(25);e.d(n,"Menu",(function(){return o.default}))},,function(t,n,e){"use strict";e.r(n);var a=e(37);e.d(n,"default",(function(){return a.default}))},function(t,n,e){"use strict";e.r(n);var a=e(38);e.d(n,"default",(function(){return a.default}))},,,function(t,n,e){"use strict";e.r(n);var a=e(45);e.d(n,"default",(function(){return a.default}))},function(t,n,e){"use strict";e.r(n);var a=e(46);e.d(n,"useOnClickOutside",(function(){return a.default}));var o=e(13);e.d(n,"useDataFetcher",(function(){return o.default}))},,function(t,n,e){"use strict";e.r(n);var a=e(7),o=(e(0),e(2)),r=e(20),s=e(13),c=e(15),i=e(1);n.default=function(t){var n=Object(o.f)(),e=n.state?n.state.personName:t.name,u="".concat(c.aboutDataPath,"/").concat(e,"/").concat(e,".md"),m="".concat(c.aboutImagesPath,"/").concat(e,".JPG"),d=Object(s.default)(m,u),l=Object(a.a)(d,2),f=l[0],p=l[1];return Object(i.jsx)(r.default,{imageFile:p,imageAlt:e,markdown:f})}},,,,,function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(109),s=e.n(r),c=(e(73),e(47)),i=e(57),u=e(1);s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(c.default,{})}),document.getElementById("root")),Object(i.default)()},function(t,n,e){"use strict";e.r(n);e(0);var a=e(48),o=e(1);n.default=function(t){var n=t.open,e=t.setOpen;return Object(o.jsxs)(a.default,{open:n,onClick:function(){return e(!n)},children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return c}));e(0);var a=e(12),o=e(19),r=e(49),s=e(1);function c(t){var n=t.setPersonName,e=t.personName,c=t.open,i=t.setOpen;return Object(s.jsx)(r.default,{open:c,children:o.FAMILY.map((function(t){var o=t.toLowerCase();return Object(s.jsx)(a.c,{to:{pathname:"/about/".concat(o),state:{personName:o}},onClick:function(){n(o),i(!1)},activeClassName:"selected",isActive:function(t,n){var a;return n&&!n.state?o===e:o===(null===(a=n.state)||void 0===a?void 0:a.personName)},children:t})}))})}},,,,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return r}));e(0);var a=e(12),o=e(1);function r(t){var n=t.personName,e=t.view,r=t.setView;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.c,{to:{pathname:"/about/".concat(n),state:{personName:n}},onClick:function(){return r("about")},activeClassName:"selected",isActive:function(t,n){return"/"===(null===n||void 0===n?void 0:n.pathname)||"/my-family/home"===(null===n||void 0===n?void 0:n.pathname)?"about"===e:new RegExp("about").test(n.pathname)},children:"About"}),Object(o.jsx)(a.c,{to:{pathname:"/moments/".concat(n),state:{personName:n}},onClick:function(){return r("moments")},activeClassName:"selected",isActive:function(t,n){return"/"===(null===n||void 0===n?void 0:n.pathname)||"/my-family/home"===(null===n||void 0===n?void 0:n.pathname)?"moments"===e:new RegExp("moments").test(n.pathname)},children:"Moments"})]})}},function(t,n,e){"use strict";e.r(n);var a=e(0);n.default=function(t,n){Object(a.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&n()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var a=e(7),o=e(115),r=e(0),s=e(2),c=e(12),i=e(21),u=e(22),m=e(50),d=e(51),l=e(52),f=e(28),p=e(29),h=e(1);function b(t){var n=t.path,e=t.component;return Object(h.jsx)(s.a,{path:n,render:function(t){return Object(h.jsx)(e,Object(o.a)({},t))}})}function v(){var t=Object(r.useState)("amma"),n=Object(a.a)(t,2),e=n[0],o=n[1],v=Object(r.useState)("about"),g=Object(a.a)(v,2),j=g[0],x=g[1],O=Object(r.useState)(!1),k=Object(a.a)(O,2),w=k[0],M=k[1],N=Object(r.useRef)(null);return Object(p.useOnClickOutside)(N,(function(){return M(!1)})),Object(h.jsx)(i.a,{theme:m.default,children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.default,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(c.a,{children:[Object(h.jsxs)("div",{className:"side-nav",ref:N,children:[Object(h.jsx)(u.Burger,{open:w,setOpen:M}),Object(h.jsx)(u.Menu,{setPersonName:o,personName:e,open:w,setOpen:M})]}),Object(h.jsx)("div",{className:"top-nav",children:Object(h.jsx)(f.default,{personName:e,view:j,setView:x})}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(s.c,{children:l.default.map((function(t,n){return Object(h.jsx)(b,{path:t.path,component:t.component},n)}))})})]})})]})})}},function(t,n,e){"use strict";e.r(n);var a,o=e(32),r=e(21).c.button(a||(a=Object(o.a)(["\n  position: fixed;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: #0d0c1d;\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(t){return t.open?"rotate(45deg)":"rotate(0)"}),(function(t){return t.open?"0":"1"}),(function(t){return t.open?"rotate(-45deg)":"rotate(0)"}));n.default=r},function(t,n,e){"use strict";e.r(n);var a,o=e(32),r=e(21).c.nav(a||(a=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #effffa;\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  transform: ",";\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    // color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 1rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: #343078;\n    }\n  }\n"])),(function(t){return t.open?"translateX(0)":"translateX(-100%)"}),(function(t){return t.theme.primaryDark}),(function(t){return t.theme.mobile}));n.default=r},function(t,n,e){"use strict";e.r(n);n.default={primaryDark:"#0D0C1D",primaryLight:"#EFFFFA",primaryHover:"#343078",mobile:"576px"}},function(t,n,e){"use strict";e.r(n);var a,o=e(32),r=e(21),s=Object(r.b)(a||(a=Object(o.a)(["\n  .container {\n    width: 90%;\n    display: grid;\n    grid-template-columns: 25% 50% 25%;\n    grid-template-rows: 10% 80% 10%;\n    gap: 5%;\n    top: 5%;\n    position: absolute;\n  }\n\n\n  .side-nav {\n    grid-column: 1 / 2;\n    grid-row: 1 / 4;\n    align-self: center;\n    justify-self: center;\n  }\n\n  .top-nav {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    align-self: center;\n    justify-self: center;\n  }\n\n  .content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n  }\n\n  @media (max-width: ",") {\n    .content {\n      grid-column: 1 / 4;\n    }\n  }\n\n  .side-nav > div, .side-nav a, .top-nav a {\n    padding: 2vh 2vw;\n  }\n\n  .selected {\n    color: red;\n  }\n\n  .side-nav .selected {\n    border-left: 6px solid #2196F3!important;\n  }\n\n  .top-nav .selected {\n    border-bottom: 6px solid #2196F3!important;\n  }\n"])),(function(t){return t.theme.mobile}));n.default=s},function(t,n,e){"use strict";e.r(n);var a=e(31),o=e(53),r=e(54),s=e(56),c=[{path:"/about/:personId",component:a.default},{path:"/moments/:personId/:momentId",component:o.default},{path:"/moments/:personId",component:r.default},{path:"/",component:s.default}];n.default=c},function(t,n,e){"use strict";e.r(n);var a=e(7),o=(e(0),e(2)),r=e(20),s=e(13),c=e(19),i=e(1);n.default=function(t){var n=Object(o.f)().state||{},e=n.imagePath,u=n.markDownFilePath,m=Object(s.default)(t.imagePath||e,t.markDownFilePath||u),d=Object(a.a)(m,2),l=d[0],f=d[1],p=l.replace(c.MORE,"");return Object(i.jsx)(r.default,{imageFile:f,imageAlt:t.personName,markdown:p})}},function(t,n,e){"use strict";e.r(n);e(0);var a=e(2),o=e(12),r=e(15),s=(e(108),e(55)),c=e(1);n.default=function(t){var n=Object(a.f)(),e=n.state?n.state.personName:t.name.toLowerCase(),i=r.moments["".concat(e,"Moments")],u=i.map((function(t){return"".concat(r.momentsDataPath,"/").concat(e,"/").concat(t,".md")})),m="".concat(r.momentsImagesPath,"/image_coming_soon.png"),d=u.map((function(t,n){return Object(c.jsx)(o.b,{to:{pathname:"/moments/".concat(e,"/").concat(i[n]),state:{imagePath:m,personName:e,markDownFilePath:t}},children:Object(c.jsx)(s.default,{imagePath:m,personName:e,markDownFilePath:t})})}));return Object(c.jsx)("div",{className:"moments-grid",children:d})}},function(t,n,e){"use strict";e.r(n);var a=e(7),o=(e(0),e(13)),r=e(20),s=e(19),c=e(1);n.default=function(t){var n=Object(o.default)(t.imagePath,t.markDownFilePath),e=Object(a.a)(n,2),i=e[0],u=e[1],m=i.indexOf(s.MORE),d=-1!==m?i.substring(0,m):i;return Object(c.jsx)(r.default,{imageFile:u,imageAlt:t.personName,markdown:d})}},function(t,n,e){"use strict";e.r(n);e(0);var a=e(31),o=e(1);n.default=function(){return Object(o.jsx)(a.default,{name:"amma"})}},function(t,n,e){"use strict";e.r(n);n.default=function(t){t&&t instanceof Function&&e.e(6).then(e.bind(null,259)).then((function(n){var e=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,s=n.getTTFB;e(t),a(t),o(t),r(t),s(t)}))}},,,,,,,,,,,,,,,,function(t,n,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){var a={"./":[36,9],"./App":[47,9],"./App.tsx":[47,9],"./Home":[56,9],"./Home.tsx":[56,9],"./components":[22,9],"./components/":[22,9],"./components/About/About":[31,9],"./components/About/About.css":[235,7,5],"./components/About/About.tsx":[31,9],"./components/Burger":[24,9],"./components/Burger/":[24,9],"./components/Burger/Burger":[37,9],"./components/Burger/Burger-styled":[48,9],"./components/Burger/Burger-styled.ts":[48,9],"./components/Burger/Burger.tsx":[37,9],"./components/Burger/index":[24,9],"./components/Burger/index.ts":[24,9],"./components/Card/Card":[20,9],"./components/Card/Card.css":[106,7],"./components/Card/Card.tsx":[20,9],"./components/Menu":[25,9],"./components/Menu/":[25,9],"./components/Menu/Menu":[38,9],"./components/Menu/Menu.styled":[49,9],"./components/Menu/Menu.styled.ts":[49,9],"./components/Menu/Menu.tsx":[38,9],"./components/Menu/index":[25,9],"./components/Menu/index.ts":[25,9],"./components/Moments/Moment":[53,9],"./components/Moments/Moment.tsx":[53,9],"./components/Moments/Moments":[54,9],"./components/Moments/Moments.css":[108,7],"./components/Moments/Moments.tsx":[54,9],"./components/Preview/Preview":[55,9],"./components/Preview/Preview.tsx":[55,9],"./components/Top-Nav":[28,9],"./components/Top-Nav/":[28,9],"./components/Top-Nav/TopNav":[45,9],"./components/Top-Nav/TopNav.tsx":[45,9],"./components/Top-Nav/index":[28,9],"./components/Top-Nav/index.ts":[28,9],"./components/index":[22,9],"./components/index.ts":[22,9],"./constants/global":[19,9],"./constants/global.ts":[19,9],"./custom-hooks":[29,9],"./custom-hooks/":[29,9],"./custom-hooks/index":[29,9],"./custom-hooks/index.ts":[29,9],"./custom-hooks/useDataFetcher":[13,9],"./custom-hooks/useDataFetcher.tsx":[13,9],"./custom-hooks/useOnClickOutside":[46,9],"./custom-hooks/useOnClickOutside.tsx":[46,9],"./data/Metadata":[15,9],"./data/Metadata.ts":[15,9],"./data/about/amma/amma.md":[236,9,7],"./data/about/ammamma/ammamma.md":[237,9,8],"./data/about/gopi/gopi.md":[238,9,9],"./data/about/nana/nana.md":[239,9,10],"./data/about/pravasthi/pravasthi.md":[240,9,11],"./data/images/about/amma.JPG":[241,9,12],"./data/images/about/ammamma.JPG":[242,9,13],"./data/images/about/gopi.JPG":[243,9,14],"./data/images/about/nana.JPG":[244,9,15],"./data/images/about/pravasthi.JPG":[245,9,16],"./data/images/moments/image_coming_soon.png":[246,9,29],"./data/moments/amma/chavithi-garelu-skewers.md":[247,9,17],"./data/moments/amma/chicago-trip.md":[248,9,18],"./data/moments/amma/fatehnagar-crow.md":[249,9,19],"./data/moments/amma/outer-banks-tour.md":[250,9,20],"./data/moments/ammamma/avakayi-pachadi.md":[251,9,21],"./data/moments/gopi/amtrak-pickup-dropoff.md":[252,9,22],"./data/moments/gopi/balaji-temple-raleigh.md":[253,9,23],"./data/moments/gopi/washington-tour.md":[254,9,24],"./data/moments/nana/school-flooding-rescue.md":[255,9,25],"./data/moments/nana/scooter-flat-tire-arunachalam.md":[256,9,26],"./data/moments/nana/super-market-chocolate-groceries.md":[257,9,27],"./data/moments/nana/super-market-diwali-crackers.md":[258,9,28],"./global-styles":[51,9],"./global-styles.ts":[51,9],"./globals.d":[116,7,0],"./globals.d.ts":[116,7,0],"./index":[36,9],"./index.css":[73,7],"./index.tsx":[36,9],"./react-app-env.d":[117,7,1],"./react-app-env.d.ts":[117,7,1],"./reportWebVitals":[57,9],"./reportWebVitals.ts":[57,9],"./routes":[52,9],"./routes.ts":[52,9],"./theme":[50,9],"./theme.ts":[50,9]};function o(t){if(!e.o(a,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[t],o=n[0];return Promise.all(n.slice(2).map(e.e)).then((function(){return e.t(o,n[1])}))}o.keys=function(){return Object.keys(a)},o.id=107,t.exports=o},function(t,n,e){}],[[36,3,4]]]);
//# sourceMappingURL=main.c38a5fc6.chunk.js.map