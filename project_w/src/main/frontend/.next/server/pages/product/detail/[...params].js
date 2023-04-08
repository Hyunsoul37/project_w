(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 9683:
/***/ ((module) => {

// Exports
module.exports = {
	"Detail": "Detail_Detail__ZJk9A",
	"wineInfoWrapper": "Detail_wineInfoWrapper__5W8cR",
	"imageWrapper": "Detail_imageWrapper__FKoX1",
	"wineName": "Detail_wineName__Tqt_y",
	"wineInfo": "Detail_wineInfo__nMY3G",
	"wineTasty": "Detail_wineTasty__SvSoX",
	"wineFood": "Detail_wineFood__qB20K",
	"recommendSnack": "Detail_recommendSnack___jSch",
	"foodText": "Detail_foodText__izWHh",
	"Desc": "Detail_Desc__eLTl7",
	"Desctitle": "Detail_Desctitle___U_eG",
	"desctext": "Detail_desctext__zzKaE"
};


/***/ }),

/***/ 5142:
/***/ ((module) => {

// Exports
module.exports = {
	"Wineterms": "Wineterms_Wineterms__G6ONn",
	"winetermsTab": "Wineterms_winetermsTab__OGyBq",
	"inactive": "Wineterms_inactive___RgbI",
	"active": "Wineterms_active__xcxyY",
	"winetermsDesc": "Wineterms_winetermsDesc__uNV84"
};


/***/ }),

/***/ 5157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ detail_Detail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/detail/Detail.module.css
var Detail_module = __webpack_require__(9683);
var Detail_module_default = /*#__PURE__*/__webpack_require__.n(Detail_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./src/components/util/util.ts
var util = __webpack_require__(72);
// EXTERNAL MODULE: external "react-star-ratings"
var external_react_star_ratings_ = __webpack_require__(9883);
var external_react_star_ratings_default = /*#__PURE__*/__webpack_require__.n(external_react_star_ratings_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: ./src/components/detail/Detail.tsx







const Detail = (props)=>{
    const snack = props?.recommendedSnack?.split("/");
    const newarr = snack?.map((data)=>data.replaceAll(" ", ""));
    const arrUnique = [
        ...new Set(newarr)
    ];
    const snackList = arrUnique.filter((data)=>data !== "null");
    const isMobile = (0,material_namespaceObject.useMediaQuery)("(max-width: 586px)");
    if (!props?.imageUrl) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "maxframe",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Detail_module_default()).Detail,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Detail_module_default()).imageWrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "wineimg",
                            width: 318,
                            height: 318,
                            src: props.imageUrl ? props.imageUrl : ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Detail_module_default()).wineInfoWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Detail_module_default()).wineName,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: props.korName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: props.engName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Detail_module_default()).wineInfo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "소비자가"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: props.price
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "생산국가 / 지역"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                        children: [
                                                            props.country,
                                                            " / ",
                                                            props.region
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                                                        children: [
                                                            "평점(",
                                                            props.starPoint,
                                                            "점)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_star_ratings_default()), {
                                                            rating: props.starPoint,
                                                            starRatedColor: "#61002E",
                                                            numberOfStars: 5,
                                                            starDimension: isMobile ? "13px" : "20px",
                                                            starSpacing: isMobile ? "1px" : "2px",
                                                            name: "rating"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "알콜도수"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: props.alcohol !== "null" ? props.alcohol : "없음"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Detail_module_default()).wineTasty,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "당도"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: props.sweet ? (0,util/* drawStar */.qJ)(props.sweet, /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCircle, {}), /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegCircle, {})) : "없음"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "바디"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: props.body ? (0,util/* drawStar */.qJ)(props.body, /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCircle, {}), /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegCircle, {})) : "없음"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "산도"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: props.acidity ? (0,util/* drawStar */.qJ)(props.acidity, /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCircle, {}), /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegCircle, {})) : "없음"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "타닌"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: props.tannin ? (0,util/* drawStar */.qJ)(props.tannin, /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCircle, {}), /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegCircle, {})) : "없음"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Detail_module_default()).wineFood,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "음식매칭"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Detail_module_default()).recommendSnack,
                                        children: snackList.length > 0 ? snackList.map((food)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        alt: "food",
                                                        width: 100,
                                                        height: 100,
                                                        src: `/images/icon/${food}.PNG`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (Detail_module_default()).foodText,
                                                        children: food
                                                    }, `${food}_txt`)
                                                ]
                                            })) : "추천 안주 정보가 없습니다."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Detail_module_default()).Desc,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/wineBg.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Detail_module_default()).Desctitle,
                        children: props.korName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Detail_module_default()).desctext,
                        children: props.desc
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const detail_Detail = (Detail);


/***/ }),

/***/ 7416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5142);
/* harmony import */ var _Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2__);



const winetermsTab = [
    "바디",
    "산도",
    "타닌",
    "당도",
    "알코올"
];
const winetermsDesc = [
    `와인의 바디감은 와인을 머금었을 때 입안에서 느껴지는 '묵직함'을 의미합니다. 
   사람에게도 무게가 있듯이, 와인에게도 무게감이 엄연히 존재하는데요. 라이트 바디->미디엄 바디->풀 바디로
  갈수록 무겁고 진한 맛의 와인이라고 할 수 있습니다. 
  와인을 접한 지 얼마 되지 않았다면 풀 바디보다는 라이트한 바디감의 와인부터 마셔보는 것이와인과 친해지는 데에 
  좀 더 수월합니다.`,
    `와인의 산도는 식초와 같이 톡 쏘는 시큼한 맛을 뜻합니다. 
  와인의 맛에 생동감을 주며, 장기 숙성을 가능하게 하는 요소이기도 합니다. 
  품종별로 다르기는 하지만 와인은 평균적으로 pH 3~4정도로 약산성을 띄는 음료입니다. 시큼한 맛이 약간 나는 와인부터 
  새콤하면서 상큼한 맛이 나는 와인, 날카롭게 톡 쏘는 와인까지 다양한 산도의 와인들이 존재하는데요. 
  와인 산도가 높으면 와인 빛깔에서 광채(은광)가 느껴지고, 숙성시키면 색이 잘 보존됩니다. 
  와인의 산도가 높으면 미생물 안정성도 확보할 수 있는데요, 와인 산도가 pH 3.5 이상이면 와인을 병에 담은 이후에도 
  발효가 진행되기도 한답니다. `,
    `와인의 탄닌, 혹은 타닌은 와인 맛의 뼈대를 이루는 중요한 요소로, 덜 익은 감을 먹을 때 느껴지는 떫은 맛을 
   떠올리는 것이 가장 적당할 것 같은데요. 와인에서 느껴지는 쌉싸름한 맛이 바로 탄닌입니다. 
   첫 모금을 마시는 순간 입안이 거칠어지고 다소 건조해지는 느낌도 들 수 있는데요. 
   마실수록 깊은 맛과 풍미를 느낄 수 있는 요소이기도 합니다.`,
    `와인의 당도는 와인의 맛 중에서 단맛, 달콤한 정도를 뜻합니다. 
  기본적으로 와인의 단맛은 원재료인 포도에서 나오는데요, 포도가 가지고 있는 고유의 당이 발효 과정을 거쳐 알코올로 분해된 
  다음 알코올 도수가 알맞게 생성되면 발효가 멈춰지는데 이 시점에서 남아있는 당의 함량에 따라 와인의 단맛이 결정됩니다. 
  가볍고 달콤한 맛의 와인은 저렴하다는 편견이 널려 퍼져 있기도 하지만, 와인을 구성하는 맛의 요소 중에서 
  맛의 풍미와 균형감을 결정하는 데에 큰 역할을 하는 것 또한 와인의 당도입니다.`,
    `와인의 알코올 함량, 즉 도수를 의미합니다.  와인의 원료인 포도의 당도가 높을수록 알코올 도수가 올라가요. 
  효모가 포도의 당분을 먹어치우면서 알코올과 이산화탄소를 만들어 내고, 이것이 알코올 발효로 이어지기 때문이랍니다. 
  라이트 바디감은 알코올 12.5도, 미디엄 바디감은 알코올 12.5~13.5도, 풀 바디는 13.5도 이상의 와인이라고 볼 수 있어요.
  와인의 알코올 도수는 평균적으로 11도~15도 사이인데요, 와인이 발효될 때 알코올이 되는 미생물이 15도 이상의 도수에서는 
  제 역할을 하지 못하기 때문이랍니다. 같은 발효주인 맥주, 청주, 막걸리 또한 그래서 15도를 넘지 않는 경우가 대부분이예요. 
  하지만 예외적으로 '주정 강화 와인'의 경우 와인의 발효 과정에서 브랜디를 섞었기 때문에 일반적인 와인보다는
  도수가 높은 편이예요. 16~19도 정도이니, 일반 와인으로는 알코올이 부족하다 싶은 분들이 도전해 보시기 좋겠죠? 
  다만, 알코올이 너무 센 와인은 사람에 따라 맛과 향에서 불쾌함이 느껴질 수도 있으니 유의해 주세요.`
];
const Wineterms = ()=>{
    const [curtab, setcurTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "maxframe",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2___default().Wineterms),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    children: [
                        "어려운 와인 용어 ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "와구"
                        }),
                        "가 설명해드릴게요:)"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2___default().winetermsTab),
                    children: winetermsTab.map((tab, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: idx === curtab ? (_Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2___default().active) : (_Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2___default().inactive),
                            onClick: ()=>setcurTab(idx),
                            children: tab
                        }, tab))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Wineterms_module_css__WEBPACK_IMPORTED_MODULE_2___default().winetermsDesc),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: winetermsDesc[curtab]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wineterms);


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

/***/ 5242:
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
/* harmony import */ var _components_detail_Detail_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5157);
/* harmony import */ var _components_detail_Wineterms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7416);
/* harmony import */ var _util_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8606);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const detailPage = ({ data  })=>{
    //const [detailData, setDetailData] = useState({});
    //const filterlist = data.filter((d) => d.winePid === Number(id));
    // useEffect(() => {
    //   GetDetailInfo();
    // }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_util_Seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: data.wineKorName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_detail_Detail_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_detail_Wineterms__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailPage);
async function getServerSideProps({ query  }) {
    const { id  } = query;
    let data = {};
    await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/product/wine/detail?pid=${id}`).then((res)=>data = res.data.data);
    // const GetDetailInfo = async () => {
    //   const response = await fetch(`/api/product/wine/detail?pid=${id}`, {
    //     method: "GET",
    //     body: null,
    //     headers: { "Content-Type": "application/json;charset=UTF-8" },
    //   });
    //   const data = await response.json();
    //   setDetailData(data.data);
    // };
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

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675], () => (__webpack_exec__(5242)));
module.exports = __webpack_exports__;

})();