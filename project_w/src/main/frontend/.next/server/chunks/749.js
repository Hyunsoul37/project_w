"use strict";
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 9749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


// import { useNavigate } from 'react-router-dom';
const useFetch = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // const navigate = useNavigate();
    const sendRequestData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ({ url , type ="GET" , data , header , movepath =null , AfterGetData  })=>{
        // console.log(`useFetch에서 받은데이터
        // url:${url}
        // type: ${type}
        // data: ${data}
        // header Content-Type:${header["Content-Type"]}
        // movepath:${movepath}`);
        try {
            const response = await fetch(url, {
                method: type,
                body: data ? JSON.stringify(data) : null,
                headers: header
            });
            // if (!response.ok) {
            //   throw new Error('Request failed!');
            // }
            const responseData = await response.json();
            if (movepath) {
                router.push({
                    pathname: movepath
                }, movepath);
            }
            if (AfterGetData !== null || AfterGetData !== undefined) {
                AfterGetData(responseData);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);
    return {
        sendRequestData
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetch);


/***/ })

};
;