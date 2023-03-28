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

import Lottie from "lottie-react";
import LottieData from "../ui/wineNotFound.json";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const wineNotFound = () => {
  const style = {
    height: 300,
  };

  return <Lottie animationData={LottieData} style={style} />;
};

export interface filterdataState {
  type: number[];
  body: number[];
  sweet: number[];
  acidity: number[];
  tannin: number[];
  maxPrice: number;
  minPrice: number;
  country: string[];
}

const Product_SM = () => {
  const router = useRouter();
  const [showFilter, setshowFilter] = useState(false);
  //const [curfilter, setCurFilter] = useState(0);
  const wine = useSelector((state: RootState) => state.wine);
  const [curpage, setcurPage] = useState<number>(0);

  const filterurl = router.query;

  useEffect(() => {
    setcurPage(Number(router.query.page) - 1);
  }, [router.query.page]);

  const PageBtn = useCallback(() => {
    let pagebtns: ReactElement[] = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(curpage / 10) * 10 + i;
      if (num < wine.pageNum / 20) {
        pagebtns.push(
          <Link
            href={{
              pathname: `/product`,
              query: { ...filterurl, page: num + 1 },
            }}
          >
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
  }, [curpage, wine.pageNum]);

  const SetFilterData = (filterdata: filterdataState) => {
    //console.log(filterdata);
    if (filterdata) {
      router.push({ pathname: `/product`, query: { page: 1, ...filterdata } });
    }
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

      {wine.pageNum > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={styled.ProductCardWrapper}>
            {wine.data.map((list, index) => (
              <ProductCard
                key={`product_${list.pid}`}
                {...list}
                index={index}
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
      ) : (
        <div className={["maxframe", styled.noWine].join(" ")}>
          {wineNotFound()}
          <p>조건에 맞는 와인이 없습니다.</p>
          <Button
            buttontext="조건 초기화"
            buttonColor="main"
            buttonSize="m"
            onClick={() =>
              router.push({ pathname: "/product", query: { page: 1 } })
            }
          />
        </div>
      )}
    </div>
  );
};
export default Product_SM;
