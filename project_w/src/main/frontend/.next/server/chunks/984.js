exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 8577:
/***/ ((module) => {

// Exports
module.exports = {
	"formWrapper": "Signupform_formWrapper__XyFCv",
	"errormsg": "Signupform_errormsg__Q4jSW"
};


/***/ }),

/***/ 1984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "passwordreg": () => (/* binding */ passwordreg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customHooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9749);
/* harmony import */ var _components_ui_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2987);
/* harmony import */ var _Signupform_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8577);
/* harmony import */ var _Signupform_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Signupform_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8606);






const url = "/api/auth/join";
const type = "POST";
const header = {
    "Content-Type": "application/json;charset=UTF-8"
};
const movepath = "/login";
const emailReg = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const passwordreg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const join = ()=>{
    const EmailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { sendRequestData: postData  } = (0,_customHooks_useFetch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [nickName, setnickName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isduplicate, setDuplicate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [iseditedId, setIseditedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isNickNameduplicate, setNickNameDuplicate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [iseditedNickName, setIseditedNickName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const submitHandler = (e)=>{
        e.preventDefault();
        if (isduplicate || isNickNameduplicate) {
            alert("아이디 또는 닉네임이 중복입니다.");
            return;
        }
        if (!passwordreg.test(password)) {
            alert("비밀번호는 대소문자,숫자,특수문자를 포함한 8글자 이상이여야 합니다.");
            passwordRef.current.focus();
            return;
        }
        if (!emailReg.test(email)) {
            alert("유효하지 않은 이메일입니다");
            EmailRef.current.focus();
            return;
        }
        postData({
            url: url,
            type: type,
            header: header,
            data: {
                id: id,
                nickName: nickName,
                password: password,
                name: name,
                email: email,
                address: address,
                phone: phone
            },
            movepath: movepath
        });
        setId("");
        setnickName("");
        setPassword("");
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
    };
    const IDDuplicateResponseMessage = (data)=>{
        if (data.data.duplicate === true) {
            setDuplicate(true);
        } else {
            setDuplicate(false);
        }
        setIseditedId(true);
    };
    const NickNameDuplicateResponseMessage = (data)=>{
        if (data.data.duplicate === true) {
            setNickNameDuplicate(true);
        } else {
            setNickNameDuplicate(false);
        }
        setIseditedNickName(true);
    };
    const OnCheckduplicateID = async ()=>{
        await postData({
            url: `api/auth/id-check?id=${id}`,
            type: "GET",
            data: null,
            header: {
                "Content-Type": "text/plain"
            },
            AfterGetData: IDDuplicateResponseMessage
        });
    };
    const OnCheckduplicateNickName = async ()=>{
        await postData({
            url: `api/auth/nickname-check?nickName=${nickName}`,
            type: "GET",
            data: null,
            header: {
                "Content-Type": "text/plain"
            },
            AfterGetData: NickNameDuplicateResponseMessage
        });
    };
    const ChangeIdHandler = (e)=>{
        setIseditedId(false);
        setId(e.target.value);
    };
    const ChangeNickNameHandler = (e)=>{
        setIseditedNickName(false);
        setnickName(e.target.value);
    };
    const ChangePasswordHandler = (e)=>{
        setPassword(e.target.value);
    };
    const ChangeNameHandler = (e)=>{
        setName(e.target.value);
    };
    const ChangeEmailHandler = (e)=>{
        setEmail(e.target.value);
    };
    const ChangeAddressHandler = (e)=>{
        setAddress(e.target.value);
    };
    const ChangePhoneHandler = (e)=>{
        setPhone(e.target.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Signupform_module_css__WEBPACK_IMPORTED_MODULE_5___default().formWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_util_Seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Sign In"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "SIGN IN"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: "회원정보 입력"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onsubmit: submitHandler,
                isLogin: false,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "name",
                        children: [
                            "이름",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "name",
                                type: "text",
                                value: name ? name : "",
                                onChange: ChangeNameHandler,
                                placeholder: "사용자 이름"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "id",
                        children: [
                            "아이디",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "id",
                                type: "text",
                                value: id ? id : "",
                                onChange: ChangeIdHandler,
                                onBlur: OnCheckduplicateID,
                                placeholder: "사용자 아이디"
                            }),
                            id !== "" && iseditedId ? isduplicate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_Signupform_module_css__WEBPACK_IMPORTED_MODULE_5___default().errormsg),
                                children: "아이디 중복입니다."
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "사용가능한 아이디입니다."
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "nickName",
                        children: [
                            "닉네임",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "nickName",
                                type: "text",
                                value: nickName ? nickName : "",
                                onChange: ChangeNickNameHandler,
                                onBlur: OnCheckduplicateNickName,
                                placeholder: "사용자 닉네임"
                            }),
                            nickName !== "" && iseditedNickName ? isNickNameduplicate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_Signupform_module_css__WEBPACK_IMPORTED_MODULE_5___default().errormsg),
                                children: "닉네임 중복입니다."
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "사용가능한 닉네임입니다."
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "password",
                        children: [
                            "비밀번호",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "password",
                                type: "password",
                                ref: passwordRef,
                                value: password ? password : "",
                                onChange: ChangePasswordHandler,
                                placeholder: "비밀번호"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "email",
                        children: [
                            "이메일",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "email",
                                type: "email",
                                ref: EmailRef,
                                value: email ? email : "",
                                onChange: ChangeEmailHandler
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "phone",
                        children: [
                            "휴대폰",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "phone",
                                type: "tel",
                                value: phone ? phone : "",
                                onChange: ChangePhoneHandler
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            children: "회원가입"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (join);


/***/ })

};
;