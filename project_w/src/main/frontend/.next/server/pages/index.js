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
	"h25": "Selector_h25__ZYULD",
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

/***/ 6479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/util/Seo.js
var Seo = __webpack_require__(8606);
// EXTERNAL MODULE: ./src/components/home/Banner.module.css
var Banner_module = __webpack_require__(117);
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/home/Banner.js






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
    arrows: false
};
const Banner = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
            ...Settings,
            className: (Banner_module_default()).Banner,
            children: bannerimg.map((bannerimg, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    // loader={imageLoader}
                    // width={100}
                    // height={100}
                    alt: "bannerimg",
                    src: bannerimg
                }, `banner_${idx}`))
        })
    });
};
/* harmony default export */ const home_Banner = (Banner);

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
;// CONCATENATED MODULE: ./src/components/home/BestReview.js






const img = [
    "/images/review_0.jpg",
    "/images/review_1.jpg",
    "/images/review_2.jpg"
];
const dummyreview = [
    {
        reviewImage: img[0],
        title: "와인이 정말 맛있어요~~!!",
        contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
        winename: "GANCIA",
        name: "임선민",
        date: "2020.01.02",
        star: 3.2
    },
    {
        reviewImage: img[1],
        title: "최고의 와인 추천합니다",
        contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
        winename: "GANCIA",
        name: "임선민",
        date: "2020.01.02",
        star: 4.7
    },
    {
        reviewImage: img[2],
        title: "굳굳굳!!!",
        contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
        winename: "GANCIA",
        name: "임선민",
        date: "2020.01.02",
        star: 2.4
    }
];
const BestReview = ()=>{
    const [ShowModal, setShowModal] = (0,external_react_.useState)(false);
    const [curModalNum, setcurModalNum] = (0,external_react_.useState)(-1);
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
                children: dummyreview.map((data, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_Card, {
                        id: idx,
                        onClick: OnModal(idx),
                        className: (BestReview_module_default()).card,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                id: idx,
                                className: (BestReview_module_default()).reviewimg,
                                alt: `${data.winename}_review_img`,
                                src: data.reviewImage
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                id: idx,
                                children: data.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "contents",
                                children: data.contents
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "text",
                                children: data.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "text",
                                children: data.date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "star",
                                children: drawStar(data.star).map((star, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: star
                                    }, `star_${idx}`))
                            })
                        ]
                    }, `review_${idx}`))
            }),
            ShowModal && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_Modal, {
                offModal: OffModal,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (BestReview_module_default()).reviewimg_Modal,
                        alt: `${dummyreview[curModalNum].winename}_review_img`,
                        src: dummyreview[curModalNum].reviewImage
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (BestReview_module_default()).modalText,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: dummyreview[curModalNum].title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "winename",
                                        children: dummyreview[curModalNum].winename
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "modal_star",
                                        children: drawStar(dummyreview[curModalNum].star).map((star, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: star
                                            }, `star_${idx}`))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: dummyreview[curModalNum].contents
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "modal_name",
                                children: dummyreview[curModalNum].name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "modal_date",
                                children: dummyreview[curModalNum].date
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_BestReview = (BestReview);

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
const Selector = ()=>{
    const [food, setFood] = (0,external_react_.useState)();
    const onFood = (e)=>{
        setFood(e.target.value);
    };
    const [body, setBody] = (0,external_react_.useState)();
    const onBody = (e)=>{
        setBody(e.target.value);
    };
    const [sweet, setSweet] = (0,external_react_.useState)();
    const onSweet = (e)=>{
        setSweet(e.target.value);
    };
    const [sour, setSour] = (0,external_react_.useState)();
    const onSour = (e)=>{
        setSour(e.target.value);
    };
    const router = (0,router_.useRouter)();
    const btnSearch = ()=>{
        // const list = [food, body, sweet, sour];
        router.push({
            pathname: "/product",
            query: {
                food,
                body,
                sweet,
                sour
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
                                onChange: onFood,
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
                                onChange: onBody,
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
                                onChange: onSweet,
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
                                onChange: onSour,
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
                    onClick: btnSearch
                })
            })
        ]
    });
};
/* harmony default export */ const home_Selector = (Selector);

;// CONCATENATED MODULE: ./src/components/home/SelectorSlider.js



const SelectorSlider = ()=>{
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerMode: true,
        touchRatio: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        swipeToSlide: false,
        draggable: false,
        arrows: false,
        cssEase: "linear"
    };
    const flowImgs = [];
    for(let idx = 0; idx <= 14; idx++){
        flowImgs.push(`/images/main_flow${idx}.png`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Selector_module_default()).h25,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
            ...settings,
            children: flowImgs.map((flowImgs, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: flowImgs,
                    alt: `flowimg${idx}`,
                    className: (Selector_module_default()).h25
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

// EXTERNAL MODULE: ./src/components/home/RankProd.module.css
var RankProd_module = __webpack_require__(9864);
var RankProd_module_default = /*#__PURE__*/__webpack_require__.n(RankProd_module);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
;// CONCATENATED MODULE: ./src/components/dummydata/rank_list_dummy.json
const rank_list_dummy_namespaceObject = [];
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

;// CONCATENATED MODULE: ./src/pages/index.js







const Home = ({ rank  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* default */.Z, {
                title: "Home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(home_Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_SelectorArea, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_BestReview, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_RankProd, {
                ...rank
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);
async function getServerSideProps() {
    const Rank = await fetch("http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/product/rank", {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    });
    const data = await Rank.json();
    return {
        props: {
            rank: data.data
        }
    };
}


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,631], () => (__webpack_exec__(6479)));
module.exports = __webpack_exports__;

})();