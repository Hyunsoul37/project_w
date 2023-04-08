"use strict";
exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 6098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1": () => (/* binding */ wineSlice),
/* harmony export */   "GJ": () => (/* binding */ GetList),
/* harmony export */   "qb": () => (/* binding */ GetCount)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoadding: true,
    isSuccess: false,
    ListErrormsg: "",
    CountErrormsg: "",
    pageNum: -1,
    data: [
        {
            pid: -1,
            korName: "",
            engName: "",
            price: 0,
            type: 1,
            body: 1,
            acidity: 1,
            tannin: 1,
            sweet: 1,
            alcohol: "",
            country: "",
            region: "",
            desc: "",
            starPoint: 0,
            recommendedSnack: "",
            grapeVariety: "",
            like: false
        }
    ]
};
const GetList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("wine/GetList", async (data)=>{
    const id = localStorage.getItem("id");
    try {
        const response = await fetch(`/api/product/wine/${id === "null" ? 0 : id}/search${data.queryurl}`, {
            method: "GET",
            body: null,
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    } catch (err1) {
        console.log(err1);
    }
});
const GetCount = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("wine/GetCount", async (data)=>{
    try {
        const response = await fetch(`/api/product/wine/count${data.counturl}
    `, {
            method: "GET",
            body: null,
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(err);
    }
});
const wineSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wine",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetList.pending, (state, action)=>{
            state.isLoadding = true;
        }).addCase(GetList.fulfilled, (state, action)=>{
            state.isLoadding = false;
            state.isSuccess = true;
            state.data = action.payload.data;
        }).addCase(GetList.rejected, (state, action)=>{
            state.isSuccess = false;
            state.ListErrormsg = action.error;
        });
        builder.addCase(GetCount.fulfilled, (state, action)=>{
            state.pageNum = action.payload.data;
        }).addCase(GetCount.rejected, (state, action)=>{
            state.CountErrormsg = action.error;
        });
    }
});


/***/ })

};
;