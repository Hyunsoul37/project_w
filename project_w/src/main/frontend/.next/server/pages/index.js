(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 117:
/***/ ((module) => {

// Exports
module.exports = {
	"Banner": "Banner_Banner__MQX68"
};


/***/ }),

/***/ 7252:
/***/ ((module) => {

// Exports
module.exports = {
	"BestReviewwrapper": "BestReview_BestReviewwrapper__EjeOY",
	"BestReview": "BestReview_BestReview___54NT",
	"bestReviewCardWrapper": "BestReview_bestReviewCardWrapper__TNEMF",
	"card": "BestReview_card__mQNVA",
	"reviewimg": "BestReview_reviewimg__Hc1AQ",
	"reviewimg_Modal": "BestReview_reviewimg_Modal__qHlPV",
	"modalText": "BestReview_modalText__NQ27M"
};


/***/ }),

/***/ 9864:
/***/ ((module) => {

// Exports
module.exports = {
	"tablist": "RankProd_tablist__ah7cZ",
	"tablistinner": "RankProd_tablistinner__UBD5X",
	"active": "RankProd_active___NA_G",
	"rank_wrap": "RankProd_rank_wrap__mt_k9",
	"rankcard": "RankProd_rankcard__6LXXw",
	"txt_area": "RankProd_txt_area__XUM6t",
	"rank_txt": "RankProd_rank_txt__0_04x",
	"winename": "RankProd_winename__tlosS",
	"price": "RankProd_price__dhgr1",
	"tasty_area": "RankProd_tasty_area__R6PIO",
	"inner": "RankProd_inner__TqGY0",
	"smallWinename": "RankProd_smallWinename__fdzm_"
};


/***/ }),

/***/ 3108:
/***/ ((module) => {

// Exports
module.exports = {
	"sliderwrapper": "Selector_sliderwrapper__ylKLQ",
	"slider": "Selector_slider__7Hq02",
	"text": "Selector_text__rsNsx",
	"selector_wrap": "Selector_selector_wrap__WvCqc",
	"select": "Selector_select__hVUzN",
	"btn_area": "Selector_btn_area__5Gm_b"
};


/***/ }),

/***/ 7930:
/***/ ((module) => {

// Exports
module.exports = {
	"Card": "Card_Card__Nxu_I"
};


/***/ }),

/***/ 9500:
/***/ ((module) => {

// Exports
module.exports = {
	"Backdrop": "Modal_Backdrop__uehGg",
	"ModalWrap": "Modal_ModalWrap__uGWyR",
	"Modal": "Modal_Modal__f5XwC",
	"slide-down": "Modal_slide-down__lU_GU"
};


/***/ }),

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(117);
/* harmony import */ var _Banner_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);






const imageLoader = __webpack_require__(7765);
const bannerimg = [
    "/images/banner_1.png",
    "/images/banner_2.png",
    "/images/banner_3.png"
];
const Settings = {
    autoplay: true,
    infinite: true,
    draggable: false,
    speed: 3000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    arrows: false,
    touchMove: false
};
const Banner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
            ...Settings,
            className: (_Banner_module_css__WEBPACK_IMPORTED_MODULE_5___default().Banner),
            children: bannerimg.map((bannerimg, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    loader: imageLoader,
                    width: 100,
                    height: 100,
                    alt: "bannerimg",
                    src: bannerimg
                }, `banner_${idx}`))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 4946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_BestReview)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/home/BestReview.module.css
var BestReview_module = __webpack_require__(7252);
var BestReview_module_default = /*#__PURE__*/__webpack_require__.n(BestReview_module);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: ./src/components/ui/Modal.module.css
var Modal_module = __webpack_require__(9500);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./src/components/ui/Modal.js



const Backdrop = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Modal_module_default()).Backdrop,
        onClick: props.offModal
    });
};
const ModalOverlay = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Modal_module_default()).ModalWrap,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Modal_module_default()).Modal,
            children: props.children
        })
    });
};
const Modal = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_.jsx(Backdrop, {
                offModal: props.offModal
            }), document.getElementById("BackdropRoot")),
            /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_.jsx(ModalOverlay, {
                children: props.children
            }), document.getElementById("Modalroot"))
        ]
    });
};
/* harmony default export */ const ui_Modal = (Modal);

// EXTERNAL MODULE: ./src/components/ui/Card.module.css
var Card_module = __webpack_require__(7930);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./src/components/ui/Card.js


const Card = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: props.id,
        className: [
            (Card_module_default()).Card,
            props.className ? props.className : ""
        ].join(" "),
        onClick: (e)=>props.onClick(e),
        children: props.children
    });
};
/* harmony default export */ const ui_Card = (Card);

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/home/BestReview.tsx






const BestReview = (props)=>{
    const [ShowModal, setShowModal] = (0,external_react_.useState)(false);
    const [curModalNum, setcurModalNum] = (0,external_react_.useState)(-1);
    const [bestreviewArr, setbestreviewArr] = (0,external_react_.useState)(props.list);
    const OnModal = (idx)=>()=>{
            setShowModal(true);
            setcurModalNum(idx);
        };
    const OffModal = ()=>{
        setShowModal(false);
        setcurModalNum(-1);
    };
    const drawStar = (score)=>{
        let i = 0;
        let star = [];
        let num = Math.round(score);
        for(i = 0; i < num; i++){
            star.push(/*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillStar, {}));
        }
        for(i = 0; i < 5 - num; i++){
            star.push(/*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineStar, {}));
        }
        return star;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (BestReview_module_default()).BestReviewwrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "maxframe",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sub_tit__",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "와구 베스트 리뷰"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "BestReview"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: [
                    "maxframe",
                    (BestReview_module_default()).BestReview
                ].join(" "),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (BestReview_module_default()).bestReviewCardWrapper,
                    children: bestreviewArr.map((data, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_Card, {
                            id: idx,
                            onClick: OnModal(idx),
                            className: (BestReview_module_default()).card,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    id: idx.toString(),
                                    className: (BestReview_module_default()).reviewimg,
                                    alt: `${data.wineName}_review_img`,
                                    src: data.reviewImg1
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    id: idx.toString(),
                                    children: data.reviewTitle
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "contents",
                                    children: data.desc
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "text",
                                    children: data.writerNick
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "text",
                                    children: data.regiDate.split("T")[0]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "star",
                                    children: drawStar(data.starPoint).map((star, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: star
                                        }, `star_${idx}`))
                                })
                            ]
                        }, `review_${idx}`))
                })
            }),
            ShowModal && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_Modal, {
                offModal: OffModal,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (BestReview_module_default()).reviewimg_Modal,
                        alt: `${bestreviewArr[curModalNum].wineName}_review_img`,
                        src: bestreviewArr[curModalNum].reviewImg1
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (BestReview_module_default()).modalText,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: bestreviewArr[curModalNum].reviewTitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "winename",
                                        children: bestreviewArr[curModalNum].wineName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "modal_star",
                                        children: drawStar(bestreviewArr[curModalNum].starPoint).map((star, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: star
                                            }, `star_${idx}`))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: bestreviewArr[curModalNum].desc
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "modal_name",
                                children: bestreviewArr[curModalNum].writerNick
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "modal_date",
                                children: bestreviewArr[curModalNum].regiDate.split("T")[0]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_BestReview = (BestReview);


/***/ }),

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_RankProd)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/home/RankProd.module.css
var RankProd_module = __webpack_require__(9864);
var RankProd_module_default = /*#__PURE__*/__webpack_require__.n(RankProd_module);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
;// CONCATENATED MODULE: ./src/components/dummydata/rank_list_dummy.json
const rank_list_dummy_namespaceObject = [];
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/util/util.ts
var util = __webpack_require__(72);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/home/RankProd.js








const tab = [
    "레드",
    "화이트",
    "스파클링",
    "주정강화"
];
const RankProd = (props)=>{
    const [currentTab, setCurrentTab] = (0,external_react_.useState)(0);
    const [rankList, setRankList] = (0,external_react_.useState)([]);
    const [fullRank, setFullRank] = (0,external_react_.useState)(props);
    (0,external_react_.useEffect)(()=>{
        setRankList(Object.values(fullRank)[currentTab]);
    }, [
        currentTab
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "maxframe",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sub_tit__",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "카테고리별 랭킹"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "CATECORY’S RANKING"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (RankProd_module_default()).tablist,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (RankProd_module_default()).tablistinner,
                            children: tab.map((tabname, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: index === currentTab ? (RankProd_module_default()).active : "",
                                    onClick: ()=>setCurrentTab(index),
                                    children: tabname
                                }, tabname))
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (RankProd_module_default()).rank_wrap,
                    children: rankList.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: {
                                pathname: `/product/detail/${data.korName}`,
                                query: {
                                    id: data.pid,
                                    winename: data.korName
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: index,
                                className: (RankProd_module_default()).rankcard,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: index === 0 ? 500 : 217,
                                            height: index === 0 ? 500 : 217,
                                            src: data.imageUrl,
                                            alt: `${data.pdname}_썸네일`
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (RankProd_module_default()).txt_area,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (RankProd_module_default()).rank_txt,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "RANK"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: `0${index + 1}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: [
                                                    (RankProd_module_default()).winename,
                                                    index > 0 ? (RankProd_module_default()).smallWinename : ""
                                                ].join(" "),
                                                children: data.korName
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (RankProd_module_default()).price,
                                                children: data.price
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (RankProd_module_default()).tasty_area,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (RankProd_module_default()).inner,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "당도"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: (0,util/* drawStar */.qJ)(data.sweet, /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoWater, {}), /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoWaterOutline, {}))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (RankProd_module_default()).inner,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "산도"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: (0,util/* drawStar */.qJ)(data.acidity, /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoWater, {}), /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoWaterOutline, {}))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, index)
                        }))
                })
            ]
        })
    });
};
/* harmony default export */ const home_RankProd = (RankProd); // Hyojin
 // const RankProd = () => {
 //    const [currentTab, setCurrentTab] = useState(0);
 //    const [rankList, setRankList] = useState([]);
 //    useEffect(() => {
 //       const newrank = rank.filter((data) => data.winetype === tab[currentTab]);
 //       setRankList(newrank);
 //    }, [currentTab]);
 //    //당도 아이콘
 //    const sweetDraw = (score) => {
 //       let i = 0;
 //       let pdtsweet = [];
 //       let num = Math.round(score);
 //       for (i = 0; i < num; i++) {
 //          pdtsweet.push(<IoWater />);
 //       }
 //       for (i = 0; i < 5 - num; i++) {
 //          pdtsweet.push(<IoWaterOutline />);
 //       }
 //       return pdtsweet;
 //    }
 //    //산미 아이콘
 //    const acidDraw = (score) => {
 //       let i = 0;
 //       let pdacid = [];
 //       let num = Math.round(score);
 //       for (i = 0; i < num; i++) {
 //          pdacid.push(<IoWater />);
 //       }
 //       for (i = 0; i < 5 - num; i++) {
 //          pdacid.push(<IoWaterOutline />);
 //       }
 //       return pdacid;
 //    }
 //    return (
 //       <section>
 //          <div className="maxframe">
 //             <div className="sub_tit__">
 //                <h4>카테고리별 랭킹</h4>
 //                <span>CATECORY’S RANKING</span>
 //             </div>
 //             <div>
 //                <div className={styled.tablist}>
 //                   <ul className={styled.tablistinner}>
 //                      {tab.map((tabname, index) => (
 //                         <li
 //                            key={tabname}
 //                            className={index === currentTab ? styled.active : ''}
 //                            onClick={() => setCurrentTab(index)}
 //                         >
 //                            {tabname}
 //                         </li>
 //                      ))}
 //                   </ul>
 //                </div>
 //                <div className={styled.tabmenu_wrap}></div>
 //             </div>
 //             <div className={styled.rank_wrap}>
 //                {rankList.map((data, index) => (
 //                   <div id={index} key={index} className={styled.rankcard}>
 //                      <figure>
 //                         <img src={data.image} alt={`${data.pdname}_썸네일`} />
 //                      </figure>
 //                      <div className={styled.txt_area}>
 //                         <div className={styled.rank_txt}>
 //                            <span>RANK</span>
 //                            <p>{`0${index + 1}`}</p>
 //                         </div>
 //                         <p className={styled.winename}>{data.pdname}</p>
 //                         <p className={styled.price}>{data.pdprice}</p>
 //                      </div>
 //                      <div className={styled.tasty_area}>
 //                         <div className={styled.inner}>
 //                            <p>당도</p>
 //                            <div>
 //                               {sweetDraw(data.sweetness)}
 //                            </div>
 //                         </div>
 //                         <div className={styled.inner}>
 //                            <p>산도</p>
 //                            <div>{acidDraw(data.acidity)}</div>
 //                         </div>
 //                      </div>
 //                   </div>
 //                ))}
 //             </div>
 //          </div>
 //       </section>
 //    );
 // };


/***/ }),

/***/ 7710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_SelectorArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/home/Selector.module.css
var Selector_module = __webpack_require__(3108);
var Selector_module_default = /*#__PURE__*/__webpack_require__.n(Selector_module);
// EXTERNAL MODULE: ./src/components/ui/Button.tsx
var Button = __webpack_require__(1936);
;// CONCATENATED MODULE: ./src/components/home/Selector.js





const foods = [
    {
        key: 0,
        value: "육류",
        label: "육류"
    },
    {
        key: 1,
        value: "해산물",
        label: "해산물"
    },
    {
        key: 2,
        value: "치즈",
        label: "치즈"
    }
];
const bodys = [
    {
        key: 0,
        value: "산뜻",
        label: "산뜻"
    },
    {
        key: 1,
        value: "묵직",
        label: "묵직"
    }
];
const sweets = [
    {
        key: 0,
        value: "달콤",
        label: "달콤"
    },
    {
        key: 1,
        value: "안달콤",
        label: "안달콤"
    }
];
const sours = [
    {
        key: 0,
        value: "있는",
        label: "있는"
    },
    {
        key: 1,
        value: "없는",
        label: "없는"
    }
];
const meat = [
    "Beef",
    "Pork",
    "Lamb",
    "Deer",
    "CuredMeat",
    "Poultry"
];
const seaFood = [
    "Shellfish",
    "Leanfish",
    "Richfish"
];
const Selector = ()=>{
    const [food, setFood] = (0,external_react_.useState)();
    const [body, setBody] = (0,external_react_.useState)();
    const [sweet, setSweet] = (0,external_react_.useState)();
    const [sour, setSour] = (0,external_react_.useState)();
    const router = (0,router_.useRouter)();
    const btnSearch = ()=>{
        // const list = [food, body, sweet, sour];
        router.push({
            pathname: "/product",
            query: {
                page: 1,
                snack: food === "육류" ? meat : food === "해산물" ? seaFood : "Cheese",
                body: body === "산뜻" ? [
                    1,
                    2
                ] : [
                    3,
                    4,
                    5
                ],
                sweet: sweet === "달콤" ? [
                    4,
                    5
                ] : [
                    1,
                    2,
                    3
                ],
                acidity: sour === "있는" ? [
                    4,
                    5
                ] : [
                    1,
                    2,
                    3
                ]
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Selector_module_default()).selector_wrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Selector_module_default()).text,
                                children: "나는"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                onChange: (e)=>setFood(e.target.value),
                                className: (Selector_module_default()).select,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "default",
                                        children: "안주선택"
                                    }),
                                    foods.map((food)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: food.value,
                                            children: food.label
                                        }, food.key);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Selector_module_default()).text,
                                children: "에 어울리는"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                onChange: (e)=>setBody(e.target.value),
                                className: (Selector_module_default()).select,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "default",
                                        children: "선택"
                                    }),
                                    bodys.map((body)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: body.value,
                                            children: body.label
                                        }, body.key);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Selector_module_default()).text,
                                children: "하고"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                onChange: (e)=>setSweet(e.target.value),
                                className: (Selector_module_default()).select,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "default",
                                        children: "선택"
                                    }),
                                    sweets.map((sweet)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: sweet.value,
                                            children: sweet.label
                                        }, sweet.key);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Selector_module_default()).text,
                                children: "하고 산미"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                onChange: (e)=>setSour(e.target.value),
                                className: (Selector_module_default()).select,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "default",
                                        children: "선택"
                                    }),
                                    sours.map((sour)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: sour.value,
                                            children: sour.label
                                        }, sour.key);
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Selector_module_default()).text,
                            children: "와인이 필요해요"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Selector_module_default()).btn_area,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    buttontext: "보러가기",
                    buttonColor: "main",
                    onClick: btnSearch,
                    buttonSize: "l"
                })
            })
        ]
    });
};
/* harmony default export */ const home_Selector = (Selector);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/home/SelectorSlider.js




const SelectorSlider = ()=>{
    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        // variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        // centerMode: true,
        // touchRatio: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: false,
        draggable: false,
        arrows: false,
        cssEase: "linear",
        touchMove: false,
        responsive: [
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const flowImgs = [];
    for(let idx = 0; idx <= 14; idx++){
        flowImgs.push(`/images/main_flow${idx}.png`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Selector_module_default()).sliderwrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
            ...settings,
            className: (Selector_module_default()).slider,
            children: flowImgs.map((flowImgs, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: flowImgs,
                    alt: `flowimg${idx}`,
                    width: 250,
                    height: 250
                }, `flowimg${idx}`))
        })
    });
};
/* harmony default export */ const home_SelectorSlider = (SelectorSlider);

;// CONCATENATED MODULE: ./src/components/home/SelectorArea.js



const SelectorArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "maxframe",
                children: /*#__PURE__*/ jsx_runtime_.jsx(home_Selector, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(home_SelectorSlider, {})
        ]
    });
};
/* harmony default export */ const home_SelectorArea = (SelectorArea);


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

/***/ 8287:
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
/* harmony import */ var _util_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8606);
/* harmony import */ var _components_home_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(728);
/* harmony import */ var _components_home_BestReview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4946);
/* harmony import */ var _components_home_SelectorArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7710);
/* harmony import */ var _components_home_RankProd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6195);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Home = ({ rank , best_review  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_util_Seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_SelectorArea__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_BestReview__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                list: best_review
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_RankProd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...rank
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
async function getServerSideProps() {
    let Rank = {};
    let bestReview = {};
    await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get("http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/product/rank").then((res)=>Rank = res.data.data);
    await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get("http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/community/best-review").then((res)=>bestReview = res.data.data);
    return {
        props: {
            rank: Rank,
            best_review: bestReview
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7765:
/***/ ((module) => {

"use strict";

const imageLoader = ({ src , width  })=>{
    return `${src}?w=${width}`;
};
module.exports = imageLoader;


/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,631], () => (__webpack_exec__(8287)));
module.exports = __webpack_exports__;

})();