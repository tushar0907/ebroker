(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2911],{60138:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/properties/city/[slug]",function(){return s(98075)}])},98075:function(e,l,s){"use strict";s.r(l);var a=s(85893),t=s(67294),i=s(41664),r=s.n(i),n=s(59251),c=s(58474),o=s(80864),d=s(11163),p=s(90086),u=s(38565);s(11358);var h=s(51183),g=s(77399),m=s(25789),x=s(9473),v=s(82618),j=s(1431);s(24404);var f=s(7134),N=s(87713);let y=()=>{let[e,l]=(0,t.useState)(!1),[s,i]=(0,t.useState)(!1),[y,S]=(0,t.useState)(),[_,P]=(0,t.useState)({propType:"",category:"",minPrice:"",maxPrice:"",postedSince:"",selectedLocation:null}),[w,C]=(0,t.useState)(),[T,Z]=(0,t.useState)(0),E=(0,d.useRouter)(),k=E.query,b=(0,x.v9)(e=>e.User_signup),D=b&&b.data?b.data.data.id:null,O=(0,x.v9)(m.iT),A=(0,x.v9)(N.A3);(0,t.useEffect)(()=>{},[O]),(0,t.useEffect)(()=>{i(!0),(0,h.RO)("","","","","",k,"",T.toString(),"8",b?D:"","","","","","","","","","",e=>{C(e.total);let l=e.data;i(!1),S(l)},e=>{i(!1),console.log(e)})},[T,b]);let L=e=>{let l=8*e.selected;Z(l),window.scrollTo(0,0)},R=e=>{let{name:l,value:s,type:a}=e.target;if("number"===a){let e=Math.max(0,parseInt(s));P({..._,[l]:e})}else P({..._,[l]:s})},F=e=>{P({..._,propType:"sell"===e?0:1})},H=e=>{P({..._,postedSince:e.target.value})},I=()=>{P({propType:"",category:"",minPrice:"",maxPrice:"",postedSince:"",selectedLocation:null})},M=e=>{e.preventDefault();let l="";"yesterday"===_.postedSince?l="0":"lastWeek"===_.postedSince&&(l="1"),(0,h.RO)("","","",_?null==_?void 0:_.category:"","",k,"",T.toString(),"8",b?D:"",_?null==_?void 0:_.propType:"",_?null==_?void 0:_.maxPrice:"",_?null==_?void 0:_.minPrice:"",l,"","","","","",e=>{C(e.total);let l=e.data;S(l),i(!1)},e=>{i(!1),console.log(e)})};return(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(n.Z,{title:k.slug?"Properties Listed in ".concat(k.slug," "):"No Properties in ".concat(k.slug)}),(0,a.jsx)("div",{id:"all-prop-containt",children:(0,a.jsx)("div",{className:"all-properties container",children:(0,a.jsxs)("div",{className:"row ",id:"main-all-prop",children:[(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-3",children:(0,a.jsx)(o.Z,{filterData:_,getCategories:A,handleInputChange:R,handleTabClick:F,handlePostedSinceChange:H,cityName:k.slug,handleApplyfilter:M,handleClearFilter:I})}),(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-9",children:(0,a.jsxs)("div",{className:"all-prop-rightside",children:[y&&y.length>0?(0,a.jsx)(p.Z,{total:w,setGrid:l}):null,y&&y.length>0?e?(0,a.jsx)("div",{id:"columnCards",children:(0,a.jsx)("div",{className:"row",id:"all-prop-col-cards",children:y.map((e,l)=>(0,a.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:(0,a.jsx)(r(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.id),passHref:!0,children:(0,a.jsx)(c.Z,{ele:e})})},l))})}):(0,a.jsx)("div",{className:"all-prop-cards",id:"rowCards",children:s?Array.from({length:8}).map((e,l)=>(0,a.jsx)("div",{className:"col-sm-12  loading_data",children:(0,a.jsx)(g.Z,{})})):y.map(e=>(0,a.jsx)(r(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.id),passHref:!0,children:(0,a.jsx)(u.Z,{ele:e})}))}):(0,a.jsx)("div",{className:"noDataFoundDiv",children:(0,a.jsx)(f.Z,{})}),y&&y.length>0?(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)(v.Z,{pageCount:Math.ceil(w/8),onPageChange:L})}):null]})})]})})})]})};l.default=y}},function(e){e.O(0,[5937,1255,8166,5445,4617,4980,9401,3874,3096,1228,260,5675,1532,7932,421,6730,2850,1636,2213,9774,2888,179],function(){return e(e.s=60138)}),_N_E=e.O()}]);