"use strict";
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 7520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fr": () => (/* binding */ saveToken),
/* harmony export */   "HM": () => (/* binding */ LogInmaintain),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "sv": () => (/* binding */ userSlice),
/* harmony export */   "uX": () => (/* binding */ LogIn)
/* harmony export */ });
/* unused harmony export DataClear */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_cookiesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5067);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    isLoggingIn: false,
    isSuccess: false,
    isLoginError: "",
    isClearError: "",
    isLoggedIn: false,
    userData: {
        message: "",
        data: {
            token: "",
            refreshToken: "",
            memberInfo: {
                pid: 0,
                nickName: "",
                profileImg: "",
                address: "",
                email: "",
                phone: 0,
                regiDate: "",
                role: ""
            }
        }
    }
};
const LogIn = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/logIn", async (data)=>{
    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: data ? JSON.stringify(data) : null,
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
});
const LogInmaintain = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/maintain", async (data)=>{
    try {
        const response = await fetch(`/api/auth/login-check`, {
            method: "GET",
            body: null,
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                authorization: `bearer ${data.token}`
            }
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
});
const DataClear = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/Clear", async (data)=>{
    const response = await fetch("/api/member", {
        method: "DELETE"
    });
    const responseStatus = await response.status;
    console.log(responseStatus);
});
const saveToken = (token, refreshToken, id)=>{
    const today = new Date();
    // today.setDate(today.getDate() + 1); // 하루
    today.setMinutes(today.getMinutes() + 1); // 30분
    if (token === null) {
        console.log("token이 없습니다");
    } else {
        (0,_util_cookiesController__WEBPACK_IMPORTED_MODULE_1__/* .setCookie */ .d8)("token", token, {
            expires: today
        });
        localStorage.setItem("refresh", refreshToken);
        localStorage.setItem("id", id);
    }
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: initialState,
    reducers: {
        logout: (state, action)=>{
            state.isLoggedIn = false;
            state.isSuccess = false;
            state.isLoggingIn = false;
            state.isError = "";
            state.userData = null;
            (0,_util_cookiesController__WEBPACK_IMPORTED_MODULE_1__/* .removeCookie */ .nJ)("token");
            localStorage.removeItem("refresh");
            localStorage.removeItem("id");
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(LogIn.fulfilled, (state, action)=>{
            state.isLoggedIn = true;
            state.isSuccess = true;
            state.userData = action.payload;
            saveToken(action.payload.data.token, action.payload.data.refreshToken, action.payload.data.memberInfo.pid);
        }).addCase(LogIn.rejected, (state, action)=>{
            state.isLoginError = action.error;
            state.isSuccess = false;
            state.isLoggedIn = false;
        });
        builder.addCase(LogInmaintain.fulfilled, (state, action)=>{
            if (action.payload.data.memberInfo) {
                state.isLoggedIn = true;
            } else {
                state.isLoggedIn = false;
            }
            state.userData.data.memberInfo = action.payload.data.memberInfo;
        }).addCase(LogInmaintain.rejected, (state, action)=>{
            state.isLoginError = action.error;
            state.isSuccess = false;
            state.isLoggedIn = false;
        });
        builder.addCase(DataClear.fulfilled, (state, action)=>{
            state.isLoggedIn = false;
            state.isSuccess = false;
            state.isLoggingIn = false;
            state.isError = "";
            state.userData = null;
        }).addCase(DataClear.rejected, (state, action)=>{
            state.isClearError = action.error;
        });
        builder.addMatcher((action)=>{
            return action.type.includes("/pending");
        }, (state, action)=>{
            state.isLoggingIn = true;
        }).addMatcher((action)=>{
            return action.type.includes("/fulfilled" || 0);
        }, (state, action)=>{
            state.isLoggingIn = false;
        });
    }
});
const { logout  } = userSlice.actions;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "nJ": () => (/* binding */ removeCookie)
/* harmony export */ });
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_0__.Cookies();
const setCookie = (name, value, option)=>{
    return cookies.set(name, value, option);
};
const getCookie = (name)=>{
    return cookies.get(name);
};
const removeCookie = (name)=>{
    return cookies.remove(name);
};


/***/ })

};
;