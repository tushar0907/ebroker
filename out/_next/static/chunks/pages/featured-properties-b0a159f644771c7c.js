(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1829],{58782:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/featured-properties",function(){return t(14223)}])},6497:function(e,a){"use strict";a.Z={src:"/_next/static/media/Breadcrumbs.1ae0e8e1.jpg",height:1300,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALBn/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMREiFS/9oACAEBAAE/AJEqs/C7hscgL//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSMf/aAAgBAgEBPwCIiprr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=",blurWidth:8,blurHeight:3}},14223:function(e,a,t){"use strict";t.r(a);var r=t(85893),s=t(67294),n=t(59251),i=t(51183),l=t(41664),o=t.n(l),c=t(58474),d=t(67619),p=t(9473),u=t(24404),g=t(25789),h=t(82618),f=t(1431),m=t(7134);let v=()=>{let e=(0,p.v9)(g.iT);(0,s.useEffect)(()=>{},[e]);let[a,t]=(0,s.useState)(!1),[l,v]=(0,s.useState)([]),[b,x]=(0,s.useState)(0),[A,y]=(0,s.useState)(0),[C,j]=(0,s.useState)(0),N=(0,p.v9)(e=>e.User_signup),k=N&&N.data?N.data.data.id:null;(0,s.useEffect)(()=>{t(!0),(0,i.RO)("1","","","","","","",A.toString(),"8",N?k:"","","","","","","","","","",e=>{x(e.total);let a=e.data;t(!1),v(a)},e=>{t(!1),console.log(e)})},[A,N]);let P=e=>{let a=8*e.selected;y(a),window.scrollTo(0,0)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(n.Z,{title:(0,u.Iu)("featurdAllProp")}),(0,r.jsx)("section",{id:"featured_prop_section",children:l.length>0?(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{id:"feature_cards",className:"row",children:[a?Array.from({length:8}).map((e,a)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3 loading_data",children:(0,r.jsx)(d.Z,{})},a)):(0,r.jsx)(r.Fragment,{children:l.map((e,a)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,r.jsx)(o(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.id),passHref:!0,children:(0,r.jsx)(c.Z,{ele:e})})},a))}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(h.Z,{pageCount:Math.ceil(b/8),onPageChange:P})})]})}):(0,r.jsx)("div",{className:"noDataFoundDiv",children:(0,r.jsx)(m.Z,{})})})]})})};a.default=v},59251:function(e,a,t){"use strict";var r=t(85893),s=t(67294),n=t(6497),i=t(38138),l=t(47516),o=t(9473),c=t(82267),d=t(86501),p=t(51183),u=t(8193);let g=e=>{let{data:a,title:t}=e,g=(0,o.v9)(c.vV),h=g&&g.currency_symbol,f=(0,o.v9)(e=>e.User_signup);f&&f.data&&f.data.data.id;let[m,v]=(0,s.useState)(e.data&&e.data.is_favourite),[b,x]=(0,s.useState)(!1),A=a=>{a.preventDefault(),a.stopPropagation(),f&&f.data&&f.data.token?(0,p.pw)(e.data.propId,"1",e=>{v(!0),x(!1),d.Am.success(e.message)},e=>{console.log(e)}):d.Am.error("Please login first to add this property to favorites.")},y=a=>{a.preventDefault(),a.stopPropagation(),(0,p.pw)(e.data.propId,"0",e=>{v(!1),x(!0),d.Am.success(e.message)},e=>{console.log(e)})};return(0,s.useEffect)(()=>{v(e.data&&1===e.data.is_favourite),x(!1)},[e.data&&e.data.is_favourite]),(0,r.jsx)("div",{id:"breadcrumb",style:{backgroundImage:"url(".concat(n.Z.src,")")},children:e.data?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"breadcrumb-content",className:"container",children:(0,r.jsxs)("div",{className:"row",id:"breadcrumb_row",children:[(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,r.jsxs)("div",{className:"left-side-content",children:[(0,r.jsx)("span",{className:"prop-types",children:a.type}),(0,r.jsx)("span",{className:"prop-name",children:a.title}),(0,r.jsxs)("span",{className:"prop-Location",children:[(0,r.jsx)(i.v2c,{size:25})," ",a.loc]}),(0,r.jsxs)("div",{className:"prop-sell-time",children:[(0,r.jsx)("span",{className:"propertie-sell-tag",children:a.propertyType}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(l.YFw,{size:20})," ",a.time]})]})]})}),(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,r.jsxs)("div",{className:"right-side-content",children:[(0,r.jsxs)("span",{children:[" ",h," ",a.price," "]}),(0,r.jsx)("div",{children:m?(0,r.jsx)("button",{onClick:y,children:(0,r.jsx)(u.M_L,{size:25,className:"liked_property"})}):b?(0,r.jsx)("button",{onClick:A,children:(0,r.jsx)(u.lo,{size:25,className:"disliked_property"})}):(0,r.jsx)("button",{onClick:A,children:(0,r.jsx)(u.lo,{size:25})})})]})})]})})}):(0,r.jsx)("div",{className:"container",id:"breadcrumb-headline",children:(0,r.jsx)("h2",{children:e.title})})})};a.Z=g},58474:function(e,a,t){"use strict";var r=t(85893),s=t(51183),n=t(82267),i=t(24404),l=t(67294),o=t(86501),c=t(8193),d=t(60155),p=t(5434),u=t(9473),g=t(24443),h=t(25675),f=t.n(h);a.Z=function(e){let{ele:a,onRemoveCard:t}=e,h=(0,u.v9)(n.vV),m=h&&h.currency_symbol,v=(0,u.v9)(e=>e.User_signup),[b,x]=(0,l.useState)(1===a.is_favourite),[A,y]=(0,l.useState)(!1),C=e=>{e.preventDefault(),e.stopPropagation(),v&&v.data&&v.data.token?(0,s.pw)(a.id,"1",e=>{x(!0),y(!1),o.Am.success(e.message)},e=>{console.log(e)}):o.Am.error("Please login first to add this property to favorites.")},j=e=>{e.preventDefault(),e.stopPropagation(),(0,s.pw)(a.id,"0",e=>{x(!1),y(!0),o.Am.success(e.message),t(a.id)},e=>{console.log(e)})};(0,l.useEffect)(()=>{x(1===a.is_favourite),y(!1)},[a.is_favourite]);let N=(0,u.v9)(n.vV),k=null==N?void 0:N.img_placeholder;return(0,r.jsx)("div",{className:"verticle_card",children:(0,r.jsxs)("div",{className:"card verticle_main_card",children:[(0,r.jsx)("div",{className:"verticle_card_img_div",children:(0,r.jsx)(f(),{loading:"lazy",className:"card-img",id:"verticle_card_img",src:a.title_image?a.title_image:k,alt:"",width:200,height:200})}),(0,r.jsxs)("div",{className:"card-img-overlay",children:[a.promoted?(0,r.jsx)("span",{className:"feature_tag",children:(0,i.Iu)("featured")}):null,(0,r.jsxs)("span",{className:"like_tag",children:[(0,r.jsxs)("span",{className:"mainspan",children:[(0,r.jsx)(d.gxi,{size:20}),"114"]}),b?(0,r.jsx)(c.M_L,{size:25,className:"liked_property",onClick:j}):A?(0,r.jsx)(c.lo,{size:25,className:"disliked_property",onClick:C}):(0,r.jsx)(c.lo,{size:25,onClick:C})]})]}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"sell_teg",children:a.propery_type}),(0,r.jsxs)("span",{className:"price_teg",children:[m," ",a.price]}),(0,r.jsxs)("div",{className:"feature_card_mainbody",children:[(0,r.jsx)("div",{className:"cate_image",children:(0,r.jsx)(f(),{loading:"lazy",src:a.category&&a.category.image,alt:"",width:20,height:20})}),(0,r.jsxs)("span",{className:"feature_body_title",children:[" ",a.category&&a.category.category," "]}),(0,r.jsx)("span",{className:"logolast",children:(0,r.jsx)(f(),{loading:"lazy",src:g.Z.src,alt:"Logo",className:"logo",width:0,height:26,style:{width:"50px",height:"60px"}})})]}),(0,r.jsxs)("div",{className:"feature_card_middletext",children:[(0,r.jsx)("span",{children:a.title}),(0,r.jsxs)("p",{children:[a.city," ",a.city?",":null," ",a.state," ",a.state?",":null," ",a.country]})]}),(0,r.jsx)("div",{classname:"addon",children:(0,r.jsxs)("span",{className:"onee",children:["Listed 5 Months Ago",(0,r.jsxs)("span",{className:"logoes",children:[" ",(0,r.jsx)(p.H2b,{size:18}),(0,r.jsx)(p.F8X,{size:20})," ",(0,r.jsx)(d.ff9,{size:20})," "]})]})})]}),(0,r.jsx)("div",{className:"card-footer",id:"feature_card_footer",children:(0,r.jsx)("div",{className:"row",children:a.parameters&&a.parameters.slice(0,4).map((e,a)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 ",children:(0,r.jsxs)("div",{className:"footer_content",children:[(0,r.jsx)("div",{children:(0,r.jsx)(f(),{loading:"lazy",src:e.image,alt:"",width:20,height:16})}),(0,r.jsxs)("p",{className:"text_footer",children:[" ",e.name,(0,r.jsx)("span",{className:"bedno",children:"3"})]})]},a)},a))})})]})})}},1431:function(e,a,t){"use strict";var r=t(85893),s=t(67294),n=t(87650),i=t(53047),l=t(9473),o=t(25789),c=t(69998),d=t(82267);let p=e=>{let{children:a}=e,[t,p]=(0,s.useState)(!0),u=(0,l.v9)(e=>e.User_signup),g=u&&u.data?u.data.data.id:null,h=(0,l.v9)(d.vV);(0,s.useEffect)(()=>{h?p(!1):(0,d.PH)(null,u?g:"",e=>{p(!1)},e=>{console.log(e)})},[u]);let f=(0,l.v9)(o.iT);return(0,s.useEffect)(()=>{},[f]),(0,r.jsx)("div",{children:t?(0,r.jsx)(c.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),a,(0,r.jsx)(n.Z,{})]})})};a.Z=p},7134:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var r=t(85893);t(67294);var s={src:"/_next/static/media/no_data_found_illustrator.c5c383a7.svg",height:255,width:255,blurWidth:0,blurHeight:0},n=t(24404),i=t(25675),l=t.n(i);let o=()=>(0,r.jsxs)("div",{className:"col-12 text-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l(),{loading:"lazy",src:s.src,alt:"",width:200,height:200})}),(0,r.jsxs)("div",{className:"no_data_found_text",children:[(0,r.jsx)("h3",{children:(0,n.Iu)("noData")}),(0,r.jsx)("span",{children:(0,n.Iu)("noDatatext")})]})]});var c=o},82618:function(e,a,t){"use strict";var r=t(85893);t(67294);var s=t(11358),n=t.n(s);let i=e=>{let{pageCount:a,onPageChange:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(n(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:a,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:t,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})})};a.Z=i},67619:function(e,a,t){"use strict";var r=t(85893);t(67294);var s=t(50549);a.Z=function(){return(0,r.jsx)("div",{className:"verticle_card",children:(0,r.jsxs)("div",{className:"card verticle_main_card",children:[(0,r.jsx)(s.Z,{width:"100%",height:"26vh",className:"skeleton_img"}),(0,r.jsx)("div",{className:"card-img-overlay",children:(0,r.jsx)(s.Z,{width:"100px",height:"35px"})}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("div",{id:"feature_card_mainbody",children:(0,r.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,r.jsx)("div",{className:"cate_image",children:(0,r.jsx)(s.Z,{width:"20px",height:"20px"})}),(0,r.jsx)(s.Z,{width:"100px",height:"20px"})]})}),(0,r.jsxs)("div",{id:"feature_card_middletext",children:[(0,r.jsx)(s.Z,{width:"100%",height:"20px"}),(0,r.jsx)(s.Z,{width:"100%",height:"16px"})]})]}),(0,r.jsx)("div",{className:"card-footer",id:"skeleton_card_footer",children:(0,r.jsx)("div",{className:"row",children:Array.from({length:4}).map((e,a)=>(0,r.jsx)("div",{className:"col-sm-12 col-md-6 ",children:(0,r.jsxs)("div",{id:"skeleton_footer_content",children:[(0,r.jsx)(s.Z,{width:"20px",height:"16px"}),(0,r.jsx)(s.Z,{width:"80px",height:"16px"})]},a)},a))})})]})})}},11358:function(e,a,t){var r;e.exports=(r=t(67294),(()=>{var e={703:(e,a,t)=>{"use strict";var r=t(414);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,a,t,s,n,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:s};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:e=>{"use strict";e.exports=r}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";t.r(s),t.d(s,{default:()=>b});var e=t(98),a=t.n(e),r=t(697),n=t.n(r);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,r=e.pageLinkClassName,s=e.page,n=e.selected,l=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,d=e.pageSelectedHandler,p=e.href,u=e.extraAriaContext,g=e.pageLabelBuilder,h=e.rel,f=e.ariaLabel||"Page "+s+(u?" "+u:""),m=null;return n&&(m="page",f=e.ariaLabel||"Page "+s+" is your current page",t=void 0!==t?t+" "+l:l,void 0!==r?void 0!==o&&(r=r+" "+o):r=o),a().createElement("li",{className:t},a().createElement("a",i({rel:h,role:p?void 0:"button",className:r,href:p,tabIndex:n?"-1":"0","aria-label":f,"aria-current":m,onKeyPress:d},c(d)),g(s)))};function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}l.propTypes={pageSelectedHandler:n().func.isRequired,selected:n().bool.isRequired,pageClassName:n().string,pageLinkClassName:n().string,activeClassName:n().string,activeLinkClassName:n().string,extraAriaContext:n().string,href:n().string,ariaLabel:n().string,page:n().number.isRequired,getEventListener:n().func.isRequired,pageLabelBuilder:n().func.isRequired,rel:n().string};var c=function(e){var t=e.breakLabel,r=e.breakAriaLabel,s=e.breakClassName,n=e.breakLinkClassName,i=e.breakHandler,l=e.getEventListener;return a().createElement("li",{className:s||"break"},a().createElement("a",o({className:n,role:"button",tabIndex:"0","aria-label":r,onKeyPress:i},l(i)),t))};function d(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(e,a){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}c.propTypes={breakLabel:n().oneOfType([n().string,n().node]),breakAriaLabel:n().string,breakClassName:n().string,breakLinkClassName:n().string,breakHandler:n().func.isRequired,getEventListener:n().func.isRequired};var v=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&g(e,a)}(n,e);var t,r,s=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=f(n);if(r){var t=f(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return function(e,a){if(a&&("object"===p(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function n(e){var t,r;return function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,n),m(h(t=s.call(this,e)),"handlePreviousPage",function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})}),m(h(t),"handleNextPage",function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})}),m(h(t),"handlePageSelected",function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)}),m(h(t),"handlePageChange",function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))}),m(h(t),"getEventListener",function(e){return m({},t.props.eventListener,e)}),m(h(t),"handleClick",function(e,a,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=s.isPrevious,i=s.isNext,l=s.isBreak,o=s.isActive;e.preventDefault?e.preventDefault():e.returnValue=!1;var c=t.state.selected,d=t.props.onClick,p=r;if(d){var u=d({index:a,selected:c,nextSelectedPage:r,event:e,isPrevious:void 0!==n&&n,isNext:void 0!==i&&i,isBreak:void 0!==l&&l,isActive:void 0!==o&&o});if(!1===u)return;Number.isInteger(u)&&(p=u)}void 0!==p&&t.handlePageChange(p)}),m(h(t),"handleBreakClick",function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})}),m(h(t),"callCallback",function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})}),m(h(t),"callActiveCallback",function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})}),m(h(t),"getElementPageRel",function(e){var a=t.state.selected,r=t.props,s=r.nextPageRel,n=r.prevPageRel,i=r.selectedPageRel;return a-1===e?n:a===e?i:a+1===e?s:void 0}),m(h(t),"pagination",function(){var e=[],r=t.props,s=r.pageRangeDisplayed,n=r.pageCount,i=r.marginPagesDisplayed,l=r.breakLabel,o=r.breakClassName,d=r.breakLinkClassName,p=r.breakAriaLabels,u=t.state.selected;if(n<=s)for(var g=0;g<n;g++)e.push(t.getPageElement(g));else{var h=s/2,f=s-h;u>n-s/2?h=s-(f=n-u):u<s/2&&(f=s-(h=u));var m,v,b=function(e){return t.getPageElement(e)},x=[];for(m=0;m<n;m++){var A=m+1;if(A<=i)x.push({type:"page",index:m,display:b(m)});else if(A>n-i)x.push({type:"page",index:m,display:b(m)});else if(m>=u-h&&m<=u+(0===u&&s>1?f-1:f))x.push({type:"page",index:m,display:b(m)});else if(l&&x.length>0&&x[x.length-1].display!==v&&(s>0||i>0)){var y=m<u?p.backward:p.forward;v=a().createElement(c,{key:m,breakAriaLabel:y,breakLabel:l,breakClassName:o,breakLinkClassName:d,breakHandler:t.handleBreakClick.bind(null,m),getEventListener:t.getEventListener}),x.push({type:"break",index:m,display:v})}}x.forEach(function(a,t){var r=a;"break"===a.type&&x[t-1]&&"page"===x[t-1].type&&x[t+1]&&"page"===x[t+1].type&&x[t+1].index-x[t-1].index<=2&&(r={type:"page",index:a.index,display:b(a.index)}),e.push(r.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,s=e.pageCount,n=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),void 0!==a&&a>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(s-1,").")),void 0!==n&&n>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(n," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,s=a.hrefAllControls;if(t)return s||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,s=r.pageClassName,n=r.pageLinkClassName,i=r.activeClassName,o=r.activeLinkClassName,c=r.extraAriaContext,d=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:s,pageLinkClassName:n,activeClassName:i,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:d,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,s=t.disabledLinkClassName,n=t.pageCount,i=t.className,l=t.containerClassName,o=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,g=t.previousAriaLabel,h=t.prevRel,f=t.nextLabel,m=t.nextClassName,v=t.nextLinkClassName,b=t.nextAriaLabel,x=t.nextRel,A=this.state.selected,y=0===A,C=A===n-1,j="".concat(d(c)).concat(y?" ".concat(d(r)):""),N="".concat(d(m)).concat(C?" ".concat(d(r)):""),k="".concat(d(p)).concat(y?" ".concat(d(s)):""),P="".concat(d(v)).concat(C?" ".concat(d(s)):"");return a().createElement("ul",{className:i||l,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:j},a().createElement("a",u({className:k,href:this.getElementHref(A-1),tabIndex:y?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y?"true":"false","aria-label":g,rel:h},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),a().createElement("li",{className:N},a().createElement("a",u({className:P,href:this.getElementHref(A+1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C?"true":"false","aria-label":b,rel:x},this.getEventListener(this.handleNextPage)),f)))}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(e.Component);m(v,"propTypes",{pageCount:n().number.isRequired,pageRangeDisplayed:n().number,marginPagesDisplayed:n().number,previousLabel:n().node,previousAriaLabel:n().string,prevPageRel:n().string,prevRel:n().string,nextLabel:n().node,nextAriaLabel:n().string,nextPageRel:n().string,nextRel:n().string,breakLabel:n().oneOfType([n().string,n().node]),breakAriaLabels:n().shape({forward:n().string,backward:n().string}),hrefBuilder:n().func,hrefAllControls:n().bool,onPageChange:n().func,onPageActive:n().func,onClick:n().func,initialPage:n().number,forcePage:n().number,disableInitialCallback:n().bool,containerClassName:n().string,className:n().string,pageClassName:n().string,pageLinkClassName:n().string,pageLabelBuilder:n().func,activeClassName:n().string,activeLinkClassName:n().string,previousClassName:n().string,nextClassName:n().string,previousLinkClassName:n().string,nextLinkClassName:n().string,disabledClassName:n().string,disabledLinkClassName:n().string,breakClassName:n().string,breakLinkClassName:n().string,extraAriaContext:n().string,ariaLabelBuilder:n().func,eventListener:n().string,renderOnZeroPageCount:n().func,selectedPageRel:n().string}),m(v,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});let b=v})(),s})())},50549:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var r=t(67294);let s=r.createContext({});function n({count:e=1,wrapper:a,className:t,containerClassName:n,containerTestId:i,circle:l=!1,style:o,...c}){var d,p,u;let g=r.useContext(s),h={...c};for(let[e,a]of Object.entries(c))void 0===a&&delete h[e];let f={...g,...h,circle:l},m={...o,...function({baseColor:e,highlightColor:a,width:t,height:r,borderRadius:s,circle:n,direction:i,duration:l,enableAnimation:o=!0}){let c={};return"rtl"===i&&(c["--animation-direction"]="reverse"),"number"==typeof l&&(c["--animation-duration"]=`${l}s`),o||(c["--pseudo-element-display"]="none"),("string"==typeof t||"number"==typeof t)&&(c.width=t),("string"==typeof r||"number"==typeof r)&&(c.height=r),("string"==typeof s||"number"==typeof s)&&(c.borderRadius=s),n&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==a&&(c["--highlight-color"]=a),c}(f)},v="react-loading-skeleton";t&&(v+=` ${t}`);let b=null!==(d=f.inline)&&void 0!==d&&d,x=[],A=Math.ceil(e);for(let a=0;a<A;a++){let t=m;if(A>e&&a===A-1){let a=null!==(p=t.width)&&void 0!==p?p:"100%",r=e%1,s="number"==typeof a?a*r:`calc(${a} * ${r})`;t={...t,width:s}}let s=r.createElement("span",{className:v,style:t,key:a},"‌");b?x.push(s):x.push(r.createElement(r.Fragment,{key:a},s,r.createElement("br",null)))}return r.createElement("span",{className:n,"data-testid":i,"aria-live":"polite","aria-busy":null===(u=f.enableAnimation)||void 0===u||u},a?x.map((e,t)=>r.createElement(a,{key:t},e)):x)}}},function(e){e.O(0,[5937,1255,8166,5445,4617,4980,9401,3874,3096,1228,260,5675,1532,7932,421,6730,1636,9774,2888,179],function(){return e(e.s=58782)}),_N_E=e.O()}]);