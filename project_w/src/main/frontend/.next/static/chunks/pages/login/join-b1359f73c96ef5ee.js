(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{7085:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/join",function(){return n(1984)}])},2987:function(e,t,n){"use strict";var r=n(5893),a=n(5665),i=n.n(a),s=n(1163);t.Z=function(e){var t=(0,s.useRouter)();return(0,r.jsxs)("div",{className:i().formWrapper,children:[(0,r.jsx)("form",{className:i().form,onSubmit:e.onsubmit,children:e.children}),e.isLogin&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{id:"idsave",type:"checkbox"}),(0,r.jsx)("label",{htmlFor:"idsave",children:(0,r.jsx)("span",{children:"아이디저장"})}),(0,r.jsx)("span",{onClick:function(){return t.push({pathname:"/login/join",query:{returnUrl:e.returnUrl}},"/login/join")},children:"SignUp"})]})]})}},1984:function(e,t,n){"use strict";n.r(t),n.d(t,{passwordreg:function(){return m}});var r=n(7568),a=n(828),i=n(655),s=n(5893),u=n(7294),l=n(9749),o=n(2987),c=n(1608),p=n.n(c),h=n(8606),d={"Content-Type":"application/json;charset=UTF-8"},f=/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,m=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,x=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;t.default=function(){var e,t,n=(0,u.useRef)(null),c=(0,u.useRef)(null),j=(0,l.Z)().sendRequestData,g=(0,a.Z)((0,u.useState)(""),2),_=g[0],Z=g[1],v=(0,a.Z)((0,u.useState)(""),2),S=v[0],y=v[1],N=(0,a.Z)((0,u.useState)(""),2),b=N[0],w=N[1],k=(0,a.Z)((0,u.useState)(""),2),C=k[0],F=k[1],A=(0,a.Z)((0,u.useState)(""),2),T=A[0],z=A[1],W=(0,a.Z)((0,u.useState)(""),2),E=W[0],G=W[1],U=(0,a.Z)((0,u.useState)(""),2),$=U[0],D=U[1],I=(0,a.Z)((0,u.useState)(!1),2),R=I[0],B=I[1],O=(0,a.Z)((0,u.useState)(!1),2),P=O[0],X=O[1],q=(0,a.Z)((0,u.useState)(!1),2),L=q[0],Q=q[1],V=(0,a.Z)((0,u.useState)(!1),2),H=V[0],J=V[1],K=(0,a.Z)((0,u.useState)(!1),2),M=K[0],Y=K[1],ee=(0,a.Z)((0,u.useState)(!1),2),et=ee[0],en=ee[1],er=(0,a.Z)((0,u.useState)(""),2),ea=er[0],ei=er[1],es=(0,a.Z)((0,u.useState)(""),2),eu=es[0],el=es[1],eo=(0,a.Z)((0,u.useState)(""),2),ec=eo[0],ep=eo[1],eh=function(e){if(x.test(_)){el("아이디에는 특수문자를 사용할 수 없습니다."),B(!0),X(!0);return}!0===e.data.duplicate?(el("아이디 중복입니다."),B(!0)):B(!1),X(!0)},ed=function(e){if(x.test(C)){ei("닉네임에는 특수문자를 사용할 수 없습니다."),Y(!0),en(!0);return}!0===e.data.duplicate?(ei("닉네임 중복입니다."),Y(!0)):Y(!1),en(!0)},ef=(e=(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,j({url:"api/auth/id-check?id=".concat(_),type:"GET",data:null,header:{"Content-Type":"text/plain"},AfterGetData:eh})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)}),em=(t=(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,j({url:"api/auth/nickname-check?nickName=".concat(C),type:"GET",data:null,header:{"Content-Type":"text/plain"},AfterGetData:ed})];case 1:return e.sent(),[2]}})}),function(){return t.apply(this,arguments)});return(0,s.jsxs)("div",{className:p().formWrapper,children:[(0,s.jsx)(h.Z,{title:"Sign In"}),(0,s.jsx)("h1",{children:"SIGN IN"}),(0,s.jsx)("h4",{children:"회원정보 입력"}),(0,s.jsxs)(o.Z,{onsubmit:function(e){if(e.preventDefault(),R||M||H){alert("아이디 또는 닉네임이 중복이거나 이름, 아이디, 닉네임에 특수문자가 들어가 있습니다.");return}if(!m.test(S)){alert("비밀번호는 대소문자,숫자,특수문자를 포함한 8글자 이상이여야 합니다."),c.current.focus();return}if(!f.test(T)){alert("유효하지 않은 이메일입니다"),n.current.focus();return}j({url:"/api/auth/join",type:"POST",header:d,data:{id:_,nickName:C,password:S,name:b,email:T,address:E,phone:$},movepath:"/login"}),Z(""),F(""),y(""),w(""),z(""),G(""),D("")},isLogin:!1,children:[(0,s.jsxs)("label",{htmlFor:"name",children:["이름",(0,s.jsx)("input",{id:"name",type:"text",value:b||"",onChange:function(e){w(e.target.value)},onBlur:function(){x.test(b)?(ep("이름에는 특수문자를 사용할 수 없습니다."),J(!0)):J(!1),Q(!0)},placeholder:"사용자 이름"}),""!==b&&L&&H?(0,s.jsx)("p",{className:p().errormsg,children:ec}):null]}),(0,s.jsxs)("label",{htmlFor:"id",children:["아이디",(0,s.jsx)("input",{id:"id",type:"text",value:_||"",onChange:function(e){X(!1),Z(e.target.value)},onBlur:ef,placeholder:"사용자 아이디"}),""!==_&&P?R?(0,s.jsx)("p",{className:p().errormsg,children:eu}):(0,s.jsx)("p",{children:"사용가능한 아이디입니다."}):null]}),(0,s.jsxs)("label",{htmlFor:"nickName",children:["닉네임",(0,s.jsx)("input",{id:"nickName",type:"text",value:C||"",onChange:function(e){en(!1),F(e.target.value)},onBlur:em,placeholder:"사용자 닉네임"}),""!==C&&et?M?(0,s.jsx)("p",{className:p().errormsg,children:ea}):(0,s.jsx)("p",{children:"사용가능한 닉네임입니다."}):null]}),(0,s.jsxs)("label",{htmlFor:"password",children:["비밀번호",(0,s.jsx)("input",{id:"password",type:"password",ref:c,value:S||"",onChange:function(e){y(e.target.value)},placeholder:"비밀번호"})]}),(0,s.jsxs)("label",{htmlFor:"email",children:["이메일",(0,s.jsx)("input",{id:"email",type:"email",ref:n,value:T||"",onChange:function(e){z(e.target.value)}})]}),(0,s.jsxs)("label",{htmlFor:"phone",children:["휴대폰",(0,s.jsx)("input",{id:"phone",type:"tel",value:$||"",onChange:function(e){D(e.target.value)}})]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{children:"회원가입"})})]})]})}},8606:function(e,t,n){"use strict";var r=n(5893),a=n(9008),i=n.n(a);t.Z=function(e){var t=e.title;return(0,r.jsx)(i(),{children:(0,r.jsxs)("title",{children:["WAGU | ",t]})})}},5665:function(e){e.exports={form:"Form_form__xrazI",formWrapper:"Form_formWrapper__woVa3"}},1608:function(e){e.exports={formWrapper:"Signupform_formWrapper__XyFCv",errormsg:"Signupform_errormsg__Q4jSW"}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7085)}),_N_E=e.O()}]);