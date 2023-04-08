(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 1844:
/***/ ((module) => {

// Exports
module.exports = {
	"ProductCard": "ProductCard_ProductCard__0Mqhk",
	"imageWrapper": "ProductCard_imageWrapper__6l90N",
	"wineInfoBox": "ProductCard_wineInfoBox__XddMg",
	"heart": "ProductCard_heart__avpmS",
	"modal": "ProductCard_modal__Srp9p"
};


/***/ }),

/***/ 8585:
/***/ ((module) => {

// Exports
module.exports = {
	"FilterWrapper": "ProductFilter_FilterWrapper__7JBmP",
	"showfilter": "ProductFilter_showfilter__dhWEl",
	"Ani": "ProductFilter_Ani__cj6_a",
	"offfilter": "ProductFilter_offfilter__LuVr8",
	"ReverseAni": "ProductFilter_ReverseAni__SZRG6",
	"filter": "ProductFilter_filter__PKAxX",
	"inputbox": "ProductFilter_inputbox__yJkUU",
	"buttonWrap": "ProductFilter_buttonWrap__2V81T",
	"PriceRange": "ProductFilter_PriceRange__ilBbg"
};


/***/ }),

/***/ 9803:
/***/ ((module) => {

// Exports
module.exports = {
	"ProductWrapper": "Product_SM_ProductWrapper__hGb9x",
	"title": "Product_SM_title__8GgcA",
	"ProductCardWrapper": "Product_SM_ProductCardWrapper__oCxdc",
	"winetypetab": "Product_SM_winetypetab__EnuAv",
	"activetab": "Product_SM_activetab__d7OcP",
	"pagebtnWrapper": "Product_SM_pagebtnWrapper__cWFk0",
	"pagebtn": "Product_SM_pagebtn__nIe5b",
	"activebtn": "Product_SM_activebtn__S0MFv",
	"prevNextBtn": "Product_SM_prevNextBtn__unTZY",
	"noWine": "Product_SM_noWine__gQLRa",
	"BtnLink": "Product_SM_BtnLink__LsVUK"
};


/***/ }),

/***/ 6922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_product),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/product_sm/ProductFilter.module.css
var ProductFilter_module = __webpack_require__(8585);
var ProductFilter_module_default = /*#__PURE__*/__webpack_require__.n(ProductFilter_module);
;// CONCATENATED MODULE: ./src/components/product_sm/filterindex.ts
const winetype = [
    "레드",
    "화이트",
    "로제",
    "스파클링",
    "주정강화",
    "디저트"
];
const country = [
    "프랑스",
    "이탈리아",
    "스페인",
    "미국",
    "독일",
    "칠레",
    "아르헨티나",
    "호주",
    "뉴질랜드",
    "포루투갈",
    "기타구대륙",
    "기타신대륙"
];
const grape = (/* unused pure expression or super */ null && ([
    "가메",
    "게뷔르츠트라미너",
    "그르나슈",
    "네비올로",
    "리슬링",
    "말벡",
    "메를로",
    "모스카토",
    "몬테풀치아노",
    "바르베라",
    "베르데호",
    "비오니에",
    "산지오베제",
    "샤르도네",
    "세미용",
    "소비뇽 블랑",
    "쉬라즈",
    "슈냉 블랑",
    "진판델",
    "카르메네르",
    "카베르네 소비뇽",
    "카베르네 프랑",
    "템프라니요",
    "피노 그리",
    "피노누아",
    "기타"
]));

;// CONCATENATED MODULE: external "@mui/material/Slider"
const Slider_namespaceObject = require("@mui/material/Slider");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_namespaceObject);
;// CONCATENATED MODULE: ./src/components/product_sm/FilterInput.tsx

const FilterInput = (props)=>{
    const ChangeHandler = (e)=>{
        if (e.target.checked) {
            props.setFilterState([
                ...props.list,
                e.target.value
            ]);
        } else {
            const removetype = props.list.filter((data)=>data !== e.target.value);
            props.setFilterState(removetype);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: "checkbox",
        checked: props.list.includes(props.value.toString()),
        name: props.name,
        value: props.value,
        onChange: (e)=>ChangeHandler(e)
    });
};
/* harmony default export */ const product_sm_FilterInput = (FilterInput);

// EXTERNAL MODULE: ./src/components/ui/Button.tsx
var Button = __webpack_require__(1936);
;// CONCATENATED MODULE: ./src/components/product_sm/ProductFilter.tsx







const score = [
    1,
    2,
    3,
    4,
    5
];
const ProductFilter = (props)=>{
    const [type, setWineType] = (0,external_react_.useState)([]);
    const [body, setbody] = (0,external_react_.useState)([]);
    const [sweet, setsweet] = (0,external_react_.useState)([]);
    const [acidity, setAcidity] = (0,external_react_.useState)([]);
    const [tannin, setTannin] = (0,external_react_.useState)([]);
    const [price, setPrice] = (0,external_react_.useState)([
        40000,
        300000
    ]);
    const [makeCountry, setMakeCountry] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const wrapper = document.getElementById("Filter");
        let timer = null;
        if (!props.isshow) {
            timer = setTimeout(()=>{
                wrapper.style.display = "none";
            }, 500);
        } else {
            wrapper.style.display = "block";
        }
    }, [
        props.isshow
    ]);
    const FilterSubmitHandler = ()=>{
        props.SetFilterData({
            type: type,
            body: body,
            sweet: sweet,
            acidity: acidity,
            tannin: tannin,
            minPrice: price[0],
            maxPrice: price[1],
            country: makeCountry
        });
        props.offFilter();
    };
    const Reset = ()=>{
        setWineType([]);
        setbody([]);
        setsweet([]);
        setAcidity([]);
        setTannin([]);
        setPrice([
            40000,
            300000
        ]);
        setMakeCountry([]);
    };
    const handleChange = (event, newValue)=>{
        setPrice(newValue);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "Filter",
        className: [
            (ProductFilter_module_default()).FilterWrapper,
            props.isshow ? (ProductFilter_module_default()).showfilter : (ProductFilter_module_default()).offfilter
        ].join(" "),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: [
                "maxframe",
                (ProductFilter_module_default()).filter
            ].join(" "),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "와인종류"
                        }),
                        winetype.map((data, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_sm_FilterInput, {
                                        name: "winetype",
                                        value: idx + 1,
                                        setFilterState: setWineType,
                                        list: type
                                    }),
                                    data
                                ]
                            }, `F_winetype_${idx}`))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "바디"
                        }),
                        score.map((num, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_sm_FilterInput, {
                                        name: "body",
                                        value: num,
                                        setFilterState: setbody,
                                        list: body
                                    }),
                                    num
                                ]
                            }, `F_body_${idx}`))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "당도"
                        }),
                        score.map((num, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_sm_FilterInput, {
                                        name: "sweet",
                                        value: num,
                                        setFilterState: setsweet,
                                        list: sweet
                                    }),
                                    num
                                ]
                            }, `F_sweet_${idx}`))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "산미"
                        }),
                        score.map((num, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_sm_FilterInput, {
                                        name: "acidity",
                                        value: num,
                                        setFilterState: setAcidity,
                                        list: acidity
                                    }),
                                    num
                                ]
                            }, `F_acidity_${idx}`))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "탄닌"
                        }),
                        score.map((num, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_sm_FilterInput, {
                                        name: "tannins",
                                        value: num,
                                        setFilterState: setTannin,
                                        list: tannin
                                    }),
                                    num
                                ]
                            }, `F_acidity_${idx}`))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "가격"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
                            style: {
                                color: "#61002E"
                            },
                            step: 10000,
                            min: 0,
                            max: 350000,
                            getAriaLabel: ()=>"Price range",
                            value: price,
                            onChange: handleChange,
                            valueLabelDisplay: "auto"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).inputbox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "생산국가"
                        }),
                        country.map((data, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_sm_FilterInput, {
                                        name: "country",
                                        value: data,
                                        setFilterState: setMakeCountry,
                                        list: makeCountry
                                    }),
                                    data
                                ]
                            }, `F_country${idx}`))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProductFilter_module_default()).buttonWrap,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            buttontext: "초기화",
                            buttonColor: "second",
                            onClick: Reset
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            buttontext: "적용",
                            buttonColor: "main",
                            onClick: FilterSubmitHandler
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const product_sm_ProductFilter = (ProductFilter);

;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
// EXTERNAL MODULE: ./src/components/product_sm/Product_SM.module.css
var Product_SM_module = __webpack_require__(9803);
var Product_SM_module_default = /*#__PURE__*/__webpack_require__.n(Product_SM_module);
// EXTERNAL MODULE: ./src/components/product_sm/ProductCard.module.css
var ProductCard_module = __webpack_require__(1844);
var ProductCard_module_default = /*#__PURE__*/__webpack_require__.n(ProductCard_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/util/Heart.tsx
var Heart = __webpack_require__(9481);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/customHooks/useFetch.js
var useFetch = __webpack_require__(9749);
;// CONCATENATED MODULE: ./src/components/product_sm/ProductCard.tsx









const url = "/api/product/wine/like";
const type = "POST";
const header = {
    "Content-Type": "application/json;charset=UTF-8"
};
const ProductCard = ({ index , ...rest })=>{
    const user = (0,external_react_redux_.useSelector)((state)=>state.user);
    const modalref = (0,external_react_.useRef)(null);
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { sendRequestData: likewine  } = (0,useFetch/* default */.Z)();
    const winetype = rest.type === 1 ? "레드" : rest.type === 2 ? "화이트" : rest.type === 3 ? "로제" : rest.type === 4 ? "스파클링" : rest.type === 5 ? "주정강화" : "디저트";
    const HeartHandler = ()=>{
        const id = localStorage.getItem("id");
        if (user.isLoggedIn) {
            likewine({
                url: url,
                type: type,
                header: header,
                data: {
                    memberPid: id,
                    winePid: rest.pid
                },
                AfterGetData: null
            });
        } else {
            modalref.current?.showModal();
            setShowModal(true);
        }
    };
    const OffModal = ()=>{
        modalref.current?.close();
        setShowModal(false);
        router.push({
            pathname: "/login",
            query: {
                returnUrl: router.asPath
            }
        }, "/login");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductCard_module_default()).ProductCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProductCard_module_default()).imageWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: {
                            pathname: `/product/detail/${rest.korName}`,
                            query: {
                                id: rest.pid,
                                winename: rest.korName
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "wine",
                            // loader={imageLoader}
                            width: 100,
                            height: 100,
                            sizes: "(max-width: 768px) 200px, (max-width: 1200px) 200px,",
                            loading: index < 10 ? "eager" : "lazy",
                            priority: index < 10 ? true : false,
                            src: rest.imageUrl ? rest.imageUrl : `/images/wine/${rest.pid - 1}.png`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProductCard_module_default()).heart,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Heart/* default */.Z, {
                            userLike: rest.like,
                            onClick: HeartHandler
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: {
                    pathname: `/product/detail/${rest.engName}`,
                    query: {
                        id: rest.pid,
                        winename: rest.engName
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    id: "name_ko",
                    children: rest.korName
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                id: "name_en",
                children: rest.engName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                id: "desc",
                children: rest.desc
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProductCard_module_default()).wineInfoBox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: winetype
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: rest.country
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: rest.grapeVariety
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                children: [
                    rest.price,
                    "won"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dialog", {
                style: !showModal ? {
                    display: "none"
                } : {
                    display: "flex"
                },
                className: (ProductCard_module_default()).modal,
                ref: modalref,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            fontSize: "16px"
                        },
                        children: "로그인이 필요한 기능입니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: OffModal,
                        children: "확인"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const product_sm_ProductCard = (ProductCard);

// EXTERNAL MODULE: external "lottie-react"
var external_lottie_react_ = __webpack_require__(6164);
var external_lottie_react_default = /*#__PURE__*/__webpack_require__.n(external_lottie_react_);
;// CONCATENATED MODULE: ./src/components/ui/wineNotFound.json
const wineNotFound_namespaceObject = JSON.parse('{"v":"5.7.11","fr":30,"ip":59,"op":119,"w":1080,"h":1080,"nm":"Source","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Tear Left","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":8.708,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":77,"s":[-91.271,4.207,0],"to":[-3.485,12.239,0],"ti":[3.485,-12.239,0]},{"t":86,"s":[-112.18,77.641,0]}],"ix":2,"l":2},"a":{"a":0,"k":[82,12.75,0],"ix":1,"l":2},"s":{"a":0,"k":[-156.471,83.125,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":77,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[82.25,16.75],[82,16.75]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":80,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[82,8.75],[82,16.75]],"c":false}]},{"t":86,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[82.25,16.75],[82,16.75]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.211765005074,0.211765005074,0.211765005074,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":76,"op":87,"st":2,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Tear Right","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":75,"s":[57,2.75,0],"to":[1.592,12.625,0],"ti":[-1.592,-12.625,0]},{"t":84,"s":[66.55,78.503,0]}],"ix":2,"l":2},"a":{"a":0,"k":[82,12.75,0],"ix":1,"l":2},"s":{"a":0,"k":[269.412,143.125,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":75,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[82.25,16.75],[82,16.75]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":78,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[82,8.75],[82,16.75]],"c":false}]},{"t":84,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[82.25,16.75],[82,16.75]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.211765005074,0.211765005074,0.211765005074,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":74,"op":85,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Foot Right","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"k":[{"s":[6.584],"t":59,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[4.396],"t":60,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[2.181],"t":61,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-0.044],"t":62,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-2.26],"t":63,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-4.448],"t":64,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-6.59],"t":65,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-8.667],"t":66,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-10.66],"t":67,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-12.552],"t":68,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-14.323],"t":69,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-15.955],"t":70,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-17.429],"t":71,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-18.728],"t":72,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-19.832],"t":73,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-20.723],"t":74,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.382],"t":75,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.791],"t":76,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.932],"t":77,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.772],"t":78,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.306],"t":79,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-20.557],"t":80,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-19.548],"t":81,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-18.301],"t":82,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-16.839],"t":83,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-15.185],"t":84,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-13.361],"t":85,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-11.39],"t":86,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-9.295],"t":87,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-7.098],"t":88,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-4.821],"t":89,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-2.488],"t":90,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-0.121],"t":91,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[2.257],"t":92,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[4.624],"t":93,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[6.957],"t":94,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[9.234],"t":95,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[11.431],"t":96,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[13.527],"t":97,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[15.498],"t":98,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[17.322],"t":99,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[18.976],"t":100,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[20.437],"t":101,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[21.684],"t":102,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[22.693],"t":103,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.442],"t":104,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.908],"t":105,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[24.068],"t":106,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.928],"t":107,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.518],"t":108,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[22.859],"t":109,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[21.968],"t":110,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[20.864],"t":111,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[19.566],"t":112,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[18.091],"t":113,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[16.459],"t":114,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[14.688],"t":115,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[12.796],"t":116,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[10.803],"t":117,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[8.726],"t":118,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}]},"p":{"a":0,"k":[-66.949,288.907,0],"ix":2,"l":2},"a":{"a":0,"k":[-371,223.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-410,226.5],[-370,222]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.635294117647,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Leg Right","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"k":[{"s":[-7.953],"t":59,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-3.994],"t":60,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[3.994],"t":62,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[7.953],"t":63,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[11.84],"t":64,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[15.621],"t":65,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[19.259],"t":66,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[22.72],"t":67,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[25.967],"t":68,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[28.966],"t":69,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[31.68],"t":70,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[34.074],"t":71,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[36.113],"t":72,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[37.76],"t":73,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[38.981],"t":74,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[39.739],"t":75,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[40],"t":76,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[39.721],"t":77,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[38.911],"t":78,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[37.609],"t":79,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[35.854],"t":80,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[33.686],"t":81,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[31.144],"t":82,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[28.267],"t":83,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[25.095],"t":84,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[21.667],"t":85,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[18.023],"t":86,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[14.201],"t":87,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[10.242],"t":88,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[6.185],"t":89,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[2.068],"t":90,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-2.068],"t":91,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-6.185],"t":92,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-10.242],"t":93,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-14.201],"t":94,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-18.023],"t":95,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.667],"t":96,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-25.095],"t":97,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-28.267],"t":98,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-31.144],"t":99,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-33.686],"t":100,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-35.854],"t":101,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-37.609],"t":102,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-38.911],"t":103,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-39.721],"t":104,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-40],"t":105,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-39.739],"t":106,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-38.981],"t":107,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-37.76],"t":108,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-36.113],"t":109,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-34.074],"t":110,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-31.68],"t":111,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-28.966],"t":112,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-25.967],"t":113,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-22.72],"t":114,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-19.259],"t":115,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-15.621],"t":116,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-11.84],"t":117,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-7.953],"t":118,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}]},"p":{"a":0,"k":[66,167,0],"ix":2,"l":2},"a":{"a":0,"k":[-66,167,0],"ix":1,"l":2},"s":{"a":0,"k":[-100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"k":[{"s":[{"i":[[0,0],[28.157,-33.619]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":59,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[32.494,-33.716]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":60,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[36.491,-33.805]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":61,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[40.103,-33.885]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":62,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[43.283,-33.955]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":63,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[45.986,-34.016]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":64,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[48.168,-34.064]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":65,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[49.783,-34.1]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":66,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[50.785,-34.122]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":67,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[51.129,-34.13]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":68,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[50.737,-34.121]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":69,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[49.596,-34.096]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":70,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[47.762,-34.055]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":71,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[45.291,-34]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":72,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[42.238,-33.932]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":73,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[38.658,-33.853]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":74,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[34.607,-33.763]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":75,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[30.141,-33.664]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":76,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[25.314,-33.556]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":77,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[20.182,-33.442]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":78,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[14.801,-33.323]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":79,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[9.226,-33.199]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":80,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[3.512,-33.072]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":81,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-2.284,-32.943]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":82,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-8.109,-32.814]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":83,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-13.906,-32.685]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":84,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-19.619,-32.558]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":85,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-25.194,-32.434]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":86,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-30.575,-32.315]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":87,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-35.707,-32.201]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":88,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-40.534,-32.094]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":89,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-45,-31.994]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":90,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-49.051,-31.904]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":91,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-52.631,-31.825]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":92,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-55.684,-31.757]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":93,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-58.155,-31.702]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":94,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-59.989,-31.661]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":95,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-61.13,-31.636]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":96,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-61.522,-31.627]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":97,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-61.178,-31.635]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":98,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-60.176,-31.657]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":99,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-58.562,-31.693]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":100,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-56.38,-31.742]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":101,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-53.676,-31.802]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":102,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-50.496,-31.872]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":103,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-46.885,-31.952]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":104,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-42.888,-32.041]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":105,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-38.55,-32.138]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":106,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-33.918,-32.241]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":107,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-29.036,-32.349]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":108,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-23.95,-32.462]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":109,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-18.706,-32.578]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":110,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-13.347,-32.697]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":111,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-7.921,-32.818]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":112,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-2.472,-32.939]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":113,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[2.954,-33.06]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":114,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[8.312,-33.179]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":115,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[13.557,-33.295]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":116,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[18.643,-33.408]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":117,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[23.525,-33.517]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":118,"i":{"x":1,"y":1},"o":{"x":0,"y":0}}]},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.635294117647,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Foot Left","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"k":[{"s":[-4.821],"t":59,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-2.488],"t":60,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-0.121],"t":61,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[2.257],"t":62,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[4.624],"t":63,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[6.957],"t":64,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[9.234],"t":65,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[11.431],"t":66,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[13.527],"t":67,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[15.498],"t":68,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[17.322],"t":69,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[18.976],"t":70,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[20.437],"t":71,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[21.684],"t":72,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[22.693],"t":73,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.442],"t":74,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.908],"t":75,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[24.068],"t":76,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.928],"t":77,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[23.518],"t":78,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[22.859],"t":79,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[21.968],"t":80,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[20.864],"t":81,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[19.566],"t":82,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[18.091],"t":83,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[16.459],"t":84,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[14.688],"t":85,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[12.796],"t":86,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[10.803],"t":87,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[8.726],"t":88,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[6.584],"t":89,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[4.396],"t":90,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[2.181],"t":91,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-0.044],"t":92,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-2.26],"t":93,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-4.448],"t":94,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-6.59],"t":95,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-8.667],"t":96,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-10.66],"t":97,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-12.552],"t":98,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-14.323],"t":99,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-15.955],"t":100,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-17.429],"t":101,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-18.728],"t":102,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-19.832],"t":103,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-20.723],"t":104,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.382],"t":105,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.791],"t":106,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.932],"t":107,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.772],"t":108,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.306],"t":109,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-20.557],"t":110,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-19.548],"t":111,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-18.301],"t":112,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-16.839],"t":113,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-15.185],"t":114,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-13.361],"t":115,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-11.39],"t":116,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-9.295],"t":117,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-7.098],"t":118,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}]},"p":{"a":0,"k":[-66.949,288.907,0],"ix":2,"l":2},"a":{"a":0,"k":[-371,223.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-410,226.5],[-370,222]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.635294117647,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Leg Left","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"k":[{"s":[-6.185],"t":59,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-2.068],"t":60,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[2.068],"t":61,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[6.185],"t":62,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[10.242],"t":63,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[14.201],"t":64,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[18.023],"t":65,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[21.667],"t":66,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[25.095],"t":67,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[28.267],"t":68,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[31.144],"t":69,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[33.686],"t":70,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[35.854],"t":71,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[37.609],"t":72,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[38.911],"t":73,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[39.721],"t":74,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[40],"t":75,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[39.739],"t":76,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[38.981],"t":77,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[37.76],"t":78,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[36.113],"t":79,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[34.074],"t":80,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[31.68],"t":81,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[28.966],"t":82,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[25.967],"t":83,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[22.72],"t":84,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[19.259],"t":85,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[15.621],"t":86,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[11.84],"t":87,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[7.953],"t":88,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[3.994],"t":89,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-3.994],"t":91,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-7.953],"t":92,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-11.84],"t":93,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-15.621],"t":94,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-19.259],"t":95,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-22.72],"t":96,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-25.967],"t":97,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-28.966],"t":98,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-31.68],"t":99,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-34.074],"t":100,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-36.113],"t":101,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-37.76],"t":102,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-38.981],"t":103,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-39.739],"t":104,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-40],"t":105,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-39.721],"t":106,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-38.911],"t":107,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-37.609],"t":108,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-35.854],"t":109,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-33.686],"t":110,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-31.144],"t":111,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-28.267],"t":112,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-25.095],"t":113,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-21.667],"t":114,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-18.023],"t":115,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-14.201],"t":116,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-10.242],"t":117,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"s":[-6.185],"t":118,"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}]},"p":{"a":0,"k":[-66,167,0],"ix":2,"l":2},"a":{"a":0,"k":[-66,167,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"k":[{"s":[{"i":[[0,0],[-29.036,-32.349]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":59,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-23.95,-32.462]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":60,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-18.706,-32.578]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":61,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-13.347,-32.697]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":62,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-7.921,-32.818]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":63,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-2.472,-32.939]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":64,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[2.954,-33.06]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":65,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[8.312,-33.179]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":66,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[13.557,-33.295]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":67,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[18.643,-33.408]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":68,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[23.525,-33.517]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":69,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[28.157,-33.619]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":70,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[32.494,-33.716]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":71,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[36.491,-33.805]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":72,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[40.103,-33.885]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":73,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[43.283,-33.955]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":74,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[45.986,-34.016]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":75,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[48.168,-34.064]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":76,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[49.783,-34.1]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":77,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[50.785,-34.122]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":78,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[51.129,-34.13]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":79,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[50.737,-34.121]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":80,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[49.596,-34.096]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":81,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[47.762,-34.055]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":82,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[45.291,-34]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":83,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[42.238,-33.932]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":84,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[38.658,-33.853]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":85,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[34.607,-33.763]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":86,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[30.141,-33.664]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":87,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[25.314,-33.556]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":88,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[20.182,-33.442]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":89,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[14.801,-33.323]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":90,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[9.226,-33.199]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":91,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[3.512,-33.072]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":92,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-2.284,-32.943]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":93,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-8.109,-32.814]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":94,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-13.906,-32.685]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":95,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-19.619,-32.558]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":96,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-25.194,-32.434]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":97,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-30.575,-32.315]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":98,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-35.707,-32.201]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":99,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-40.534,-32.094]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":100,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-45,-31.994]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":101,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-49.051,-31.904]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":102,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-52.631,-31.825]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":103,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-55.684,-31.757]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":104,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-58.155,-31.702]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":105,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-59.989,-31.661]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":106,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-61.13,-31.636]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":107,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-61.522,-31.627]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":108,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-61.178,-31.635]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":109,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-60.176,-31.657]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":110,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-58.562,-31.693]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":111,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-56.38,-31.742]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":112,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-53.676,-31.802]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":113,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-50.496,-31.872]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":114,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-46.885,-31.952]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":115,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-42.888,-32.041]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":116,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-38.55,-32.138]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":117,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[{"i":[[0,0],[-33.918,-32.241]],"o":[[0,40.667],[61.522,31.627]],"v":[[-67,165],[-67,287]],"c":false}],"t":118,"i":{"x":1,"y":1},"o":{"x":0,"y":0}}]},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.635294117647,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Mouth","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-6.752,28.826,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[88,88,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[{"i":[[0,0],[-44.765,-49.458]],"o":[[0,0],[94.048,103.907]],"v":[[-42,42.5],[49.5,42.5]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":90,"s":[{"i":[[0,0],[-57.66,-26.063]],"o":[[0,0],[67.335,30.437]],"v":[[-42,42.5],[49.5,42.5]],"c":false}]},{"t":119,"s":[{"i":[[0,0],[-44.765,-49.458]],"o":[[0,0],[94.048,103.907]],"v":[[-42,42.5],[49.5,42.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[20]},{"t":119,"s":[15]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Eyes","parent":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"k":[{"s":[1.984,0,0],"t":59,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-2,0,0],"t":61,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-3.975,0,0],"t":62,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-5.917,0,0],"t":63,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-7.809,0,0],"t":64,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-9.63,0,0],"t":65,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-11.358,0,0],"t":66,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-12.98,0,0],"t":67,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-14.481,0,0],"t":68,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-15.84,0,0],"t":69,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-17.038,0,0],"t":70,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-18.061,0,0],"t":71,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-18.889,0,0],"t":72,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-19.499,0,0],"t":73,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-19.873,0,0],"t":74,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-20,0,0],"t":75,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-19.873,0,0],"t":76,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-19.499,0,0],"t":77,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-18.889,0,0],"t":78,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-18.061,0,0],"t":79,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-17.038,0,0],"t":80,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-15.84,0,0],"t":81,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-14.481,0,0],"t":82,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-12.98,0,0],"t":83,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-11.358,0,0],"t":84,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-9.63,0,0],"t":85,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-7.809,0,0],"t":86,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-5.917,0,0],"t":87,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-3.975,0,0],"t":88,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[-2,0,0],"t":89,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[1.984,0,0],"t":91,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[3.962,0,0],"t":92,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[5.91,0,0],"t":93,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[7.806,0,0],"t":94,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[9.63,0,0],"t":95,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[11.359,0,0],"t":96,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[12.983,0,0],"t":97,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[14.483,0,0],"t":98,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[15.838,0,0],"t":99,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[17.036,0,0],"t":100,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[18.056,0,0],"t":101,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[18.878,0,0],"t":102,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[19.489,0,0],"t":103,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[19.87,0,0],"t":104,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[20,0,0],"t":105,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[19.87,0,0],"t":106,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[19.489,0,0],"t":107,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[18.878,0,0],"t":108,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[18.056,0,0],"t":109,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[17.036,0,0],"t":110,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[15.838,0,0],"t":111,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[14.483,0,0],"t":112,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[12.983,0,0],"t":113,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[11.359,0,0],"t":114,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[9.63,0,0],"t":115,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[7.806,0,0],"t":116,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[5.91,0,0],"t":117,"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"s":[3.962,0,0],"t":118,"i":{"x":1,"y":1},"o":{"x":0,"y":0}}],"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":71,"s":[60,60]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0.167]},"t":75,"s":[60,0]},{"t":79,"s":[60,60]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":60,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.164705882353,0.164705882353,0.164705882353,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[50,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Eye Right","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":71,"s":[60,60]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0.167]},"t":75,"s":[60,0]},{"t":79,"s":[60,60]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":60,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.164705882353,0.164705882353,0.164705882353,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-50,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Eye Left","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Ball","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.635294117647,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"String","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":60,"s":[20]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":90,"s":[-20]},{"t":119,"s":[20]}],"ix":10},"p":{"a":0,"k":[540,-8,0],"ix":2,"l":2},"a":{"a":0,"k":[0,-548,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,5]],"o":[[0,0],[0,-5]],"v":[[0,-540],[0,-180]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.705882293103,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Shadow","sr":1,"ks":{"o":{"a":0,"k":25,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":60,"s":[340,960,0],"to":[66.667,0,0],"ti":[0,0,0]},{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":90,"s":[740,960,0],"to":[0,0,0],"ti":[66.667,0,0]},{"t":119,"s":[340,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":60,"s":[90,90,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":75,"s":[110,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":90,"s":[90,90,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":105,"s":[110,110,100]},{"t":119,"s":[90,90,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[300,50],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.211764705882,0.211764705882,0.211764705882,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0}],"markers":[{"tm":60,"cm":"Start","dr":0},{"tm":120,"cm":"End","dr":0}]}');
;// CONCATENATED MODULE: ./src/components/product_sm/Product_SM.tsx












const wineNotFound = ()=>{
    const style = {
        height: 300
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_lottie_react_default()), {
        animationData: wineNotFound_namespaceObject,
        style: style
    });
};
const Product_SM = ()=>{
    const router = (0,router_.useRouter)();
    const [showFilter, setshowFilter] = (0,external_react_.useState)(false);
    //const [curfilter, setCurFilter] = useState(0);
    const wine = (0,external_react_redux_.useSelector)((state)=>state.wine);
    const [curpage, setcurPage] = (0,external_react_.useState)(0);
    const filterurl = router.query;
    (0,external_react_.useEffect)(()=>{
        setcurPage(Number(router.query.page) - 1);
    }, [
        router.query.page
    ]);
    const PageBtn = (0,external_react_.useCallback)(()=>{
        let pagebtns = [];
        for(let i = 0; i < 10; i++){
            let num = Math.floor(curpage / 10) * 10 + i;
            if (num < wine.pageNum / 20) {
                pagebtns.push(/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: {
                        pathname: `/product`,
                        query: {
                            ...filterurl,
                            page: num + 1
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: [
                            (Product_SM_module_default()).pagebtn,
                            num === curpage ? (Product_SM_module_default()).activebtn : ""
                        ].join(" "),
                        children: num + 1
                    })
                }));
            }
        }
        return pagebtns;
    }, [
        curpage,
        wine.pageNum
    ]);
    const SetFilterData = (filterdata)=>{
        //console.log(filterdata);
        if (filterdata) {
            router.push({
                pathname: `/product`,
                query: {
                    page: 1,
                    ...filterdata
                }
            });
        }
    };
    const offFilter = ()=>{
        setshowFilter(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Product_SM_module_default()).ProductWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "maxframe",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Product_SM_module_default()).title,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "PRODUCT"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdFilterAlt, {
                            onClick: ()=>setshowFilter(!showFilter)
                        })
                    ]
                })
            }),
            showFilter && /*#__PURE__*/ jsx_runtime_.jsx(product_sm_ProductFilter, {
                isshow: showFilter,
                SetFilterData: SetFilterData,
                offFilter: offFilter
            }),
            wine.pageNum > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Product_SM_module_default()).ProductCardWrapper,
                        children: wine.data.map((list, index)=>/*#__PURE__*/ jsx_runtime_.jsx(product_sm_ProductCard, {
                                ...list,
                                index: index
                            }, `product_${list.pid}`))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Product_SM_module_default()).pagebtnWrapper,
                        children: [
                            curpage > 9 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (Product_SM_module_default()).BtnLink,
                                href: {
                                    pathname: `/product`,
                                    query: {
                                        page: Math.ceil((curpage - 9) / 10) * 10
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Product_SM_module_default()).prevNextBtn,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdKeyboardArrowLeft, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "이전"
                                        })
                                    ]
                                })
                            }) : "",
                            PageBtn().map((c, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Product_SM_module_default()).pagebtn,
                                    children: c
                                }, `btn_${idx}`)),
                            PageBtn().length < 10 ? "" : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (Product_SM_module_default()).BtnLink,
                                href: {
                                    pathname: `/product`,
                                    query: {
                                        page: Math.ceil((curpage + 1) / 10) * 10 + 1
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Product_SM_module_default()).prevNextBtn,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "다음"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdKeyboardArrowRight, {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: [
                    "maxframe",
                    (Product_SM_module_default()).noWine
                ].join(" "),
                children: [
                    wineNotFound(),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "조건에 맞는 와인이 없습니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        buttontext: "조건 초기화",
                        buttonColor: "main",
                        buttonSize: "m",
                        onClick: ()=>router.push({
                                pathname: "/product",
                                query: {
                                    page: 1
                                }
                            })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const product_sm_Product_SM = (Product_SM);

;// CONCATENATED MODULE: ./src/components/product_hj/ProductList.js


const ProductList = (props)=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("ul", {
            children: /*#__PURE__*/ _jsxs("li", {
                children: [
                    /*#__PURE__*/ _jsx("figure", {
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: props.wineKorName
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "영어제목"
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                children: "서브설명..."
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "로제"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "프랑스"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "기탕트"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "12300won"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const product_hj_ProductList = ((/* unused pure expression or super */ null && (ProductList)));

;// CONCATENATED MODULE: ./src/components/product_hj/Product_HJ.js


const Product_HJ = (props)=>{
    // console.log(props[0])
    //const arr = [props]
    //console.log(arr)
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "maxframe",
            children: /*#__PURE__*/ _jsx("div", {
                className: "sub_p_wrap",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "sub_p_title",
                    children: [
                        /*#__PURE__*/ _jsx("h2", {
                            children: "PRODUCT"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: "원하는 상품을 찾아보세요"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const product_hj_Product_HJ = ((/* unused pure expression or super */ null && (Product_HJ)));

;// CONCATENATED MODULE: ./src/components/dummydata/wine_add_sweet.json
const wine_add_sweet_namespaceObject = [];
// EXTERNAL MODULE: ./src/util/Seo.js
var Seo = __webpack_require__(8606);
// EXTERNAL MODULE: ./src/slice/wineSlice.js
var wineSlice = __webpack_require__(6098);
// EXTERNAL MODULE: ./src/components/ui/Loading.js + 1 modules
var Loading = __webpack_require__(5628);
;// CONCATENATED MODULE: ./src/pages/product/index.js









//Product_SM
const product = ({ query  })=>{
    const { user , wine  } = (0,external_react_redux_.useSelector)((state)=>state);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        const queryurl = decodeURI(window.location.search);
        const queryarr = queryurl.split("&");
        queryarr.shift();
        const counturl = queryarr.length > 0 ? `?${queryarr.join("&")}` : "";
        const id = localStorage.getItem("id");
        dispatch((0,wineSlice/* GetList */.GJ)({
            userId: id !== "null" ? id : -1,
            queryurl: queryurl
        }));
        dispatch((0,wineSlice/* GetCount */.qb)({
            counturl: counturl
        }));
    }, [
        query
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* default */.Z, {
                title: "Product"
            }),
            !wine.isLoadding ? /*#__PURE__*/ jsx_runtime_.jsx(product_sm_Product_SM, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    padding: "80px 0px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {
                    height: 700
                })
            })
        ]
    });
};
/* harmony default export */ const pages_product = (product);
function getServerSideProps({ query  }) {
    return {
        props: {
            query
        }
    };
} // export async function getServerSideProps() {
 //   //여기에 서버에서 받는 코드 작성
 //   const pid = localStorage.getItem("pid");
 //   return {
 //     props: { list },
 //   };
 // }
 //Product_HJ
 // const product = () => {
 //   const router = useRouter();
 //   const { food, body, sweet, sour } = router.query;
 //   console.log('food: ', food);
 //   console.log('body: ', body);
 //   console.log('sweet: ', sweet);
 //   console.log('sour: ', sour);
 //   // console.log(data);
 //   return <Product_HJ {...data} />;
 // }
 //export default product;


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6164:
/***/ ((module) => {

"use strict";
module.exports = require("lottie-react");

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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,749,631,109,98], () => (__webpack_exec__(6922)));
module.exports = __webpack_exports__;

})();