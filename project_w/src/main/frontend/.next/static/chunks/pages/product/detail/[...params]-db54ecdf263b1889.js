(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{1014:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(7462);function r(e){let{theme:n,name:t,props:r}=e;return n&&n.components&&n.components[t]&&n.components[t].defaultProps?function e(n,t){let r=(0,i.Z)({},t);return Object.keys(n).forEach(s=>{if(s.toString().match(/^(components|slots)$/))r[s]=(0,i.Z)({},n[s],r[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){let c=n[s]||{},a=t[s];r[s]={},a&&Object.keys(a)?c&&Object.keys(c)?(r[s]=(0,i.Z)({},a),Object.keys(c).forEach(n=>{r[s][n]=e(c[n],a[n])})):r[s]=a:r[s]=c}else void 0===r[s]&&(r[s]=n[s])}),r}(n.components[t].defaultProps,r):r}},433:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(7294);let r=i.createContext(null);var s=function(e=null){let n=function(){let e=i.useContext(r);return e}();return n&&0!==Object.keys(n).length?n:e}},6600:function(e,n,t){"use strict";var i=t(7294);let r="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;n.Z=r},7032:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/detail/[...params]",function(){return t(2312)}])},72:function(e,n,t){"use strict";t.d(n,{_3:function(){return r},qJ:function(){return i}});var i=function(e,n,t){var i=0,r=[],s=Math.round(e);for(i=0;i<s;i++)r.push(n);for(i=0;i<5-s;i++)r.push(t);return r},r=function(){var e=new Date().getFullYear(),n=new Date().getMonth()+1,t=new Date().getDate();return n<10&&(n="0".concat(n)),t<10&&(t="0".concat(t)),"".concat(e,".").concat(n,".").concat(t)}},2312:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return Z},default:function(){return O}});var i=t(1799),r=t(5893),s=t(6305),c=t(8680),a=t.n(c),l=t(9583),o=t(72),d=t(9503),u=t(5675),h=t.n(u),m=t(7294),x=t.t(m,2),f=t(433),j=t(1014),_=t(6600).Z;function p(e,n,t,i,r){let[s,c]=m.useState(()=>r&&t?t(e).matches:i?i(e).matches:n);return _(()=>{let n=!0;if(!t)return;let i=t(e),r=()=>{n&&c(i.matches)};return r(),i.addListener(r),()=>{n=!1,i.removeListener(r)}},[e,t]),s}let v=x.useSyncExternalStore;function w(e,n,t,i,r){let s=m.useCallback(()=>n,[n]),c=m.useMemo(()=>{if(r&&t)return()=>t(e).matches;if(null!==i){let{matches:n}=i(e);return()=>n}return s},[s,e,i,r,t]),[a,l]=m.useMemo(()=>{if(null===t)return[s,()=>()=>{}];let n=t(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]},[s,t,e]),o=v(l,a,c);return o}var g=function(e){var n,t=null==e?void 0:null===(n=e.recommendedSnack)||void 0===n?void 0:n.split("/"),i=null==t?void 0:t.map(function(e){return e.replaceAll(" ","")}),c=(0,s.Z)(new Set(i)).filter(function(e){return"null"!==e}),u=function(e,n={}){let t=(0,f.Z)(),i="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:s=i?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:a=!1}=(0,j.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),l="function"==typeof e?e(t):e;l=l.replace(/^@media( ?)/m,"");let o=(void 0!==v?w:p)(l,r,s,c,a);return o}("(max-width: 586px)");return(null==e?void 0:e.imageUrl)?(0,r.jsxs)("div",{className:"maxframe",children:[(0,r.jsxs)("div",{className:a().Detail,children:[(0,r.jsx)("div",{className:a().imageWrapper,children:(0,r.jsx)(h(),{alt:"wineimg",width:318,height:318,src:e.imageUrl?e.imageUrl:""})}),(0,r.jsxs)("div",{className:a().wineInfoWrapper,children:[(0,r.jsxs)("div",{className:a().wineName,children:[(0,r.jsx)("h4",{children:e.korName}),(0,r.jsx)("p",{children:e.engName})]}),(0,r.jsx)("div",{className:a().wineInfo,children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"소비자가"}),(0,r.jsx)("td",{children:e.price}),(0,r.jsx)("th",{children:"생산국가 / 지역"}),(0,r.jsxs)("td",{children:[e.country," / ",e.region]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{children:["평점(",e.starPoint,"점)"]}),(0,r.jsx)("td",{children:(0,r.jsx)(d.Z,{rating:e.starPoint,starRatedColor:"#61002E",numberOfStars:5,starDimension:u?"13px":"20px",starSpacing:u?"1px":"2px",name:"rating"})}),(0,r.jsx)("th",{children:"알콜도수"}),(0,r.jsx)("td",{children:"null"!==e.alcohol?e.alcohol:"없음"})]})]})})}),(0,r.jsx)("div",{className:a().wineTasty,children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"당도"}),(0,r.jsx)("td",{children:e.sweet?(0,o.qJ)(e.sweet,(0,r.jsx)(l.gbA,{}),(0,r.jsx)(l.muy,{})):"없음"}),(0,r.jsx)("th",{children:"바디"}),(0,r.jsx)("td",{children:e.body?(0,o.qJ)(e.body,(0,r.jsx)(l.gbA,{}),(0,r.jsx)(l.muy,{})):"없음"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"산도"}),(0,r.jsx)("td",{children:e.acidity?(0,o.qJ)(e.acidity,(0,r.jsx)(l.gbA,{}),(0,r.jsx)(l.muy,{})):"없음"}),(0,r.jsx)("th",{children:"타닌"}),(0,r.jsx)("td",{children:e.tannin?(0,o.qJ)(e.tannin,(0,r.jsx)(l.gbA,{}),(0,r.jsx)(l.muy,{})):"없음"})]})]})})}),(0,r.jsxs)("div",{className:a().wineFood,children:[(0,r.jsx)("p",{children:"음식매칭"}),(0,r.jsx)("div",{className:a().recommendSnack,children:c.length>0?c.map(function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(h(),{alt:"food",width:100,height:100,src:"/images/icon/".concat(e,".PNG")}),(0,r.jsx)("p",{className:a().foodText,children:e},"".concat(e,"_txt"))]})}):"추천 안주 정보가 없습니다."})]})]})]}),(0,r.jsxs)("div",{className:a().Desc,children:[(0,r.jsx)("img",{src:"/images/wineBg.png"}),(0,r.jsx)("p",{className:a().Desctitle,children:e.korName}),(0,r.jsx)("p",{className:a().desctext,children:e.desc})]})]}):(0,r.jsx)(r.Fragment,{})},N=t(828),y=t(627),D=t.n(y),b=["바디","산도","타닌","당도","알코올"],k=["와인의 바디감은 와인을 머금었을 때 입안에서 느껴지는 '묵직함'을 의미합니다. \n   사람에게도 무게가 있듯이, 와인에게도 무게감이 엄연히 존재하는데요. 라이트 바디->미디엄 바디->풀 바디로\n  갈수록 무겁고 진한 맛의 와인이라고 할 수 있습니다. \n  와인을 접한 지 얼마 되지 않았다면 풀 바디보다는 라이트한 바디감의 와인부터 마셔보는 것이와인과 친해지는 데에 \n  좀 더 수월합니다.","와인의 산도는 식초와 같이 톡 쏘는 시큼한 맛을 뜻합니다. \n  와인의 맛에 생동감을 주며, 장기 숙성을 가능하게 하는 요소이기도 합니다. \n  품종별로 다르기는 하지만 와인은 평균적으로 pH 3~4정도로 약산성을 띄는 음료입니다. 시큼한 맛이 약간 나는 와인부터 \n  새콤하면서 상큼한 맛이 나는 와인, 날카롭게 톡 쏘는 와인까지 다양한 산도의 와인들이 존재하는데요. \n  와인 산도가 높으면 와인 빛깔에서 광채(은광)가 느껴지고, 숙성시키면 색이 잘 보존됩니다. \n  와인의 산도가 높으면 미생물 안정성도 확보할 수 있는데요, 와인 산도가 pH 3.5 이상이면 와인을 병에 담은 이후에도 \n  발효가 진행되기도 한답니다. ","와인의 탄닌, 혹은 타닌은 와인 맛의 뼈대를 이루는 중요한 요소로, 덜 익은 감을 먹을 때 느껴지는 떫은 맛을 \n   떠올리는 것이 가장 적당할 것 같은데요. 와인에서 느껴지는 쌉싸름한 맛이 바로 탄닌입니다. \n   첫 모금을 마시는 순간 입안이 거칠어지고 다소 건조해지는 느낌도 들 수 있는데요. \n   마실수록 깊은 맛과 풍미를 느낄 수 있는 요소이기도 합니다.","와인의 당도는 와인의 맛 중에서 단맛, 달콤한 정도를 뜻합니다. \n  기본적으로 와인의 단맛은 원재료인 포도에서 나오는데요, 포도가 가지고 있는 고유의 당이 발효 과정을 거쳐 알코올로 분해된 \n  다음 알코올 도수가 알맞게 생성되면 발효가 멈춰지는데 이 시점에서 남아있는 당의 함량에 따라 와인의 단맛이 결정됩니다. \n  가볍고 달콤한 맛의 와인은 저렴하다는 편견이 널려 퍼져 있기도 하지만, 와인을 구성하는 맛의 요소 중에서 \n  맛의 풍미와 균형감을 결정하는 데에 큰 역할을 하는 것 또한 와인의 당도입니다.","와인의 알코올 함량, 즉 도수를 의미합니다.  와인의 원료인 포도의 당도가 높을수록 알코올 도수가 올라가요. \n  효모가 포도의 당분을 먹어치우면서 알코올과 이산화탄소를 만들어 내고, 이것이 알코올 발효로 이어지기 때문이랍니다. \n  라이트 바디감은 알코올 12.5도, 미디엄 바디감은 알코올 12.5~13.5도, 풀 바디는 13.5도 이상의 와인이라고 볼 수 있어요.\n  와인의 알코올 도수는 평균적으로 11도~15도 사이인데요, 와인이 발효될 때 알코올이 되는 미생물이 15도 이상의 도수에서는 \n  제 역할을 하지 못하기 때문이랍니다. 같은 발효주인 맥주, 청주, 막걸리 또한 그래서 15도를 넘지 않는 경우가 대부분이예요. \n  하지만 예외적으로 '주정 강화 와인'의 경우 와인의 발효 과정에서 브랜디를 섞었기 때문에 일반적인 와인보다는\n  도수가 높은 편이예요. 16~19도 정도이니, 일반 와인으로는 알코올이 부족하다 싶은 분들이 도전해 보시기 좋겠죠? \n  다만, 알코올이 너무 센 와인은 사람에 따라 맛과 향에서 불쾌함이 느껴질 수도 있으니 유의해 주세요."],S=function(){var e=(0,N.Z)((0,m.useState)(0),2),n=e[0],t=e[1];return(0,r.jsx)("div",{className:"maxframe",children:(0,r.jsxs)("div",{className:D().Wineterms,children:[(0,r.jsxs)("h4",{children:["어려운 와인 용어 ",(0,r.jsx)("span",{children:"와구"}),"가 설명해드릴게요:)"]}),(0,r.jsx)("div",{className:D().winetermsTab,children:b.map(function(e,i){return(0,r.jsx)("div",{className:i===n?D().active:D().inactive,onClick:function(){return t(i)},children:e},e)})}),(0,r.jsx)("div",{className:D().winetermsDesc,children:(0,r.jsx)("p",{children:k[n]})})]})})},W=t(8606),Z=!0,O=function(e){var n=e.data;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W.Z,{title:n.wineKorName}),(0,r.jsx)(g,(0,i.Z)({},n)),(0,r.jsx)(S,{})]})}},8606:function(e,n,t){"use strict";var i=t(5893),r=t(9008),s=t.n(r);n.Z=function(e){var n=e.title;return(0,i.jsx)(s(),{children:(0,i.jsxs)("title",{children:["WAGU | ",n]})})}},8680:function(e){e.exports={Detail:"Detail_Detail__ZJk9A",wineInfoWrapper:"Detail_wineInfoWrapper__5W8cR",imageWrapper:"Detail_imageWrapper__FKoX1",wineName:"Detail_wineName__Tqt_y",wineInfo:"Detail_wineInfo__nMY3G",wineTasty:"Detail_wineTasty__SvSoX",wineFood:"Detail_wineFood__qB20K",recommendSnack:"Detail_recommendSnack___jSch",foodText:"Detail_foodText__izWHh",Desc:"Detail_Desc__eLTl7",Desctitle:"Detail_Desctitle___U_eG",desctext:"Detail_desctext__zzKaE"}},627:function(e){e.exports={Wineterms:"Wineterms_Wineterms__G6ONn",winetermsTab:"Wineterms_winetermsTab__OGyBq",inactive:"Wineterms_inactive___RgbI",active:"Wineterms_active__xcxyY",winetermsDesc:"Wineterms_winetermsDesc__uNV84"}},7462:function(e,n,t){"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[445,959,503,774,888,179],function(){return e(e.s=7032)}),_N_E=e.O()}]);