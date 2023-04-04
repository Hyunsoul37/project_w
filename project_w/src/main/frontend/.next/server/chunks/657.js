"use strict";
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 7657:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eR": () => (/* binding */ GetReview),
/* harmony export */   "j9": () => (/* binding */ NextGetReview),
/* harmony export */   "uP": () => (/* binding */ reviewSlice)
/* harmony export */ });
/* unused harmony exports TestGetReview, PushReview, selectReviews, selectStatus */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    isloadding: false,
    isSuccess: false,
    status: "loading",
    isError: "",
    post: [],
    TotalpageNum: 0
};
const NextGetReview = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("review/Addlist", async (curpage)=>{
    let newlist = [];
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/api/community/review?page=${curpage}`).then((res)=>{
        res.data.data.map((data)=>newlist.push(data));
    }).catch((err)=>console.log(err));
    return newlist;
});
const GetReview = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("review/get", async ()=>{
    const newlist = [];
    let pagenum = 0;
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/api/community/review?page=1`).then((res)=>{
        res.data.data.map((data)=>newlist.push(data));
    }).catch((err)=>console.log(err));
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/community/review/last-page").then((res)=>pagenum = res.data.data).catch((err)=>console.log(err));
    return {
        newlist,
        pagenum
    };
});
const reviewSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "review",
    initialState: initialState,
    reducers: {
        TestGetReview: (state, action)=>{
            state.post = action.payload;
        },
        PushReview: (state, action)=>{
            const arr = action.payload;
            state.post = [
                ...state.post,
                ...arr
            ];
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(GetReview.fulfilled, (state, action)=>{
            state.isloadding = false;
            state.isSuccess = true;
            state.post = action.payload.newlist;
            state.TotalpageNum = action.payload.pagenum;
        }).addCase(GetReview.rejected, (state, action)=>{
            state.status = "loading";
            state.isloadding = false;
            state.isSuccess = false;
            state.isError = action.error.message ? action.error.message : "";
        }).addCase(NextGetReview.pending, (state, action)=>{
            state.isloadding = true;
        }).addCase(NextGetReview.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.isloadding = false;
            const arr = action.payload;
            arr.map((data)=>state.post.push(data));
        }).addCase(NextGetReview.rejected, (state, action)=>{
            state.status = "failed";
            state.isloadding = false;
            state.isError = action.error.message ? action.error.message : "";
        });
    }
});
const { TestGetReview , PushReview  } = reviewSlice.actions;
const selectReviews = (state)=>state.review.post;
const selectStatus = (state)=>state.review.status;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;