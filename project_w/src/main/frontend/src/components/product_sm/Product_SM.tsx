import ProductFilter from "./ProductFilter";
import {
  MdFilterAlt,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import styled from "./Product_SM.module.css";
import { ReactElement, useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { wineState } from "./productTypes";

// const winetypeTab = [
//   'ALL',
//   '레드',
//   '화이트',
//   '로제',
//   '디저트',
//   '스파클링',
//   '주정강화',
// ];

export interface filterdataState {
  wineType: string[];
  winebody: number[];
  wineSweet: number[];
  wineAcidity: number[];
  wineTannin: number[];
  winePrice: string[]; // 백엔드랑 연결할때 number로 변경 할 것
  wineCountry: string[];
}

const Product_SM: React.FC<{ list: wineState[] }> = (props) => {
  const router = useRouter();
  const [showFilter, setshowFilter] = useState(false);
  //const [curfilter, setCurFilter] = useState(0);
  const [winelist, setWinelist] = useState<wineState[]>([]);
  const [curpage, setcurPage] = useState<number>(0);
  const fulldata = props.list;

  useEffect(() => {
    setWinelist(props.list);
  }, []);

  useEffect(() => {
    setcurPage(Number(router.query.page) - 1);
  }, [router.query.page]);

  useEffect(() => {
    let newwinelist: wineState[] = [];
    for (let i = 0; i < 20; i++) {
      if (fulldata[i + curpage * 20]) {
        newwinelist.push(fulldata[i + curpage * 20]);
      }
    }
    setWinelist(newwinelist);
  }, [curpage]);

  const PageBtn = useCallback(() => {
    let pagebtns: ReactElement[] = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(curpage / 10) * 10 + i;
      if (num < fulldata.length / 20) {
        pagebtns.push(
          <Link href={{ pathname: `/product`, query: { page: num + 1 } }}>
            <span
              className={[
                styled.pagebtn,
                num === curpage ? styled.activebtn : "",
              ].join(" ")}
            >
              {num + 1}
            </span>
          </Link>
        );
      }
    }
    return pagebtns;
  }, [curpage]);

  const SetFilterData = (filterdata: filterdataState) => {
    console.log(filterdata);
  };
  const offFilter = () => {
    setshowFilter(false);
  };

  return (
    <div className={styled.ProductWrapper}>
      <div className="maxframe">
        <div className={styled.title}>
          <h4>PRODUCT</h4>
          <MdFilterAlt onClick={() => setshowFilter(!showFilter)} />
        </div>
      </div>

      {showFilter && (
        <ProductFilter
          isshow={showFilter}
          SetFilterData={SetFilterData}
          offFilter={offFilter}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styled.ProductCardWrapper}>
          {winelist.map((list) => (
            <ProductCard
              key={`product_${list.winePid}`}
              {...list}
              userLike={list.userLike}
            />
          ))}
        </div>

        <div className={styled.pagebtnWrapper}>
          {curpage > 9 ? (
            <Link
              href={{
                pathname: `/product`,
                query: { page: Math.ceil((curpage - 9) / 10) * 10 },
              }}
            >
              <div className={styled.prevNextBtn}>
                <MdKeyboardArrowLeft />
                <span>이전</span>
              </div>
            </Link>
          ) : (
            ""
          )}
          {PageBtn().map((c, idx) => (
            <div key={`btn_${idx}`} className={styled.pagebtn}>
              {c}
            </div>
          ))}
          {PageBtn().length < 10 ? (
            ""
          ) : (
            <Link
              href={{
                pathname: `/product`,
                query: { page: Math.ceil((curpage + 1) / 10) * 10 + 1 },
              }}
            >
              <div className={styled.prevNextBtn}>
                <span>다음</span>
                <MdKeyboardArrowRight />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product_SM;

//혹시 나중에 와인 종류를 따로 밖으로 빼는 상황을 대비해서 남겨두는 코드...
// const WineTabHandler = (index: number) => () => {
//   setCurFilter(index);
// };

/*
  useEffect(() => {
    if (curfilter !== 0) {
      let newWinelist: ProductCardState[] = [];
      data.map((winelist) => {
        if (winelist.wineType === winetypeTab[curfilter]) {
          newWinelist.push({ ...winelist });
        }
      });
      setWinelist(newWinelist);
    } else {
      setWinelist(data);
    }
  }, [curfilter]);*/

{
  /* <div className={styled.winetypetab}>
          {winetypeTab.map((data, index) => (
            <span
              key={`winetype_${index}`}
              onClick={WineTabHandler(index)}
              className={index === curfilter ? styled.activetab : ''}
            >
              {data}
            </span>
          ))}
        </div> */
}
