import React, { useEffect, useState } from "react";
import styled from "./RankProd.module.css";
import { IoWater, IoWaterOutline } from "react-icons/io5";
import rank from "../dummydata/rank_list_dummy.json";

const tab = ["레드", "화이트", "스파클링", "주정강화"];

const RankProd = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [rankList, setRankList] = useState([]);

  useEffect(() => {
    const newrank = rank.filter((data) => data.winetype === tab[currentTab]);
    console.log(newrank);
    //setRankList(newrank);
  }, [currentTab]);

  return (
    <section>
      <div className="maxframe">
        <div className="sub_tit__">
          <h4>카테고리별 랭킹</h4>
          <span>CATECORY’S RANKING</span>
        </div>
      </div>
      <div>
        <div className={styled.tablist}>
          <ul className={styled.tablistinner}>
            {tab.map((tabname, index) => (
              <li
                key={tabname}
                className={index === currentTab ? styled.active : ""}
                onClick={() => setCurrentTab(index)}
              >
                {tabname}
              </li>
            ))}
          </ul>
        </div>
        <div className={styled.tabmenu_wrap}></div>
      </div>
      <div></div>
    </section>
  );
};

export default RankProd;
