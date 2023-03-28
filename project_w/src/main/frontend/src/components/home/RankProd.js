import React, { useEffect, useState } from "react";
import styled from "./RankProd.module.css";
import { IoWater, IoWaterOutline } from "react-icons/io5";
import rank from "../dummydata/rank_list_dummy.json";
import Image from "next/image";
import { drawStar } from "../util/util";
import Link from "next/link";

const tab = ["레드", "화이트", "스파클링", "주정강화"];

const RankProd = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [rankList, setRankList] = useState([]);
  const [fullRank, setFullRank] = useState(props);

  useEffect(() => {
    setRankList(Object.values(fullRank)[currentTab]);
  }, [currentTab]);

  return (
    <section>
      <div className="maxframe">
        <div className="sub_tit__">
          <h4>카테고리별 랭킹</h4>
          <span>CATECORY’S RANKING</span>
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
        </div>

        <div className={styled.rank_wrap}>
          {rankList.map((data, index) => (
            <Link
              href={{
                pathname: `/product/detail/${data.korName}`,
                query: {
                  id: data.pid,
                  winename: data.korName,
                },
              }}
            >
              <div id={index} key={index} className={styled.rankcard}>
                <figure>
                  <Image
                    width={index === 0 ? 500 : 217}
                    height={index === 0 ? 500 : 217}
                    src={data.imageUrl}
                    alt={`${data.pdname}_썸네일`}
                  />
                </figure>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>{`0${index + 1}`}</p>
                  </div>
                  <p
                    className={[
                      styled.winename,
                      index > 0 ? styled.smallWinename : "",
                    ].join(" ")}
                  >
                    {data.korName}
                  </p>
                  <p className={styled.price}>{data.price}</p>
                </div>
                <div className={styled.tasty_area}>
                  <div className={styled.inner}>
                    <p>당도</p>
                    <div>
                      {drawStar(data.sweet, <IoWater />, <IoWaterOutline />)}
                    </div>
                  </div>
                  <div className={styled.inner}>
                    <p>산도</p>
                    <div>
                      {drawStar(data.acidity, <IoWater />, <IoWaterOutline />)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RankProd;

// Hyojin
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
