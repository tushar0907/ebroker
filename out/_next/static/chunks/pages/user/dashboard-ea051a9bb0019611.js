(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5894],{62628:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/dashboard",function(){return i(86070)}])},86070:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return F}});var a=i(85893),t=i(67294),n=i(9026),l=i(76638),c=i(14957),d=i(9473),r=i(51183),o=i(7906),h=i(295),p=i(53252),u=i(72882),x=i(53184),j=i(53816),m=i(90629),g=i(41794),v=i(69249),_=i(89779),f=i(86548),N=i(48689),y=i(82267),Z=i(11163),b=i(63750),S=i(82618),I=i(69998),k=i(86501),C=i(89583),w=i(6212),T=i(35005),H=i(79352),P=i(32512),E=i(24404),L=i(25675),O=i.n(L);let R=e=>{var s,i;let{show:n,onHide:l,propertyId:c}=e,[o,h]=(0,t.useState)("HomeScreen"),[p,u]=(0,t.useState)([]),x=(0,d.v9)(y.vV),j=null==x?void 0:null===(s=x.package)||void 0===s?void 0:s.user_purchased_package,m=null===(i=j[0])||void 0===i?void 0:i.package.id,g=(0,Z.useRouter)(),v=e=>{h(e)},_=e=>{u(s=>[...s,...e])};(0,t.useEffect)(()=>{},[p]);let f=()=>{(0,r.A2)(m,c,o,p[0]?p[0]:"",e=>{k.ZP.success(e.message),l(),g.push("/user/advertisement")},e=>{console.log(e),k.ZP.success(e)})},N=e=>{u(s=>s.filter((s,i)=>i!==e))},{getRootProps:b,getInputProps:S,isDragActive:I}=(0,P.uI)({onDrop:_,accept:"image/*"}),C=(0,t.useMemo)(()=>p.map((e,s)=>(0,a.jsxs)("div",{className:"dropbox_img_div",children:[(0,a.jsx)(O(),{loading:"lazy",className:"dropbox_img",src:URL.createObjectURL(e),alt:e.name,width:200,height:200}),(0,a.jsxs)("div",{className:"dropbox_d",children:[(0,a.jsx)("button",{className:"dropbox_remove_img",onClick:()=>N(s),children:(0,a.jsx)(H.qFC,{size:"25px"})}),(0,a.jsxs)("div",{className:"dropbox_img_deatils",children:[(0,a.jsx)("span",{children:e.name}),(0,a.jsxs)("span",{children:[Math.round(e.size/1024)," KB"]})]})]})]},s)),[p]);return(0,a.jsxs)(w.Z,{show:n,onHide:l,centered:!0,className:"feature-modal",backdrop:"static",children:[(0,a.jsxs)(w.Z.Header,{children:[(0,a.jsx)(w.Z.Title,{children:(0,E.Iu)("featureProp")}),(0,a.jsx)(H.qFC,{className:"close-icon",size:40,onClick:l})]}),(0,a.jsxs)(w.Z.Body,{children:[(0,a.jsxs)("div",{className:"feature_div",children:[(0,a.jsx)("span",{className:"feature_form_titles",children:(0,E.Iu)("selectType")}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",children:(0,a.jsx)("div",{className:"HomeScreen"===o?"selectedOptionStyles":"optionStyles",onClick:()=>v("HomeScreen"),children:(0,E.Iu)("home")})}),(0,a.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",children:(0,a.jsx)("div",{className:"Slider"===o?"selectedOptionStyles":"optionStyles",onClick:()=>v("Slider"),children:(0,E.Iu)("slider")})}),(0,a.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",children:(0,a.jsx)("div",{className:"ProductListing"===o?"selectedOptionStyles":"optionStyles",onClick:()=>v("ProductListing"),children:(0,E.Iu)("list")})})]})]}),"Slider"===o&&(0,a.jsxs)("div",{className:"slider_img",children:[(0,a.jsx)("span",{className:"feature_form_titles",children:(0,E.Iu)("pickUpSliderImg")}),(0,a.jsxs)("div",{className:"dropbox",children:[(0,a.jsxs)("div",{...b(),className:"dropzone ".concat(I?"active":""),children:[(0,a.jsx)("input",{...S()}),0===p.length?I?(0,a.jsx)("span",{children:(0,E.Iu)("dropFiles")}):(0,a.jsxs)("span",{children:[(0,E.Iu)("dragFiles")," ",(0,a.jsxs)("span",{style:{textDecoration:"underline"},children:[" ",(0,E.Iu)("browse")]})]}):null]}),(0,a.jsx)("div",{children:C})]})]})]}),(0,a.jsx)(w.Z.Footer,{children:(0,a.jsx)(T.Z,{variant:"",id:"promote_button",onClick:f,children:(0,E.Iu)("promote")})})]})};var z=i(25789),B=i(86455),V=i.n(B);let D=()=>{var e,s;let i=(0,Z.useRouter)(),[w,T]=(0,t.useState)(!1),[H,P]=(0,t.useState)([]),[L,B]=(0,t.useState)(0),[D,F]=(0,t.useState)(0),[W,q]=(0,t.useState)(0),[A,U]=t.useState(null),[M,Y]=(0,t.useState)(null),[G,J]=(0,t.useState)(null),[K,Q]=(0,t.useState)(!1),X=(0,d.v9)(y.vV),$=getComputedStyle(document.documentElement).getPropertyValue("--primary-color"),ee=(0,d.v9)(z.iT);(0,t.useEffect)(()=>{},[ee]);let es=e=>{i.push("/user/edit-property?id=".concat(e))},ei=e=>{if(!X.demo_mode)return V().fire({title:"Opps !",text:"This Action is Not Allowed in Demo Mode",icon:"warning",showCancelButton:!1,confirmButtonColor:$,cancelButtonColor:"#d33",confirmButtonText:"OK"}),!1;Y(e),T(!0),(0,r.gq)(e,e=>{T(!0),k.ZP.success(e.message),(0,r.RO)("","","","","","","",W.toString(),et.toString(),"","","","","","","","",ec?ed:"","",e=>{B(e.total),F(e.total_clicks);let s=e.data;T(!1),P(s)},e=>{T(!1),console.log(e)})},e=>{T(!1),k.ZP.error(e)})},ea=e=>{J(e),Q(!0)},et=8,en=(0,d.v9)(y.vV),el=en&&en.currency_symbol,ec=(0,d.v9)(e=>e.User_signup),ed=ec&&ec.data?ec.data.data.id:null,er=ec&&(null==ec?void 0:null===(e=ec.data)||void 0===e?void 0:null===(s=e.data)||void 0===s?void 0:s.name);(0,t.useEffect)(()=>{T(!0),(0,r.RO)("","","","","","","",W.toString(),et.toString(),"","","","","","","","",ec?ed:"","",e=>{B(e.total),F(e.total_clicks);let s=e.data;T(!1),P(s)},e=>{T(!1),console.log(e)})},[W,ec,M]),(0,t.useEffect)(()=>{},[G,M]);let eo=e=>{let s=e.selected*et;q(s),window.scrollTo(0,0)};return(0,a.jsx)(n.Z,{children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",id:"dashboard_top_card",children:[(0,a.jsx)("div",{className:"col-12",children:(0,a.jsxs)("div",{className:"row",id:"dashboard_top_card",children:[(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-4",children:(0,a.jsx)("div",{className:"card",id:"dashboard_card",children:(0,a.jsx)("div",{id:"dashboard_user",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{className:"dashboard_user_title",children:[(0,E.Iu)("hy")," ",""," ",er]}),(0,a.jsx)("p",{className:"card-text",children:(0,E.Iu)("manageYourProfile")})]})})})}),(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-4",children:(0,a.jsxs)("div",{className:"card",id:"dashboard_total_prop_card",children:[(0,a.jsxs)("div",{className:"totalprop",children:[(0,a.jsx)("span",{children:(0,E.Iu)("totalProperty")}),L>0?(0,a.jsx)("h4",{children:L}):(0,a.jsx)("h4",{children:"0"})]}),(0,a.jsx)("div",{className:"total_prop_icon",children:(0,a.jsx)("span",{children:(0,a.jsx)(l.Z,{sx:{fontSize:"35px"}})})})]})}),(0,a.jsx)("div",{className:"col-12 col-md-12 col-lg-4",children:(0,a.jsxs)("div",{className:"card",id:"dashboard_total_prop_card",children:[(0,a.jsxs)("div",{className:"totalprop",children:[(0,a.jsx)("span",{children:(0,E.Iu)("totalViews")}),D>0?(0,a.jsx)("h4",{children:D}):(0,a.jsx)("h4",{children:"0"})]}),(0,a.jsx)("div",{className:"total_prop_icon",children:(0,a.jsx)("span",{children:(0,a.jsx)(c.Z,{sx:{fontSize:"35px"}})})})]})})]})}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsxs)("div",{className:"table_content card bg-white",children:[(0,a.jsx)(u.Z,{component:m.Z,sx:{background:"#fff",padding:"10px"},children:(0,a.jsxs)(o.Z,{sx:{minWidth:650},"aria-label":"caption table",children:[(0,a.jsx)(x.Z,{sx:{background:"#f5f5f5"},children:(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(p.Z,{sx:{fontWeight:"600"},children:(0,E.Iu)("listingTitle")}),(0,a.jsx)(p.Z,{sx:{fontWeight:"600"},align:"center",children:(0,E.Iu)("category")}),(0,a.jsx)(p.Z,{sx:{fontWeight:"600"},align:"center",children:(0,E.Iu)("views")}),(0,a.jsx)(p.Z,{sx:{fontWeight:"600"},align:"center",children:(0,E.Iu)("postedOn")}),(0,a.jsx)(p.Z,{sx:{fontWeight:"600"},align:"center",children:(0,E.Iu)("status")}),(0,a.jsx)(p.Z,{sx:{fontWeight:"600"},align:"center",children:(0,E.Iu)("action")})]})}),(0,a.jsx)(h.Z,{children:w?(0,a.jsx)(j.Z,{children:(0,a.jsx)(p.Z,{colSpan:6,align:"center",children:(0,a.jsx)("div",{children:(0,a.jsx)(I.Z,{})})})}):H.length>0?H.map((e,s)=>(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(p.Z,{component:"th",scope:"row",sx:{width:"40%"},children:(0,a.jsxs)("div",{className:"card",id:"listing_card",children:[(0,a.jsxs)("div",{className:"listing_card_img",children:[(0,a.jsx)(O(),{loading:"lazy",src:e.title_image,alt:"",id:"main_listing_img",width:150,height:0,style:{height:"auto"}}),(0,a.jsx)("span",{className:"listing_type_tag",children:e.propery_type})]}),(0,a.jsxs)("div",{className:"listing_card_body",children:[(0,a.jsx)("span",{className:"listing_prop_title",children:e.title}),(0,a.jsxs)("span",{className:"listing_prop_loc",children:[e.city," ",e.state," ",e.country]}),(0,a.jsxs)("span",{className:"listing_prop_pirce",children:[el," ",e.price]})]})]})}),(0,a.jsx)(p.Z,{align:"center",children:e.category.category}),(0,a.jsx)(p.Z,{align:"center",children:e.total_view}),(0,a.jsx)(p.Z,{align:"center",children:e.post_created}),(0,a.jsx)(p.Z,{align:"center",children:1===e.status?(0,a.jsx)("span",{className:"active_status",children:(0,E.Iu)("active")}):(0,a.jsx)("span",{className:"inactive_status",children:(0,E.Iu)("inactive")})}),(0,a.jsx)(p.Z,{align:"center",children:(0,a.jsx)(g.Z,{visible:A===s,onVisibleChange:e=>{e?U(s):U(null)},overlay:(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(v.Z.Item,{onClick:()=>es(e.id),children:(0,a.jsx)(_.ZP,{type:"text",icon:(0,a.jsx)(f.Z,{}),children:(0,E.Iu)("edit")})},"edit"),1===e.status?(0,a.jsx)(v.Z.Item,{children:(0,a.jsx)(_.ZP,{type:"text",icon:(0,a.jsx)(C.CvY,{}),onClick:()=>ea(e.id),children:(0,E.Iu)("feature")})},"feature"):null,(0,a.jsx)(v.Z.Item,{children:(0,a.jsx)(_.ZP,{type:"text",icon:(0,a.jsx)(N.Z,{}),onClick:()=>ei(e.id),children:(0,E.Iu)("delete")})},"delete")]}),children:(0,a.jsx)(_.ZP,{id:"simple-menu",children:(0,a.jsx)(b.FQA,{})})})})]},s)):(0,a.jsx)(j.Z,{children:(0,a.jsx)(p.Z,{colSpan:6,align:"center",children:(0,a.jsx)("p",{children:(0,E.Iu)("noDataAvailabe")})})})})]})}),(0,a.jsx)(R,{show:K,onHide:()=>Q(!1),propertyId:G}),H.length>0?(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)(S.Z,{pageCount:Math.ceil(L/et),onPageChange:eo})}):null]})})]})})})};var F=D},69998:function(e,s,i){"use strict";var a=i(85893);i(67294);let t=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"loader-container",children:(0,a.jsx)("div",{className:"loader"})})});s.Z=t},82618:function(e,s,i){"use strict";var a=i(85893);i(67294);var t=i(11358),n=i.n(t);let l=e=>{let{pageCount:s,onPageChange:i}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(n(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:i,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})})};s.Z=l},51183:function(e,s,i){"use strict";i.d(s,{$z:function(){return h},A2:function(){return Z},BP:function(){return b},LU:function(){return x},MV:function(){return f},NJ:function(){return m},RO:function(){return c},Se:function(){return N},TY:function(){return l},cZ:function(){return v},dG:function(){return g},gC:function(){return _},gL:function(){return j},gq:function(){return y},li:function(){return d},pw:function(){return o},sR:function(){return p},vq:function(){return r},wN:function(){return u}});var a=i(49824),t=i(90036),n=i(2711);let l=(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N)=>{t.h.dispatch((0,n.pH)({...(0,a.LL)(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v),displayToast:!1,onStart:N,onSuccess:_,onError:f}))},c=(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N,y,Z,b)=>{t.h.dispatch((0,n.pH)({...(0,a.uC)(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N),displayToast:!1,onStart:b,onSuccess:y,onError:Z}))},d=(e,s,i,l,c,d)=>{t.h.dispatch((0,n.pH)({...(0,a.wD)(e,s,i),displayToast:!1,onStart:d,onSuccess:l,onError:c}))},r=(e,s,i)=>{t.h.dispatch((0,n.pH)({...(0,a.dB)(),displayToast:!1,onStart:i,onSuccess:e,onError:s}))},o=(e,s,i,l,c)=>{t.h.dispatch((0,n.pH)({...(0,a.IR)(e,s),displayToast:!1,onStart:c,onSuccess:i,onError:l}))},h=(e,s,i,l,c,d,r,o)=>{t.h.dispatch((0,n.pH)({...(0,a.Ub)(e,s,i,l,c),displayToast:!1,onStart:o,onSuccess:d,onError:r}))},p=(e,s,i,l,c)=>{t.h.dispatch((0,n.pH)({...(0,a.YE)(e,s),displayToast:!1,onStart:c,onSuccess:i,onError:l}))},u=(e,s,i)=>{t.h.dispatch((0,n.pH)({...(0,a.EV)(),displayToast:!1,onStart:i,onSuccess:e,onError:s}))},x=(e,s,i)=>{t.h.dispatch((0,n.pH)({...(0,a.Rs)(),displayToast:!1,onStart:i,onSuccess:e,onError:s}))},j=(e,s,i,l,c,d,r,o,h,p,u,x,j,m)=>{t.h.dispatch((0,n.pH)({...(0,a.Gl)(e,s,i,l,c,d,r,o,h,p,u),displayToast:!1,onStart:m,onSuccess:x,onError:j}))},m=(e,s,i,l)=>{t.h.dispatch((0,n.pH)({...(0,a.B1)(e),displayToast:!1,onStart:l,onSuccess:s,onError:i}))},g=(e,s,i)=>{t.h.dispatch((0,n.pH)({...(0,a.hd)(),displayToast:!1,onStart:i,onSuccess:e,onError:s}))},v=(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N,y,Z,b)=>{t.h.dispatch((0,n.pH)({...(0,a.wO)(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N),displayToast:!1,onStart:b,onSuccess:y,onError:Z}))},_=(e,s,i,l)=>{t.h.dispatch((0,n.pH)({...(0,a.Qc)(e),displayToast:!1,onStart:l,onSuccess:s,onError:i}))},f=(e,s,i)=>{t.h.dispatch((0,n.pH)({...(0,a.Gn)(),displayToast:!1,onStart:i,onSuccess:e,onError:s}))},N=(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N,y,Z,b,S)=>{t.h.dispatch((0,n.pH)({...(0,a.xV)(e,s,i,l,c,d,r,o,h,p,u,x,j,m,g,v,_,f,N,y),displayToast:!1,onStart:S,onSuccess:Z,onError:b}))},y=(e,s,i,l)=>{t.h.dispatch((0,n.pH)({...(0,a.E2)(e),displayToast:!1,onStart:l,onSuccess:s,onError:i}))},Z=(e,s,i,l,c,d,r)=>{t.h.dispatch((0,n.pH)({...(0,a.Jq)(e,s,i,l),displayToast:!1,onStart:r,onSuccess:c,onError:d}))},b=(e,s,i,l,c)=>{t.h.dispatch((0,n.pH)({...(0,a.kd)(e,s),displayToast:!1,onStart:c,onSuccess:i,onError:l}))}}},function(e){e.O(0,[5937,1255,8166,5445,2013,5675,1532,7932,421,5673,2593,2512,6482,5818,4126,9026,9774,2888,179],function(){return e(e.s=62628)}),_N_E=e.O()}]);