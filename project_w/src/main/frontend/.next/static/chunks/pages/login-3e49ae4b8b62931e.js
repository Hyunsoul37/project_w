(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2070:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(2038)}])},2987:function(n,e,r){"use strict";var t=r(5893),i=r(5665),s=r.n(i),o=r(1163);e.Z=function(n){var e=(0,o.useRouter)();return(0,t.jsxs)("div",{className:s().formWrapper,children:[(0,t.jsx)("form",{className:s().form,onSubmit:n.onsubmit,children:n.children}),n.isLogin&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{id:"idsave",type:"checkbox"}),(0,t.jsx)("label",{htmlFor:"idsave",children:(0,t.jsx)("span",{children:"아이디저장"})}),(0,t.jsx)("span",{onClick:function(){return e.push({pathname:"/login/join",query:{returnUrl:n.returnUrl}},"/login/join")},children:"SignUp"})]})]})}},2038:function(n,e,r){"use strict";r.r(e);var t=r(828),i=r(5893),s=r(7294),o=r(9473),u=r(1163),a=r(7520),c=r(2987),l=r(2237),p=r.n(l),f=r(8606);e.default=function(){var n=(0,u.useRouter)(),e=(0,t.Z)((0,s.useState)(""),2),r=e[0],l=e[1],d=(0,t.Z)((0,s.useState)(""),2),h=d[0],g=d[1],m=(0,o.v9)(function(n){return n.user}),x=(0,o.I0)();return(0,s.useEffect)(function(){var e=sessionStorage.getItem("prevPath"),r=sessionStorage.getItem("prevPrevPath");m.isLoggedIn&&(null!==e|null!==r?"/login/join"!==e?n.push(e):n.push(r):n.push("/"))},[m.isLoggedIn]),(0,i.jsxs)("div",{className:p().formWrapper,children:[(0,i.jsx)(f.Z,{title:"login"}),(0,i.jsx)("h4",{children:"LOGIN"}),(0,i.jsxs)(c.Z,{onsubmit:function(n){n.preventDefault(),x((0,a.uX)({id:r,password:h})),l(""),g("")},isLogin:!0,children:[(0,i.jsx)("input",{id:"id",type:"text",value:r||"",onChange:function(n){l(n.target.value)},placeholder:"사용자 아이디"}),(0,i.jsx)("input",{id:"password",type:"password",value:h||"",onChange:function(n){g(n.target.value)},placeholder:"비밀번호"}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{children:"Login"})})]})]})}},8606:function(n,e,r){"use strict";var t=r(5893),i=r(9008),s=r.n(i);e.Z=function(n){var e=n.title;return(0,t.jsx)(s(),{children:(0,t.jsxs)("title",{children:["WAGU | ",e]})})}},5665:function(n){n.exports={form:"Form_form__xrazI",formWrapper:"Form_formWrapper__woVa3"}},2237:function(n){n.exports={formWrapper:"Login_formWrapper__1YEhh"}},9008:function(n,e,r){n.exports=r(3121)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=2070)}),_N_E=n.O()}]);