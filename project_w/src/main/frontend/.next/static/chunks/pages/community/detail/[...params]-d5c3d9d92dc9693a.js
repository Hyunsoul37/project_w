(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{6270:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/detail/[...params]",function(){return n(1903)}])},1903:function(e,i,n){"use strict";n.r(i),n.d(i,{__N_SSP:function(){return f},default:function(){return p}});var t=n(1799),s=n(5893),r=n(9473),a=n(9396),c=n(828),l=n(7294),d=n(6066);n(1548),n(3873);var o=n(9583),v=n(7916),w=n.n(v),u=n(8193),h=n(6278),_=n(1163),x=n(6411),j=function(e){var i,n=(0,c.Z)((0,l.useState)(!1),2),v=n[0],j=n[1],m=(0,c.Z)((0,l.useState)(0),2),f=m[0],p=m[1],R=(0,c.Z)((0,l.useState)(!0),2),N=R[0],g=R[1],S=(0,c.Z)((0,l.useState)([]),2),b=S[0],D=S[1],k=(0,_.useRouter)(),I=(0,x.Z)("(max-width:768px)"),C=(0,r.v9)(function(e){return e.user}),Z=function(e){var i=e.className,n=e.style,r=e.currentSlide,c=e.onClick,l=e.slideCount,d=function(){N&&(g(!1),void 0!==r&&void 0!=l&&(r<l-1?p(r+1):p(0)))};return(0,s.jsx)("span",{className:[e.cssclassName,i].join(" "),style:(0,a.Z)((0,t.Z)({},n),{display:"block"}),onClick:function(e){d(),c&&c(e)},children:(0,s.jsx)(u.rYR,{})})},T=function(e){var i=e.className,n=e.style,r=e.currentSlide,c=e.onClick,l=e.slideCount,d=function(){N&&(g(!1),void 0!=r&&void 0!=l&&(r>0?p(r-1):p(l-1)))};return(0,s.jsx)("span",{className:[e.cssclassName,i].join(" "),style:(0,a.Z)((0,t.Z)({},n),{display:"block"}),onClick:function(e){d(),c&&c(e)},children:(0,s.jsx)(u.FtK,{})})},E={initialSlide:0,dots:!0,centerMode:!0,centerPadding:"0px",infinite:!0,slidesToShow:2.3,slidesToScroll:1,draggable:!1,touchMove:!1,speed:500,arrows:!0,nextArrow:(0,s.jsx)(Z,{cssclassName:w().nextbtn}),prevArrow:(0,s.jsx)(T,{cssclassName:w().prevbtn}),beforeChange:function(e,i){p(i)},afterChange:function(){g(!0)}},y={slidesToShow:1,slidesToScroll:1,speed:500,dots:!0,touchMove:!1,nextArrow:(0,s.jsx)(Z,{cssclassName:w().nextbtn}),prevArrow:(0,s.jsx)(T,{cssclassName:w().prevbtn}),beforeChange:function(e,i){p(i)}};return i=b.length>=3?I?(0,a.Z)((0,t.Z)({},E),{slidesToShow:1}):E:y,(0,l.useEffect)(function(){D(e.reviewImgs.filter(function(e){return null!==e}))},[]),(0,s.jsx)("div",{className:"maxframe",children:(0,s.jsxs)("div",{className:w().ReviewDetail,children:[(0,s.jsx)("h1",{children:"COMMUNITY"}),(0,s.jsx)("h3",{children:"와구 회원들과의 즐거운 와인 이야기"}),(0,s.jsxs)("div",{className:w().HeaderImage,children:[(0,s.jsx)("img",{src:e.reviewImgs[0]}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:e.reviewTitle})})]}),(0,s.jsx)("div",{className:w().ReviewInfo,children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"와인타입"}),(0,s.jsx)("td",{children:e.wineType}),(0,s.jsx)("th",{children:"와인명"}),(0,s.jsx)("td",{id:"winename",children:e.wineName}),(0,s.jsx)("th",{children:"구매가격"}),(0,s.jsx)("td",{children:0===e.winePrice?"-":e.winePrice})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"해시태그"}),(0,s.jsx)("td",{colSpan:5,children:e.hashTag.map(function(e,i){return(0,s.jsx)("span",{children:e},"tag_".concat(i))})})]})]})})}),(0,s.jsxs)("div",{className:w().writerInfo,children:[(0,s.jsx)("img",{src:void 0===e.profileimg?"/images/default_profile.png":void 0}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:e.writerNickName}),(0,s.jsx)("span",{children:e.regiDate.split("T")[0]})]}),C.isLoggedIn&&e.writerId===C.userData.data.memberInfo.pid?(0,s.jsx)("div",{className:w().ReviewEditBtn,onClick:function(){return k.push({pathname:"/community/post",query:{reviewId:e.reviewId,edit:!0}})},children:(0,s.jsx)("p",{children:"수정하기"})}):(0,s.jsxs)("div",{className:[w().ReviewLikeBtn,v?w().active:""].join(" "),onClick:function(){return j(!v)},children:[(0,s.jsx)(o.$0H,{}),(0,s.jsx)("p",{children:"좋아요"})]})]}),(0,s.jsx)("div",{className:w().ReviewSliderWrapper,children:(0,s.jsx)(d.Z,(0,a.Z)((0,t.Z)({},i),{className:b.length>=3?w().ReviewSlider_three:w().ReviewSlider,children:b.map(function(e,i){return(0,s.jsx)("img",{alt:e,src:e,className:i===f?"":w().notcenter},"reviewimg_".concat(i))})}))}),(0,s.jsx)("div",{className:w().ReviewContents,children:(0,s.jsx)("p",{children:e.desc})}),(0,s.jsx)(h.Z,{reviewId:e.reviewId})]})})};n(6827);var m=n(8606),f=!0,p=function(e){var i=e.data;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{title:"".concat(i.writerNickName,"님의 포스팅")}),(0,s.jsx)(j,(0,t.Z)({},i))]})}},7916:function(e){e.exports={ReviewDetail:"ReviewDetail_ReviewDetail__gDEC3",HeaderImage:"ReviewDetail_HeaderImage__UbkZC",ReviewInfo:"ReviewDetail_ReviewInfo__iySpk",writerInfo:"ReviewDetail_writerInfo__ThTGX",ReviewEditBtn:"ReviewDetail_ReviewEditBtn__xTzSb",ReviewLikeBtn:"ReviewDetail_ReviewLikeBtn__fOaHD",active:"ReviewDetail_active__Mjqn1",ReviewSliderWrapper:"ReviewDetail_ReviewSliderWrapper___XEVq",ReviewSlider:"ReviewDetail_ReviewSlider__h0F8R",ReviewSlider_three:"ReviewDetail_ReviewSlider_three__dV9EF",notcenter:"ReviewDetail_notcenter__IWMEa",ReviewContents:"ReviewDetail_ReviewContents__bngkW",nextbtn:"ReviewDetail_nextbtn__quB1m",prevbtn:"ReviewDetail_prevbtn__dQMT3"}},6827:function(e){"use strict";e.exports=[]}},function(e){e.O(0,[445,183,514,774,888,179],function(){return e(e.s=6270)}),_N_E=e.O()}]);