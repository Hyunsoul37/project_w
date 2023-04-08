exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 1847:
/***/ ((module) => {

// Exports
module.exports = {
	"CommentInput": "CommentInput_CommentInput__bosiT",
	"CommentInput_sub": "CommentInput_CommentInput_sub__uSa3Z",
	"CommentInput_Input": "CommentInput_CommentInput_Input__rQaUr",
	"CommentInput_subInput": "CommentInput_CommentInput_subInput__S0BVQ",
	"like": "CommentInput_like__ZAON1",
	"modal": "CommentInput_modal__9e1JX"
};


/***/ }),

/***/ 9097:
/***/ ((module) => {

// Exports
module.exports = {
	"CommentList": "CommentList_CommentList__nzmv_",
	"modal": "CommentList_modal__Qw_Zj",
	"firstComment": "CommentList_firstComment__TacWJ",
	"firstComment_Info": "CommentList_firstComment_Info__f5Kbn",
	"commentText": "CommentList_commentText__tfEda",
	"SecondCommentWrapper": "CommentList_SecondCommentWrapper__LjKt9",
	"SecondComment": "CommentList_SecondComment__xqC5K",
	"SecondComment_Info": "CommentList_SecondComment_Info__W265J",
	"SecondComment_commentText": "CommentList_SecondComment_commentText__H3mKE",
	"SecondComment_contents": "CommentList_SecondComment_contents__zyRJk",
	"like": "CommentList_like__N1925"
};


/***/ }),

/***/ 2551:
/***/ ((module) => {

// Exports
module.exports = {
	"CommunityComment": "CommunityComment_CommunityComment__X06pa",
	"InputWrapper": "CommunityComment_InputWrapper__gUpNM",
	"CommentList": "CommunityComment_CommentList__XXMgs"
};


/***/ }),

/***/ 3092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CommunityComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3233);
/* harmony import */ var _CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1847);
/* harmony import */ var _CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommunityComment__WEBPACK_IMPORTED_MODULE_4__]);
_CommunityComment__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const CommentInput = ({ isMainInput , subCommentuser , reviewId , AddfirstComment , AddSecondComment  })=>{
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const CommentSubmitHandler = ()=>{
        if (user.isLoggedIn === true) {
            if (isMainInput) {
                AddfirstComment({
                    reviewId: reviewId,
                    commentId: 0,
                    writerId: user.userData.data.memberInfo.pid,
                    writerNick: user.userData.data.memberInfo.nickName ? user.userData.data.memberInfo.nickName : "임시",
                    comment: comment,
                    writerProfile: user.userData.data.memberInfo.profileImg === undefined ? "null" : user.userData.data.memberInfo.profileImg,
                    regiDate: (0,_util_util__WEBPACK_IMPORTED_MODULE_5__/* .getDate */ ._3)(),
                    like: false,
                    child: []
                });
                setComment("");
            } else {
                AddSecondComment(comment, 0, subCommentuser);
                setComment("");
            }
        } else {
            ref.current?.showModal();
            setShowModal(true);
        }
    };
    const OffModal = ()=>{
        ref.current?.close();
        setShowModal(false);
        router.push({
            pathname: "/login",
            query: {
                returnUrl: router.asPath
            }
        }, "/login");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: isMainInput ? (_CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6___default().CommentInput) : (_CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6___default().CommentInput_sub),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: user.isLoggedIn && user.userData !== null && user.userData.data.memberInfo.profileImg !== "" && user.userData.data.memberInfo.profileImg !== undefined ? user.userData.data.memberInfo.profileImg : _CommunityComment__WEBPACK_IMPORTED_MODULE_4__/* .defaultimg */ .c
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6___default().CommentInput_Input),
                children: [
                    isMainInput ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 : )",
                        value: comment,
                        onChange: (e)=>setComment(e.target.value)
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6___default().CommentInput_subInput),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: subCommentuser ? `@${subCommentuser}` : " "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                value: comment,
                                autoFocus: true,
                                onChange: (e)=>setComment(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: CommentSubmitHandler,
                        children: "입력"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dialog", {
                style: !showModal ? {
                    display: "none"
                } : {
                    display: "flex"
                },
                className: (_CommentInput_module_css__WEBPACK_IMPORTED_MODULE_6___default().modal),
                ref: ref,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "로그인이 필요한 기능입니다."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: OffModal,
                        children: "확인"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _CommentInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3092);
/* harmony import */ var _CommentList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9097);
/* harmony import */ var _CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CommunityComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentInput__WEBPACK_IMPORTED_MODULE_4__, _CommunityComment__WEBPACK_IMPORTED_MODULE_5__]);
([_CommentInput__WEBPACK_IMPORTED_MODULE_4__, _CommunityComment__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CommentList = (props)=>{
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.user);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [subNickName, setSubNickName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [subWriterId, setSubWriterId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);
    const [CommentNum, setCommentNum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-10);
    const [subCommentNum, setsubCommentNum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-10);
    const SetCommentInput = (index)=>{
        setCommentNum(index);
        setsubCommentNum(-10);
        props.ChangeSubComment(-1);
        props.ChangeComment(index);
    };
    const SetSubCommentInput = (nickname, index)=>{
        setsubCommentNum(index);
        setCommentNum(-10);
        props.ChangeSubComment(index);
        props.ChangeComment(-1);
        setSubNickName(nickname);
    };
    const CommentInputHandler = (index, tagId)=>()=>{
            if (props.curCommentnumber !== -1 || props.cursubCommentnumber !== -1) {
                if (window.confirm("작성중인 댓글이 있습니다. 댓글 전환 하시겠습니까?")) {
                    SetCommentInput(index);
                    setSubWriterId(tagId);
                }
            } else {
                if (user.isLoggedIn === true) {
                    SetCommentInput(index);
                    setSubWriterId(tagId);
                } else {
                    ref.current?.showModal();
                    setShowModal(true);
                }
            }
        };
    const SubCommentInputHandler = (nickname, index, tagId)=>()=>{
            if (props.curCommentnumber !== -1 || props.cursubCommentnumber !== -1) {
                if (window.confirm("작성중인 댓글이 있습니다. 댓글 전환 하시겠습니까?")) {
                    SetSubCommentInput(nickname, index);
                    setSubWriterId(tagId);
                }
            } else {
                if (user.isLoggedIn === true) {
                    SetSubCommentInput(nickname, index);
                    setSubWriterId(tagId);
                } else {
                    ref.current?.showModal();
                    setShowModal(true);
                }
            }
        };
    const OffModal = ()=>{
        ref.current?.close();
        setShowModal(false);
        router.push({
            pathname: "/login",
            query: {
                returnUrl: router.asPath
            }
        }, "/login");
    };
    const firstCommentLikeHandler = (id)=>()=>{
            if (user.isLoggedIn === true) {
                props.firstCommentLikeHandler(id);
            } else {
                ref.current?.showModal();
                setShowModal(true);
            }
        };
    const SecondCommentLikeHandler = (secondid)=>()=>{
            if (user.isLoggedIn === true) {
                props.SecondCommentLikeHandler(secondid);
            } else {
                ref.current?.showModal();
                setShowModal(true);
            }
        };
    const AddSecondComment = (comment, commentId, tagName)=>{
        props.AddSecondComment(props.commentId, {
            reviewId: props.reviewId,
            parentId: props.commentId,
            commentId: commentId,
            writerId: user.userData.data.memberInfo.pid,
            writerNick: user.userData.data.memberInfo.nickName,
            comment: comment,
            writerProfile: user.userData.data.memberInfo.profileImg === undefined ? "null" : user.userData.data.memberInfo.profileImg,
            regiDate: (0,_util_util__WEBPACK_IMPORTED_MODULE_6__/* .getDate */ ._3)(),
            like: false,
            tagWriterNick: tagName,
            tagWriterId: subWriterId
        });
        setCommentNum(-10);
        setsubCommentNum(-10);
        props.ChangeComment(-1);
        props.ChangeSubComment(-1);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().CommentList),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().firstComment),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().firstComment_Info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: props.writerProfile !== ( true && null) ? props.writerProfile : _CommunityComment__WEBPACK_IMPORTED_MODULE_5__/* .defaultimg */ .c
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: props.writerNick
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentText),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: props.comment
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: props.regiDate.split("T")[0]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: props.like ? (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().like) : "",
                                        onClick: firstCommentLikeHandler(props.commentId),
                                        children: "♥ 좋아요"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        onClick: CommentInputHandler(props.commentId, props.writerId),
                                        children: "답글달기"
                                    })
                                ]
                            })
                        ]
                    }),
                    props.curCommentnumber === CommentNum && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isMainInput: false,
                        reviewId: props.reviewId,
                        subCommentuser: props.writerNick,
                        AddSecondComment: AddSecondComment
                    })
                ]
            }),
            props.child?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().SecondCommentWrapper),
                        children: props.child.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().SecondComment),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().SecondComment_Info),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: c.writerProfile !== ( true && null) ? c.writerProfile : _CommunityComment__WEBPACK_IMPORTED_MODULE_5__/* .defaultimg */ .c
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: c.writerNick
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().SecondComment_commentText),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().SecondComment_contents),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            "@",
                                                            c.tagWriterNick
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: c.comment
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: c.regiDate.split("T")[0]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: c.like ? (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().like) : "",
                                                        onClick: SecondCommentLikeHandler(c.commentId),
                                                        children: "♥ 좋아요"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        onClick: SubCommentInputHandler(c.writerNick, c.commentId, c.writerId),
                                                        children: "답글달기"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }))
                    }),
                    props.cursubCommentnumber === subCommentNum && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isMainInput: false,
                        subCommentuser: subNickName,
                        reviewId: props.reviewId,
                        AddSecondComment: AddSecondComment
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dialog", {
                style: !showModal ? {
                    display: "none"
                } : {
                    display: "flex"
                },
                className: (_CommentList_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal),
                ref: ref,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "로그인이 필요한 기능입니다."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: OffModal,
                        children: "확인"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ defaultimg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8446);
/* harmony import */ var _CommentInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3092);
/* harmony import */ var _CommunityComment_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2551);
/* harmony import */ var _CommunityComment_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CommunityComment_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _util_cookiesController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5067);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentList__WEBPACK_IMPORTED_MODULE_1__, _CommentInput__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([_CommentList__WEBPACK_IMPORTED_MODULE_1__, _CommentInput__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const defaultimg = `/images/default_profile.png`;
const CommunityComment = ({ reviewId  })=>{
    const [commmentData, setCommentData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [activeCommentNum, setActiveCommentNum] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);
    const [activeSubCommentNum, setactiveSubCommentNum] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getCommentList();
    }, []);
    const getCommentList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        let commentList = [];
        await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`/api/comment?reviewId=${reviewId}`).then((res)=>{
            let tmp = res.data.data;
            commentList = tmp.map((c)=>c.child ? c : {
                    ...c,
                    child: []
                });
        }).catch((err)=>console.log(err));
        setCommentData({
            parent: commentList
        });
    }, [
        reviewId
    ]);
    const ChangeComment = (index)=>{
        setActiveCommentNum(index);
    };
    const ChangeSubComment = (index)=>{
        setactiveSubCommentNum(index);
    };
    const getToken = async ()=>{
        const token = (0,_util_cookiesController__WEBPACK_IMPORTED_MODULE_5__/* .getCookie */ .ej)("token");
        let authToken = "";
        if (token) {
            authToken = token;
        } else {
            const refreshToken = localStorage.getItem("refresh");
            const id = localStorage.getItem("id");
            const today = new Date();
            today.setMinutes(today.getMinutes() + 1);
            await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/auth/refresh", {
                pid: id,
                refreshToken: refreshToken
            }).then((res)=>{
                (0,_util_cookiesController__WEBPACK_IMPORTED_MODULE_5__/* .setCookie */ .d8)("token", res.data.data.reissueToken, {
                    expires: today
                });
                authToken = res.data.data.reissueToken;
            }).catch((err)=>console.log(err));
        }
        return authToken;
    };
    const AddFirstComment = async (data)=>{
        let token = await getToken().then((res)=>res);
        await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/comment", {
            reviewId: data.reviewId,
            comment: data.comment
        }, {
            headers: {
                Authorization: `bearer ${token}`
            }
        }).then((res)=>{
            let resCommentId = res.data.data;
            const commentlist = {
                ...commmentData
            };
            commentlist.parent.push({
                ...data,
                commentId: resCommentId
            });
            setCommentData(commentlist);
        }).catch((err)=>console.log(err));
    };
    const AddSecondComment = async (index, data)=>{
        let token = await getToken().then((res)=>res);
        await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/comment", {
            reviewId: data.reviewId,
            comment: data.comment,
            parentId: data.parentId,
            tagWriterId: data.tagWriterId
        }, {
            headers: {
                Authorization: `bearer ${token}`
            }
        }).then(()=>{
            const commentlist = {
                ...commmentData
            };
            commentlist?.parent?.map((comment)=>{
                comment.commentId === index ? {
                    ...comment,
                    child: comment.child.push(data)
                } : comment;
            });
            setCommentData(commentlist);
        }).catch((err)=>console.log(err));
    };
    const firstCommentLikeHandler = (id)=>{
        const editdata = commmentData?.parent.map((data)=>data.commentId === id ? {
                ...data,
                commentLike: data.like ? false : true
            } : data);
        if (editdata) {
            setCommentData({
                parent: editdata
            });
        }
    };
    const SecondCommentLikeHandler = (secondCommentid)=>{
        let tmp = {
            ...commmentData?.parent[0]
        };
        commmentData?.parent.map((data)=>data.child.map((secdata)=>{
                if (secdata.commentId === secondCommentid) {
                    secdata.like = !secdata.like;
                    tmp = {
                        ...data,
                        child: [
                            ...data.child
                        ]
                    };
                }
            }));
        const editdata = commmentData?.parent.map((data)=>data.commentId === tmp.commentId ? {
                ...tmp
            } : data);
        if (editdata) {
            setCommentData({
                parent: editdata
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CommunityComment_module_css__WEBPACK_IMPORTED_MODULE_6___default().CommunityComment),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CommunityComment_module_css__WEBPACK_IMPORTED_MODULE_6___default().InputWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    isMainInput: true,
                    reviewId: commmentData?.parent[0]?.reviewId ?? reviewId,
                    AddfirstComment: AddFirstComment
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CommunityComment_module_css__WEBPACK_IMPORTED_MODULE_6___default().CommentList),
                children: commmentData?.parent?.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        curCommentnumber: activeCommentNum,
                        cursubCommentnumber: activeSubCommentNum,
                        ChangeSubComment: ChangeSubComment,
                        ChangeComment: ChangeComment,
                        AddSecondComment: AddSecondComment,
                        firstCommentLikeHandler: firstCommentLikeHandler,
                        SecondCommentLikeHandler: SecondCommentLikeHandler,
                        ...data
                    }, `review_${index}`))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommunityComment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_3": () => (/* binding */ getDate),
/* harmony export */   "qJ": () => (/* binding */ drawStar)
/* harmony export */ });
/* unused harmony export GetReviewid */
const drawStar = (score, fill, emtpy)=>{
    let i = 0;
    let star = [];
    let num = Math.round(score);
    for(i = 0; i < num; i++){
        star.push(fill);
    }
    for(i = 0; i < 5 - num; i++){
        star.push(emtpy);
    }
    return star;
};
const getDate = ()=>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    if (month < 10) {
        month = `0${month}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    return `${year}.${month}.${day}`;
};
const GetReviewid = ()=>{
    let id = Math.random() * 1000000;
    return id;
};


/***/ }),

/***/ 5067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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