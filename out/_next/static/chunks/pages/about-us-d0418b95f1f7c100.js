(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8552],{95268:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return s(70150)}])},6497:function(e,t){"use strict";t.Z={src:"/_next/static/media/Breadcrumbs.1ae0e8e1.jpg",height:1300,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALBn/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMREiFS/9oACAEBAAE/AJEqs/C7hscgL//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSMf/aAAgBAgEBPwCIiprr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=",blurWidth:8,blurHeight:3}},70150:function(e,t,s){"use strict";s.r(t);var a=s(85893),i=s(59251),A=s(82267),n=s(9473),l=s(67294),r=s(50549),c=s(24404),o=s(25789),d=s(1431);let u=()=>{let e=(0,n.v9)(o.iT);(0,l.useEffect)(()=>{},[e]);let t=(0,n.v9)(A.vV),s=null==t?void 0:t.about_us,[u,p]=(0,l.useState)(null),[h,m]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{setTimeout(()=>{p(s),m(!1)},2e3)},[]),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(i.Z,{title:(0,c.Iu)("aboutUs")}),(0,a.jsx)("section",{id:"termsSect",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"card",children:h?(0,a.jsx)("div",{className:"col-12 loading_data",children:(0,a.jsx)(r.Z,{height:20,count:20})}):(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:u||""}})})})})]})};t.default=u},59251:function(e,t,s){"use strict";var a=s(85893),i=s(67294),A=s(6497),n=s(38138),l=s(47516),r=s(9473),c=s(82267),o=s(86501),d=s(51183),u=s(8193);let p=e=>{let{data:t,title:s}=e,p=(0,r.v9)(c.vV),h=p&&p.currency_symbol,m=(0,r.v9)(e=>e.User_signup);m&&m.data&&m.data.data.id;let[g,f]=(0,i.useState)(e.data&&e.data.is_favourite),[v,x]=(0,i.useState)(!1),j=t=>{t.preventDefault(),t.stopPropagation(),m&&m.data&&m.data.token?(0,d.pw)(e.data.propId,"1",e=>{f(!0),x(!1),o.Am.success(e.message)},e=>{console.log(e)}):o.Am.error("Please login first to add this property to favorites.")},E=t=>{t.preventDefault(),t.stopPropagation(),(0,d.pw)(e.data.propId,"0",e=>{f(!1),x(!0),o.Am.success(e.message)},e=>{console.log(e)})};return(0,i.useEffect)(()=>{f(e.data&&1===e.data.is_favourite),x(!1)},[e.data&&e.data.is_favourite]),(0,a.jsx)("div",{id:"breadcrumb",style:{backgroundImage:"url(".concat(A.Z.src,")")},children:e.data?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"breadcrumb-content",className:"container",children:(0,a.jsxs)("div",{className:"row",id:"breadcrumb_row",children:[(0,a.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,a.jsxs)("div",{className:"left-side-content",children:[(0,a.jsx)("span",{className:"prop-types",children:t.type}),(0,a.jsx)("span",{className:"prop-name",children:t.title}),(0,a.jsxs)("span",{className:"prop-Location",children:[(0,a.jsx)(n.v2c,{size:25})," ",t.loc]}),(0,a.jsxs)("div",{className:"prop-sell-time",children:[(0,a.jsx)("span",{className:"propertie-sell-tag",children:t.propertyType}),(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(l.YFw,{size:20})," ",t.time]})]})]})}),(0,a.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,a.jsxs)("div",{className:"right-side-content",children:[(0,a.jsxs)("span",{children:[" ",h," ",t.price," "]}),(0,a.jsx)("div",{children:g?(0,a.jsx)("button",{onClick:E,children:(0,a.jsx)(u.M_L,{size:25,className:"liked_property"})}):v?(0,a.jsx)("button",{onClick:j,children:(0,a.jsx)(u.lo,{size:25,className:"disliked_property"})}):(0,a.jsx)("button",{onClick:j,children:(0,a.jsx)(u.lo,{size:25})})})]})})]})})}):(0,a.jsx)("div",{className:"container",id:"breadcrumb-headline",children:(0,a.jsx)("h2",{children:e.title})})})};t.Z=p},1431:function(e,t,s){"use strict";var a=s(85893),i=s(67294),A=s(87650),n=s(53047),l=s(9473),r=s(25789),c=s(69998),o=s(82267);let d=e=>{let{children:t}=e,[s,d]=(0,i.useState)(!0),u=(0,l.v9)(e=>e.User_signup),p=u&&u.data?u.data.data.id:null,h=(0,l.v9)(o.vV);(0,i.useEffect)(()=>{h?d(!1):(0,o.PH)(null,u?p:"",e=>{d(!1)},e=>{console.log(e)})},[u]);let m=(0,l.v9)(r.iT);return(0,i.useEffect)(()=>{},[m]),(0,a.jsx)("div",{children:s?(0,a.jsx)(c.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{}),t,(0,a.jsx)(A.Z,{})]})})};t.Z=d},50549:function(e,t,s){"use strict";s.d(t,{Z:function(){return A}});var a=s(67294);let i=a.createContext({});function A({count:e=1,wrapper:t,className:s,containerClassName:A,containerTestId:n,circle:l=!1,style:r,...c}){var o,d,u;let p=a.useContext(i),h={...c};for(let[e,t]of Object.entries(c))void 0===t&&delete h[e];let m={...p,...h,circle:l},g={...r,...function({baseColor:e,highlightColor:t,width:s,height:a,borderRadius:i,circle:A,direction:n,duration:l,enableAnimation:r=!0}){let c={};return"rtl"===n&&(c["--animation-direction"]="reverse"),"number"==typeof l&&(c["--animation-duration"]=`${l}s`),r||(c["--pseudo-element-display"]="none"),("string"==typeof s||"number"==typeof s)&&(c.width=s),("string"==typeof a||"number"==typeof a)&&(c.height=a),("string"==typeof i||"number"==typeof i)&&(c.borderRadius=i),A&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==t&&(c["--highlight-color"]=t),c}(m)},f="react-loading-skeleton";s&&(f+=` ${s}`);let v=null!==(o=m.inline)&&void 0!==o&&o,x=[],j=Math.ceil(e);for(let t=0;t<j;t++){let s=g;if(j>e&&t===j-1){let t=null!==(d=s.width)&&void 0!==d?d:"100%",a=e%1,i="number"==typeof t?t*a:`calc(${t} * ${a})`;s={...s,width:i}}let i=a.createElement("span",{className:f,style:s,key:t},"‌");v?x.push(i):x.push(a.createElement(a.Fragment,{key:t},i,a.createElement("br",null)))}return a.createElement("span",{className:A,"data-testid":n,"aria-live":"polite","aria-busy":null===(u=m.enableAnimation)||void 0===u||u},t?x.map((e,s)=>a.createElement(t,{key:s},e)):x)}}},function(e){e.O(0,[5937,1255,8166,5445,4617,4980,9401,3874,3096,5675,1532,7932,421,6730,1636,9774,2888,179],function(){return e(e.s=95268)}),_N_E=e.O()}]);