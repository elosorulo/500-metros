(this["webpackJsonp500-metros"]=this["webpackJsonp500-metros"]||[]).push([[0],{31:function(n,e,t){n.exports=t.p+"static/media/video.f575828b.mp4"},40:function(n,e,t){n.exports=t(53)},45:function(n,e,t){},46:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(27),i=t.n(a),c=(t(45),t(6)),u=(t(46),t(4)),l=t(3);function s(){var n=Object(u.a)(["\n    visibility: ",";\n    ","\n"]);return s=function(){return n},n}var f=l.a.video(s(),(function(n){return n.hasLoaded?"visible":"hidden"}),(function(n){return n.hasLoaded?"\n            max-width: 100%;\n            max-height: 100%;\n        ":"   height: 0%;\n                width: 0%;\n            "})),m=t(31),d=t.n(m),h=t(32),v=t.n(h);function p(){var n=Object(u.a)(["\n    left: ",";\n    top: ",";\n    height: ",";\n    width: ",";\n    position: absolute;\n"]);return p=function(){return n},n}var b=Object(l.a)(v.a)(p(),(function(n){return e=n.left,t=n.width,e+t/250+"px";var e,t}),(function(n){return e=n.top,t=n.height,e+t/100*61.5+"px";var e,t}),(function(n){return n.height/100*36.2+"px"}),(function(n){return n.width/100*36.2+"px"})),g={width:1280,height:720,facingMode:"user"},E=function(n){var e=r.a.useRef();return r.a.createElement(b,Object.assign({ref:e,audio:!1,videoConstraints:g},n))};function w(){var n=Object(u.a)(["\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return w=function(){return n},n}var j=l.a.div(w()),M=t(70),O=r.a.createRef(),T=function(){var n=r.a.useState(!1),e=Object(c.a)(n,2),t=e[0],o=e[1],a=r.a.useState(0),i=Object(c.a)(a,2),u=i[0],l=i[1],s=r.a.useState(0),m=Object(c.a)(s,2),h=m[0],v=m[1],p=r.a.useState(0),b=Object(c.a)(p,2),g=b[0],w=b[1],T=r.a.useState(0),x=Object(c.a)(T,2),S=x[0],z=x[1],y=function(){if(O.current){var n=O.current.getBoundingClientRect();l(n.top),v(n.left),w(n.width),z(n.height)}};return r.a.useEffect((function(){return window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}}),[t]),r.a.createElement("div",null,t?r.a.createElement(E,{top:u,left:h,width:g,height:S}):r.a.createElement(r.a.Fragment,null),r.a.createElement(j,null,t?r.a.createElement(r.a.Fragment,null):r.a.createElement(M.a,null),r.a.createElement(f,{ref:O,src:d.a,autoPlay:!0,onLoadedData:function(){window.setTimeout((function(){return y()}),12500),o(!0)},hasLoaded:t})))},x=t(72),S="hsla(20, 100%, 60%, 1)";function z(){var n=Object(u.a)(["\n    ","\n    font-size: ",";\n    color: ",";\n"]);return z=function(){return n},n}var y=l.a.h1(z(),(function(n){return n.noMarginTop?"":"margin-top: 15vh;"}),(function(n){return!0===n.mobileHorizontal?"3.5em":"5em"}),S);function k(){var n=Object(u.a)(["\n    margin-top: 5vh;\n    font-size: ",";\n    color: ",";\n"]);return k=function(){return n},n}l.a.h1(k(),(function(n){return!0===n.mobileHorizontal?"2.5rem":"3em"}),S);function C(){var n=Object(u.a)(["\n    margin-top: 5vh;\n    font-size: ",";\n    color: ",";\n"]);return C=function(){return n},n}var D=l.a.h1(C(),(function(n){return!0===n.mobileHorizontal?"1rem":"1.5em"}),S),H=t(37),L=t.n(H);var U=function(n){var e=r.a.useState(!1),t=Object(c.a)(e,2),o=t[0],a=t[1],i=r.a.useState(!1),u=Object(c.a)(i,2),l=u[0],s=u[1];return{onClick:function(e){void 0!==n.onClick&&n.onClick(e)},active:o&&!l,onTouchStart:function(e){e.preventDefault(),setTimeout((function(){l||a(!0)}),100),void 0!==n.onTouchStart&&n.onTouchStart()},onTouchEnd:function(e){e.preventDefault(),e.persist(),l||n.onClick(e),s(!1),a(!1),setTimeout((function(){return a(!1)}),100),void 0!==n.onTouchEnd&&n.onTouchEnd(e)},onTouchMove:function(e){e.preventDefault(),s(!0),a(!1),setTimeout((function(){return a(!1)}),100),void 0!==n.onTouchMove&&n.onTouchMove(e)},onTouchCancel:function(e){e.preventDefault(),a(!1),s(!1),setTimeout((function(){return a(!1)}),100),void 0!==n.onTouchCancel&&n.onTouchCancel(e)},onMouseDown:function(e){void 0!==n.onMouseDown&&n.onMouseDown(e),a(!0)},onMouseUp:function(e){void 0!==n.onMouseUp&&n.onMouseUp(e),a(!1)},onMouseLeave:function(e){void 0!==n.onMouseUp&&n.onMouseUp(e),a(!1)}}};function W(){var n=Object(u.a)(["\n    border-radius: 50%;\n    padding: ",";\n    border: 0.1vmax solid ",";\n    box-sizing: border-box;\n    &:focus {\n        outline:none !important;\n    };\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n    position: relative;\n    color: ",";\n    ","\n    ","\n    background: ",";\n    transition: ",";\n    ",";\n    ","\n    ","\n    ",";\n"]);return W=function(){return n},n}var B,F=function(n,e){return n-e},I=l.a.button(W(),(B=.5,"".concat(F(.4,.1),"rem ").concat(F(B,.1),"rem")),S,S,(function(n){return function(n){return n.active?"":"\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        ".concat("transform:scale(1.05, 1.05)","\n      }\n    }\n  ")}(n)}),(function(n){return n.active?"transform:scale(0.95, 0.95);":""}),(function(n){return n.active?"hsla(20, 80%, 20%, 1);":"hsla(20, 80%, 10%, 1);"}),(function(n){return"background ".concat(n.active?0:.25,"s linear;")}),(function(n){return n.absolute?"position: absolute;":""}),(function(n){return n.top?"top: ".concat(n.top,"%;"):""}),(function(n){return n.right?"right: ".concat(n.right,"%;"):""}),(function(n){return n.floating?"z-index: 5000;":""})),R=function(n){var e=U(n);return r.a.createElement(I,Object.assign({},n,e))},J=t(36),A=t.n(J),K=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),N=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)>K,P=t(22),$=!N&&P.isMobile&&!P.isTablet,q=function(){return r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(y,{mobileHorizontal:$},"500 Metros"),r.a.createElement(D,{mobileHorizontal:$},"Ivana Kairiyama"))},G=function(n){return r.a.createElement(R,{onClick:n.play},n.started?r.a.createElement(A.a,{fontSize:"large",style:{color:S}}):r.a.createElement(L.a,{fontSize:"large",style:{color:S}}))},Q=function(n){return r.a.createElement(x.a,{container:!0,justify:"center",align:"center",spacing:$?3:10},r.a.createElement(q,null),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement(G,{play:n.start,started:n.started})))},V=t(73),X=t(38),Y=Object(X.a)({palette:{primary:{main:S}}}),Z=function(){var n=r.a.useState(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];return r.a.createElement("div",{className:"App"},r.a.createElement(V.a,{theme:Y},t?r.a.createElement(T,null):r.a.createElement(Q,{start:function(){o(!0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.dafaa28f.chunk.js.map