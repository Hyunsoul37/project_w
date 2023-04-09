(() => {
var exports = {};
exports.id = 203;
exports.ids = [203,557];
exports.modules = {

/***/ 753:
/***/ ((module) => {

// Exports
module.exports = {
	"Post": "Post_Post__FeBaB",
	"PostBackground": "Post_PostBackground__cWdOf",
	"section": "Post_section__hqVvO",
	"title": "Post_title__nWkPy",
	"postRole": "Post_postRole__vvxWn",
	"postContents": "Post_postContents__jUjyW",
	"imageBtn": "Post_imageBtn__z3xxG",
	"imagePlusBtn": "Post_imagePlusBtn__IBSYw",
	"imageinput": "Post_imageinput__6tEM3",
	"contents_title": "Post_contents_title__TXE_Z",
	"btnWrapper": "Post_btnWrapper__WAlnc",
	"winetype_Selector": "Post_winetype_Selector__XFUsH",
	"colorBlack": "Post_colorBlack__Hx6PR",
	"winetype_Selector_list": "Post_winetype_Selector_list__ceDEI",
	"active": "Post_active__iSS6Y",
	"unactive": "Post_unactive__kE_NB",
	"listActive": "Post_listActive__0yp75",
	"listUnactive": "Post_listUnactive__kDLHf",
	"modal": "Post_modal__LWfkV"
};


/***/ }),

/***/ 7367:
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
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(753);
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9883);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Winetype = [
    "레드",
    "화이트",
    "로제",
    "스파클링",
    "주정강화"
];
const Post = ({ reviewId , edit , ...rest })=>{
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.user);
    const TitlefileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const fileRefArr = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [starPoint, setstarPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [previewTitle, setPreviewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [titleimgUrl, setTitleimgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [titleImg, setTitleImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [addImg, setAddImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [previewImg, setPreviewImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [addimgUrl, setAddImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showType, setShowType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [filenum, setFilenum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [wineType, setwineType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [reviewTitle, setReviewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [wineName, setWineName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [winePrice, setwinePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [hashTag, setHashTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [removeImgUrl, setRemoveImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const modalref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [btndisable, setBtnDisable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (edit === "true" && rest.reviewImgs) {
            setstarPoint(rest.starPoint);
            setPreviewTitle(rest.reviewImgs[0]);
            setTitleimgUrl(rest.reviewImgs[0]);
            setPreviewImg(rest.reviewImgs.filter((c, index)=>c !== null && index !== 0));
            setAddImgUrl(rest.reviewImgs.filter((c, index)=>c !== null && index !== 0));
            setFilenum(rest.reviewImgs.filter((c, index)=>c !== null && index !== 0).length);
            setwineType(rest.wineType);
            setReviewTitle(rest.reviewTitle);
            setWineName(rest.wineName);
            setwinePrice(rest.winePrice);
            setDesc(rest.desc);
            setHashTag(rest.hashTag.join(","));
        }
    }, [
        edit
    ]);
    const OnClickImageUploadBtn = (e)=>{
        e.stopPropagation();
        TitlefileRef.current?.click();
    };
    const PreviewTitleImage = (e)=>{
        if (e.target.files != null) {
            const imageFile = e.target.files[0];
            setTitleImg(imageFile);
            if (imageFile && imageFile.type.substring(0, 5) === "image") {
                const reader = new FileReader();
                reader.onload = ()=>{
                    if (edit === "true") {
                        setRemoveImgUrl([
                            ...removeImgUrl,
                            titleimgUrl
                        ]);
                        setTitleimgUrl(null);
                    }
                    setPreviewTitle(reader.result);
                };
                reader.readAsDataURL(imageFile);
            }
        }
    };
    const PreviewAddImage = (e, id)=>{
        if (e.target.files !== null) {
            const imageFile = e.target.files[0];
            const imgarr = [
                ...addImg
            ];
            if (imgarr.length > id + 1) {
                const updateimg = imgarr.map((img, index)=>index === id ? imageFile : img);
                setAddImg(updateimg);
            } else {
                imgarr.push(imageFile);
                setAddImg(imgarr);
            }
            if (edit === "true") {
                setRemoveImgUrl([
                    ...removeImgUrl,
                    addimgUrl[id]
                ]);
                if (addimgUrl) {
                    let tmp = [
                        ...addimgUrl
                    ];
                    let filterarr = tmp.filter((data, index)=>id !== index);
                    setAddImgUrl([
                        ...filterarr
                    ]);
                }
            }
            if (imageFile && imageFile.type.substring(0, 5) === "image") {
                const reader = new FileReader();
                reader.onload = ()=>{
                    if (previewImg) {
                        const tmp = [
                            ...previewImg
                        ];
                        tmp[id] = reader.result;
                        setPreviewImg(tmp);
                    }
                };
                reader.readAsDataURL(imageFile);
            }
        }
    };
    const OnClickAddImageUploadBtn = (e, id)=>{
        e.stopPropagation();
        fileRefArr.current[id]?.click();
    };
    const removeImg = (removenum, e)=>{
        e.stopPropagation();
        setRemoveImgUrl([
            ...removeImgUrl,
            previewImg[removenum]
        ]);
        const filterarr = previewImg.filter((c, index)=>index !== removenum);
        setPreviewImg(filterarr);
        setAddImgUrl(filterarr);
        setFilenum(filterarr.length);
    };
    const ImageUploadFile = ()=>{
        let filearr = [];
        for(let i = 0; i < filenum; i++){
            filearr.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imageBtn),
                        onClick: (e)=>OnClickAddImageUploadBtn(e, i),
                        children: previewImg[i] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: previewImg[i]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    onClick: (e)=>removeImg(i, e),
                                    children: "X"
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                color: "white",
                                marginBottom: "0px"
                            },
                            children: "image"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imageinput),
                        ref: (e)=>fileRefArr.current[i] = e,
                        name: "image",
                        id: "image",
                        type: "file",
                        accept: "image/*",
                        onChange: (e)=>PreviewAddImage(e, i)
                    })
                ]
            }));
        }
        return filearr;
    };
    const FilterTypeHandler = (type)=>()=>{
            setwineType(type);
            setShowType(false);
        };
    const OnClickSubmitBtn = async (e)=>{
        e.preventDefault();
        setBtnDisable(true);
        if ((reviewTitle === "" || previewTitle === null || wineType === "" || starPoint === 0 || wineName === "" || desc === "") && !edit) {
            alert("필수 정보는 다 입력해야합니다.");
        }
        const formdata = new FormData();
        if (edit === "true") {
            console.log(titleimgUrl);
            let reviewimg = titleimgUrl !== "null" ? [
                titleimgUrl,
                ...addimgUrl
            ] : [
                ...addimgUrl
            ];
            if (reviewimg.length < 5) {
                for(let i = reviewimg.length; i < 5; i++){
                    reviewimg.push(null);
                }
            }
            formdata.append("review", JSON.stringify({
                reviewId: reviewId,
                reviewTitle: reviewTitle,
                wineType: wineType,
                wineName: wineName,
                winePrice: winePrice,
                starPoint: starPoint,
                desc: desc,
                writerId: user.userData.data.memberInfo.pid,
                hashTag: hashTag.split(",")[0] === "" ? [] : hashTag.split(","),
                reviewImgs: reviewimg
            }));
            if (removeImgUrl.length > 0) {
                formdata.append("deleteUrl", removeImgUrl.toString());
            }
        } else {
            formdata.append("review", JSON.stringify({
                reviewTitle: reviewTitle,
                wineType: wineType,
                wineName: wineName,
                winePrice: winePrice,
                starPoint: starPoint,
                desc: desc,
                writerId: user.userData.data.memberInfo.pid,
                hashTag: hashTag.split(",")[0] === "" ? [] : hashTag.split(",")
            }));
        }
        if (titleImg) {
            formdata.append("files", titleImg);
        }
        addImg.map((data)=>formdata.append("files", data));
        (0,axios__WEBPACK_IMPORTED_MODULE_4__["default"])({
            method: `${edit === "true" ? "put" : "post"}`,
            url: "/api/community/review",
            data: formdata,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((result)=>{
            modalref.current?.showModal();
            setShowModal(true);
        }).catch((err)=>{
            console.log(err);
        });
    };
    const OffModal = ()=>{
        modalref.current?.close();
        setShowModal(false);
        router.push({
            pathname: "/community"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().PostBackground),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "maxframe",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().Post),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "커뮤니티 작성 가이드"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "원활한 커뮤니티 작성을 위해 꼭 확인해주세요"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postRole),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "간단한 자기 소개 후 와인에 관한 이야기를 최대한 자세하게 들려주세요.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    color: "#B0B0B0",
                                                    marginLeft: "15px"
                                                },
                                                children: "ex) 당도는 낮은 편이지만 제 입에는 달게 느껴졌습니다..."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "사진 첨부 시 용량은 장당 최대 20MB까지 업로드할 수 있고, jpg, png, gif 포맷을 지원합니다."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "사진은 최대 5장까지 등록 가능합니다."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "글 작성과 이미지 업로드 시 , 타인의 지식재산권을 침해하지 않도록 유의해주세요."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "필수 정보 입력"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "와인 정보를 확인하는데 꼭 필요한 정보이니 최대한 꼼꼼하게 작성해주세요."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: "*"
                                            }),
                                            "표시가 있는 칸은 필수 입력 값 입니다."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContents),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().contents_title),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        "제목 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    id: "title",
                                                    type: "text",
                                                    value: reviewTitle,
                                                    onChange: (e)=>setReviewTitle(e.target.value),
                                                    placeholder: "게시글 제목을 입력해주세요."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().contents_titleImage),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                            children: [
                                                                "대표이미지 ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        color: "red"
                                                                    },
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                fontSize: "13px",
                                                                color: "var(--primary)"
                                                            },
                                                            children: "(최대 20MB)"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imageBtn),
                                                    onClick: OnClickImageUploadBtn,
                                                    children: previewTitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: previewTitle
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            color: "white",
                                                            marginBottom: "0px"
                                                        },
                                                        children: "image"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imageinput),
                                                    ref: TitlefileRef,
                                                    name: "image",
                                                    id: "image",
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: PreviewTitleImage
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().contents_titleImage),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: "추가이미지"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                fontSize: "13px",
                                                                color: "var(--primary)"
                                                            },
                                                            children: "(1장당 최대 20MB)"
                                                        })
                                                    ]
                                                }),
                                                ImageUploadFile().map((c, index)=>c),
                                                filenum < 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().imagePlusBtn),
                                                    onClick: ()=>setFilenum(filenum + 1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            color: "#a6a6a6",
                                                            marginBottom: "0px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlinePlus, {})
                                                    })
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: showType ? (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().listActive) : (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().listUnactive),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        "와인타입 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().winetype_Selector),
                                                            onClick: ()=>setShowType(!showType),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: wineType === "" ? "" : (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().colorBlack),
                                                                    children: wineType === "" ? "와인타입을 선택해 주세요" : wineType
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineDown, {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: [
                                                                (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().winetype_Selector_list),
                                                                showType ? (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().active) : (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().unactive)
                                                            ].join(" "),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                children: Winetype.map((type, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        onClick: FilterTypeHandler(type),
                                                                        children: type
                                                                    }, type))
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "구매가격"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "number",
                                                    placeholder: "구매가격을 입력해주세요.",
                                                    value: winePrice === 0 ? "" : winePrice,
                                                    onChange: (e)=>setwinePrice(Number(e.target.value))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().contents_wineinfo),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        "와인명 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "와인명을 입력해주세요.",
                                                    value: wineName,
                                                    onChange: (e)=>setWineName(e.target.value)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "해시태그"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "해시태그는 콤마(,)로 구분해주세요.",
                                                    value: hashTag,
                                                    onChange: (e)=>setHashTag(e.target.value)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().contents_wineStar),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        "와인별점 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    rating: starPoint,
                                                    starDimension: "25px",
                                                    starHoverColor: "#61002E",
                                                    starRatedColor: "#61002E",
                                                    changeRating: (rating)=>setstarPoint(rating)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    children: [
                                                        "내용 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    placeholder: "내용을 입력해주세요.",
                                                    value: desc,
                                                    onChange: (e)=>setDesc(e.target.value)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnWrapper),
                                            children: edit === "true" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                disabled: btndisable,
                                                onClick: OnClickSubmitBtn,
                                                children: "수정"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                disabled: btndisable,
                                                onClick: OnClickSubmitBtn,
                                                children: "등록"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dialog", {
                        style: !showModal ? {
                            display: "none"
                        } : {
                            display: "flex"
                        },
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal),
                        ref: modalref,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "저장되었습니다."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: OffModal,
                                children: "확인"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _components_community_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7367);
/* harmony import */ var _util_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8606);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _components_community_Post__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _components_community_Post__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const post = ({ reviewId , edit , data  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_util_Seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "커뮤니티 새글작성"
            }),
            reviewId !== -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_Post__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                reviewId: reviewId,
                edit: edit,
                ...data
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_Post__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                reviewId: reviewId,
                edit: edit
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);
async function getServerSideProps({ query  }) {
    const { reviewId , edit  } = query;
    let data = {};
    console.log(edit);
    if (reviewId !== -1) {
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/community/review/detail?reviewId=${reviewId}`).then((res)=>{
            data = {
                ...res.data.data
            };
        }).catch((err)=>console.log(err));
    }
    return {
        props: {
            reviewId,
            edit,
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
            children: [
                "WAGU | ",
                title
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 9883:
/***/ ((module) => {

"use strict";
module.exports = require("react-star-ratings");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1084));
module.exports = __webpack_exports__;

})();