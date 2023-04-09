(() => {
var exports = {};
exports.id = 190;
exports.ids = [190,557];
exports.modules = {

/***/ 544:
/***/ ((module) => {

// Exports
module.exports = {
	"ReviewDetail": "ReviewDetail_ReviewDetail__gDEC3",
	"HeaderImage": "ReviewDetail_HeaderImage__UbkZC",
	"ReviewInfo": "ReviewDetail_ReviewInfo__iySpk",
	"writerInfo": "ReviewDetail_writerInfo__ThTGX",
	"ReviewEditBtn": "ReviewDetail_ReviewEditBtn__xTzSb",
	"ReviewLikeBtn": "ReviewDetail_ReviewLikeBtn__fOaHD",
	"active": "ReviewDetail_active__Mjqn1",
	"ReviewSliderWrapper": "ReviewDetail_ReviewSliderWrapper___XEVq",
	"ReviewSlider": "ReviewDetail_ReviewSlider__h0F8R",
	"ReviewSlider_three": "ReviewDetail_ReviewSlider_three__dV9EF",
	"notcenter": "ReviewDetail_notcenter__IWMEa",
	"ReviewContents": "ReviewDetail_ReviewContents__bngkW",
	"nextbtn": "ReviewDetail_nextbtn__quB1m",
	"prevbtn": "ReviewDetail_prevbtn__dQMT3"
};


/***/ }),

/***/ 8364:
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(544);
/* harmony import */ var _ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommunityComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3233);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommunityComment__WEBPACK_IMPORTED_MODULE_7__]);
_CommunityComment__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ReviewDetail = (props)=>{
    const [heart, setHeart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [curCard, setCurCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [changeFinish, setChangeFinish] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const ismobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)("(max-width:768px)");
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.user);
    const NextArrow = (props)=>{
        const { className , style , currentSlide , onClick , slideCount  } = props;
        const ClickHandler = ()=>{
            if (!changeFinish) {
                return;
            }
            setChangeFinish(false);
            if (currentSlide !== undefined && slideCount != undefined) {
                if (currentSlide < slideCount - 1) {
                    setCurCard(currentSlide + 1);
                } else {
                    setCurCard(0);
                }
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: [
                props.cssclassName,
                className
            ].join(" "),
            style: {
                ...style,
                display: "block"
            },
            onClick: (e)=>{
                ClickHandler();
                if (onClick) onClick(e);
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillCaretRight, {})
        });
    };
    const PrevArrow = (props)=>{
        const { className , style , currentSlide , onClick , slideCount  } = props;
        const ClickHandler = ()=>{
            if (!changeFinish) {
                return;
            }
            setChangeFinish(false);
            if (currentSlide != undefined && slideCount != undefined) {
                if (currentSlide > 0) {
                    setCurCard(currentSlide - 1);
                } else {
                    setCurCard(slideCount - 1);
                }
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: [
                props.cssclassName,
                className
            ].join(" "),
            style: {
                ...style,
                display: "block"
            },
            onClick: (e)=>{
                ClickHandler();
                if (onClick) onClick(e);
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillCaretLeft, {})
        });
    };
    const Settings_three = {
        initialSlide: 0,
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        draggable: false,
        touchMove: false,
        speed: 500,
        arrows: true,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
            cssclassName: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().nextbtn)
        }),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
            cssclassName: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().prevbtn)
        }),
        beforeChange: (currentSlide, nextSlide)=>{
            setCurCard(nextSlide);
        },
        afterChange: ()=>{
            setChangeFinish(true);
        }
    };
    const Settings_one = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        touchMove: false,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
            cssclassName: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().nextbtn)
        }),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
            cssclassName: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().prevbtn)
        }),
        beforeChange: (currentSlide, nextSlide)=>{
            setCurCard(nextSlide);
        }
    };
    let setting;
    if (image.length >= 3) {
        if (ismobile) {
            setting = {
                ...Settings_three,
                slidesToShow: 1
            };
        } else {
            setting = Settings_three;
        }
    } else {
        setting = Settings_one;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const newimg = props.reviewImgs.filter((c)=>c !== null);
        setImage(newimg);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "maxframe",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewDetail),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "COMMUNITY"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "와구 회원들과의 즐거운 와인 이야기"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().HeaderImage),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: props.reviewImgs[0],
                            alt: "HeaderImage"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: props.reviewTitle
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewInfo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "와인타입"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: props.wineType
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "와인명"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            id: "winename",
                                            children: props.wineName
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "구매가격"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: props.winePrice === 0 ? "-" : props.winePrice
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "해시태그"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            colSpan: 5,
                                            children: props.hashTag.map((tag, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: tag
                                                }, `tag_${idx}`))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().writerInfo),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: props.profileimg === undefined ? `/images/default_profile.png` : props.profileimg,
                            alt: "profileImg"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: props.writerNickName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: props.regiDate.split("T")[0]
                                })
                            ]
                        }),
                        user.isLoggedIn && props.writerId === user.userData.data.memberInfo.pid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewEditBtn),
                            onClick: ()=>router.push({
                                    pathname: "/community/post",
                                    query: {
                                        reviewId: props.reviewId,
                                        edit: true
                                    }
                                }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "수정하기"
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: [
                                (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewLikeBtn),
                                heart ? (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().active) : ""
                            ].join(" "),
                            onClick: ()=>setHeart(!heart),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHeart, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "좋아요"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewSliderWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...setting,
                        className: image.length >= 3 ? (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewSlider_three) : (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewSlider),
                        children: image.map((img, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: img,
                                src: img,
                                className: idx === curCard ? "" : (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().notcenter)
                            }, `reviewimg_${idx}`))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ReviewDetail_module_css__WEBPACK_IMPORTED_MODULE_11___default().ReviewContents),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: props.desc
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommunityComment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    reviewId: props.reviewId
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2271:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_community_ReviewDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8364);
/* harmony import */ var _components_dummydata_review_list_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6827);
/* harmony import */ var _util_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8606);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_community_ReviewDetail__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_community_ReviewDetail__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CommunityDetail = ({ data  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_util_Seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: `${data.writerNickName}님의 포스팅`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_ReviewDetail__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...data
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommunityDetail);
async function getServerSideProps({ query  }) {
    const { id  } = query;
    let data;
    await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`http://ec2-15-164-230-113.ap-northeast-2.compute.amazonaws.com:8080/api/community/review/detail?reviewId=${id}`).then((res)=>data = {
            ...res.data.data
        }).catch((err)=>console.log(err));
    return {
        props: {
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

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

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

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [878,827], () => (__webpack_exec__(2271)));
module.exports = __webpack_exports__;

})();