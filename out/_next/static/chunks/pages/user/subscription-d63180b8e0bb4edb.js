(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{10123:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/subscription",function(){return a(61671)}])},61671:function(s,e,a){"use strict";a.r(e),a.d(e,{default:function(){return v}});var i=a(85893),t=a(67294),n=a(9026),r=a(38703),c=function(s){let{usedLimit:e,totalLimit:a}=s,t=getComputedStyle(document.documentElement).getPropertyValue("--primary-color");return(0,i.jsxs)("div",{style:{position:"relative",display:"inline-flex"},children:[(0,i.jsx)(r.Z,{id:"progress_bar",type:"circle",percent:e/a*100,format:()=>null,strokeWidth:10,strokeColor:{"0%":t,"100%":t}}),(0,i.jsx)("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},children:(0,i.jsx)("span",{className:"progress_bar_count",children:"".concat(e," / ").concat(a)})})]})},l=a(24617),d=a(9473),o=a(82267),u=a(51183),p=a(24404),h=a(25789);let _=()=>{var s,e,a,_,v,m,x,j,y,f;let[g,N]=(0,t.useState)(),b=(0,d.v9)(o.vV),k=null==b?void 0:null===(s=b.package)||void 0===s?void 0:s.user_purchased_package,T=b&&b.currency_symbol,w=k[0].package.id,H=k[0].package.property_limit,I=null===(e=k[0])||void 0===e?void 0:e.used_limit_for_property,E=k[0].package.property_limit,C=null===(a=k[0])||void 0===a?void 0:a.used_limit_for_advertisement,D=(0,d.v9)(h.iT);(0,t.useEffect)(()=>{},[D]);let L=(s=>{if(s){let e=new Date,a=new Date(s);return Math.floor((a-e)/864e5)}return null})(null===(_=k[0])||void 0===_?void 0:_.end_date),S=getComputedStyle(document.documentElement).getPropertyValue("--primary-color"),O=(()=>{var s,e;if((null===(s=k[0])||void 0===s?void 0:s.start_date)&&(null===(e=k[0])||void 0===e?void 0:e.end_date)){let s=new Date(k[0].start_date),e=new Date(k[0].end_date);return Math.floor((e-s)/864e5)}return null})();function P(s){if(null===s)return"Lifetime";let e=new Date(s),a=e.toLocaleDateString("en-US",{weekday:"long"}),i=e.getDate(),t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(a,", ").concat(i," ").concat(t,", ").concat(n)}(0,t.useEffect)(()=>{(0,u.gC)(w,s=>{N(s&&s)},s=>{console.log("API Error:",s)})},[w]);let V=P(null===(v=k[0])||void 0===v?void 0:v.start_date),M=P(null===(m=k[0])||void 0===m?void 0:m.end_date);return(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"dashboard_titles",children:(0,i.jsx)("h3",{children:(0,p.Iu)("mySub")})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12 col-md-6",id:"subscription_card_col",children:(0,i.jsxs)("div",{className:"card",id:"subscription_card",children:[(0,i.jsxs)("div",{className:"card-header",id:"subscription_card_header",children:[(0,i.jsx)("span",{className:"subscription_current_package",children:(0,p.Iu)("currentPack")}),(0,i.jsx)("span",{className:"subscription_current_package_type",children:k[0].package.name})]}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsxs)("div",{id:"subscription_validity",children:[(0,i.jsxs)("div",{className:"package_validity",children:[(0,i.jsx)("span",{className:"package_details_title",children:(0,p.Iu)("packVali")}),(null===(x=k[0])||void 0===x?void 0:x.end_date)!==null?(0,i.jsxs)("span",{className:"package_details_value",children:[k[0].package.duration,""," ",(0,p.Iu)("days")]}):(0,i.jsxs)("span",{className:"package_details_value",children:[M," "]})]}),(0,i.jsxs)("div",{className:"package_price",children:[(0,i.jsx)("span",{className:"package_details_title",children:(0,p.Iu)("price")}),(0,i.jsxs)("span",{className:"package_details_value",children:[k[0].package.price," ",T]})]})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{id:"subscription_details",children:(0,i.jsxs)("div",{className:"row",id:"subscription_card_row",children:[(0,i.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",id:"subscription_progress_cards",children:(0,i.jsxs)("div",{className:"property_count_card",children:[(0,i.jsx)("span",{children:(0,p.Iu)("property")}),(0,i.jsx)("div",{className:"progress_bar_div",children:(0,i.jsx)(c,{usedLimit:I,totalLimit:H})})]})}),(0,i.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",id:"subscription_progress_cards",children:(0,i.jsxs)("div",{className:"advertisement_count_card",children:[(0,i.jsx)("span",{children:(0,p.Iu)("advertisement")}),(0,i.jsx)("div",{className:"progress_bar_div",children:(0,i.jsx)(c,{usedLimit:C,totalLimit:E})})]})}),(0,i.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",id:"subscription_progress_cards",children:(0,i.jsxs)("div",{className:"remaining_count_card",children:[(0,i.jsx)("span",{children:(0,p.Iu)("remaining")}),(0,i.jsx)("div",{className:"progress_bar_div",children:(0,i.jsxs)("div",{style:{position:"relative",display:"inline-flex"},children:[(0,i.jsx)(r.Z,{id:"progress_bar",type:"circle",percent:(null===(j=k[0])||void 0===j?void 0:j.end_date)!==null?L/O*100:100,format:()=>null,strokeWidth:10,strokeColor:{"0%":S,"100%":S}}),(0,i.jsx)("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},children:(null===(y=k[0])||void 0===y?void 0:y.end_date)!==null?(0,i.jsx)("span",{className:"progress_bar_count",children:"".concat(L," Days")}):(0,i.jsx)("span",{className:"progress_bar_count",children:(0,p.Iu)("infinity")})})]})})]})})]})}),(0,i.jsxs)("div",{id:"subscription_duration",children:[(0,i.jsxs)("div",{className:"started_on",children:[(0,i.jsx)("div",{className:"icon_div",children:(0,i.jsx)(l.Z,{className:"cal_icon"})}),(0,i.jsxs)("div",{className:"dates",children:[(0,i.jsx)("span",{className:"dates_title",children:(0,p.Iu)("startOn")}),(0,i.jsx)("span",{className:"dates_value",children:V})]})]}),(null===(f=k[0])||void 0===f?void 0:f.end_date)!==null?(0,i.jsxs)("div",{className:"ends_on",children:[(0,i.jsxs)("div",{className:"dates",children:[(0,i.jsx)("span",{className:"dates_title",children:(0,p.Iu)("endsOn")}),(0,i.jsx)("span",{className:"dates_value",children:M})]}),(0,i.jsx)("div",{className:"icon_div",children:(0,i.jsx)(l.Z,{className:"cal_icon"})})]}):null]})]})]})})})]})})};var v=_},51183:function(s,e,a){"use strict";a.d(e,{$z:function(){return u},A2:function(){return b},BP:function(){return k},LU:function(){return _},MV:function(){return f},NJ:function(){return m},RO:function(){return c},Se:function(){return g},TY:function(){return r},cZ:function(){return j},dG:function(){return x},gC:function(){return y},gL:function(){return v},gq:function(){return N},li:function(){return l},pw:function(){return o},sR:function(){return p},vq:function(){return d},wN:function(){return h}});var i=a(49824),t=a(90036),n=a(2711);let r=(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g)=>{t.h.dispatch((0,n.pH)({...(0,i.LL)(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j),displayToast:!1,onStart:g,onSuccess:y,onError:f}))},c=(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g,N,b,k)=>{t.h.dispatch((0,n.pH)({...(0,i.uC)(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g),displayToast:!1,onStart:k,onSuccess:N,onError:b}))},l=(s,e,a,r,c,l)=>{t.h.dispatch((0,n.pH)({...(0,i.wD)(s,e,a),displayToast:!1,onStart:l,onSuccess:r,onError:c}))},d=(s,e,a)=>{t.h.dispatch((0,n.pH)({...(0,i.dB)(),displayToast:!1,onStart:a,onSuccess:s,onError:e}))},o=(s,e,a,r,c)=>{t.h.dispatch((0,n.pH)({...(0,i.IR)(s,e),displayToast:!1,onStart:c,onSuccess:a,onError:r}))},u=(s,e,a,r,c,l,d,o)=>{t.h.dispatch((0,n.pH)({...(0,i.Ub)(s,e,a,r,c),displayToast:!1,onStart:o,onSuccess:l,onError:d}))},p=(s,e,a,r,c)=>{t.h.dispatch((0,n.pH)({...(0,i.YE)(s,e),displayToast:!1,onStart:c,onSuccess:a,onError:r}))},h=(s,e,a)=>{t.h.dispatch((0,n.pH)({...(0,i.EV)(),displayToast:!1,onStart:a,onSuccess:s,onError:e}))},_=(s,e,a)=>{t.h.dispatch((0,n.pH)({...(0,i.Rs)(),displayToast:!1,onStart:a,onSuccess:s,onError:e}))},v=(s,e,a,r,c,l,d,o,u,p,h,_,v,m)=>{t.h.dispatch((0,n.pH)({...(0,i.Gl)(s,e,a,r,c,l,d,o,u,p,h),displayToast:!1,onStart:m,onSuccess:_,onError:v}))},m=(s,e,a,r)=>{t.h.dispatch((0,n.pH)({...(0,i.B1)(s),displayToast:!1,onStart:r,onSuccess:e,onError:a}))},x=(s,e,a)=>{t.h.dispatch((0,n.pH)({...(0,i.hd)(),displayToast:!1,onStart:a,onSuccess:s,onError:e}))},j=(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g,N,b,k)=>{t.h.dispatch((0,n.pH)({...(0,i.wO)(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g),displayToast:!1,onStart:k,onSuccess:N,onError:b}))},y=(s,e,a,r)=>{t.h.dispatch((0,n.pH)({...(0,i.Qc)(s),displayToast:!1,onStart:r,onSuccess:e,onError:a}))},f=(s,e,a)=>{t.h.dispatch((0,n.pH)({...(0,i.Gn)(),displayToast:!1,onStart:a,onSuccess:s,onError:e}))},g=(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g,N,b,k,T)=>{t.h.dispatch((0,n.pH)({...(0,i.xV)(s,e,a,r,c,l,d,o,u,p,h,_,v,m,x,j,y,f,g,N),displayToast:!1,onStart:T,onSuccess:b,onError:k}))},N=(s,e,a,r)=>{t.h.dispatch((0,n.pH)({...(0,i.E2)(s),displayToast:!1,onStart:r,onSuccess:e,onError:a}))},b=(s,e,a,r,c,l,d)=>{t.h.dispatch((0,n.pH)({...(0,i.Jq)(s,e,a,r),displayToast:!1,onStart:d,onSuccess:c,onError:l}))},k=(s,e,a,r,c)=>{t.h.dispatch((0,n.pH)({...(0,i.kd)(s,e),displayToast:!1,onStart:c,onSuccess:a,onError:r}))}}},function(s){s.O(0,[5937,1255,8166,5675,1532,7932,5673,2593,2094,9026,9774,2888,179],function(){return s(s.s=10123)}),_N_E=s.O()}]);