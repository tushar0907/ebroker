(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1080],{77792:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/properties/all-properties",function(){return t(83360)}])},83360:function(e,l,t){"use strict";t.r(l);var a=t(85893),s=t(67294),i=t(41664),n=t.n(i),o=t(59251),d=t(58474),c=t(80864),r=t(90086),p=t(38565),u=t(51183),h=t(77399),v=t(9473),m=t(24404),g=t(25789),x=t(82618),j=t(1431),f=t(7134),N=t(87713);let S=()=>{let[e,l]=(0,s.useState)(!1),[t,i]=(0,s.useState)(!0),[S,_]=(0,s.useState)(),[y,w]=(0,s.useState)({propType:"",category:"",minPrice:"",maxPrice:"",postedSince:"",selectedLocation:null}),[C,P]=(0,s.useState)(),[T,Z]=(0,s.useState)(0),E=(0,v.v9)(e=>e.User_signup),L=E&&E.data?E.data.data.id:null,k=(0,v.v9)(g.iT),b=(0,v.v9)(N.A3);(0,s.useEffect)(()=>{},[k]),(0,s.useEffect)(()=>{i(!0),(0,u.RO)("","","","","","","",T.toString(),"8",E?L:"","","","","","","","","","",e=>{P(e.total);let l=e.data;i(!1),_(l)},e=>{i(!1),console.log(e)})},[T,E]);let D=e=>{let l=8*e.selected;Z(l),window.scrollTo(0,0)},O=e=>{let{name:l,value:t,type:a}=e.target;if("number"===a){let e=Math.max(0,parseInt(t));w({...y,[l]:e})}else w({...y,[l]:t})},A=e=>{w({...y,propType:"sell"===e?0:1})},I=e=>{w({...y,postedSince:e.target.value})},F=e=>{w({...y,selectedLocation:e})},H=()=>{w({propType:"",category:"",minPrice:"",maxPrice:"",postedSince:"",selectedLocation:null})},M=e=>{var l,t,a;e.preventDefault();let s="";"yesterday"===y.postedSince?s="0":"lastWeek"===y.postedSince&&(s="1"),(0,u.RO)("","","",y?null==y?void 0:y.category:"","",y?null==y?void 0:null===(l=y.selectedLocation)||void 0===l?void 0:l.city:"","",T.toString(),"8",E?L:"",y?null==y?void 0:y.propType:"",y?null==y?void 0:y.maxPrice:"",y?null==y?void 0:y.minPrice:"",s,y?null==y?void 0:null===(t=y.selectedLocation)||void 0===t?void 0:t.state:"",y?null==y?void 0:null===(a=y.selectedLocation)||void 0===a?void 0:a.country:"","","","",e=>{P(e.total);let l=e.data;_(l),i(!1)},e=>{i(!1),console.log(e)})};return(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(o.Z,{title:(0,m.Iu)("allProperties")}),(0,a.jsx)("div",{id:"all-prop-containt",children:(0,a.jsx)("div",{className:"all-properties container",children:(0,a.jsxs)("div",{className:"row ",id:"main-all-prop",children:[(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-3",children:(0,a.jsx)(c.Z,{filterData:y,getCategories:b,handleInputChange:O,handleTabClick:A,handlePostedSinceChange:I,handleLocationSelected:F,handleApplyfilter:M,handleClearFilter:H})}),(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-9",children:(0,a.jsxs)("div",{className:"all-prop-rightside",children:[S&&S.length>0?(0,a.jsx)(r.Z,{total:C,setGrid:l}):null,S&&S.length>0?e?(0,a.jsx)("div",{id:"columnCards",children:(0,a.jsx)("div",{className:"row",id:"all-prop-col-cards",children:S.map((e,l)=>(0,a.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:(0,a.jsx)(n(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.id),passHref:!0,children:(0,a.jsx)(d.Z,{ele:e})})},l))})}):(0,a.jsx)("div",{className:"all-prop-cards",id:"rowCards",children:t?Array.from({length:8}).map((e,l)=>(0,a.jsx)("div",{className:"col-sm-12  loading_data",children:(0,a.jsx)(h.Z,{})})):S.map(e=>(0,a.jsx)(n(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.id),passHref:!0,children:(0,a.jsx)(p.Z,{ele:e})}))}):(0,a.jsx)("div",{className:"noDataFoundDiv",children:(0,a.jsx)(f.Z,{})}),S&&S.length>0?(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)(x.Z,{pageCount:Math.ceil(C/8),onPageChange:D})}):null]})})]})})})]})};l.default=S}},function(e){e.O(0,[5937,1255,8166,5445,4617,4980,9401,3874,3096,1228,260,5675,1532,7932,421,6730,2850,1636,2213,9774,2888,179],function(){return e(e.s=77792)}),_N_E=e.O()}]);