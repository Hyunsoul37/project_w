import React, { useEffect, useState } from 'react';
import styled from './RankProd.module.css';
import { IoWater, IoWaterOutline } from 'react-icons/io5';
import rank from '../util/rank_list_dummy.json';

const tab = ['레드', '화이트', '스파클링', '주정강화'];

const RankProd = () => {
   const [currentTab, setCurrentTab] = useState(0);
   const [rankList, setRankList] = useState([]);
   useEffect(() => {
      const newrank = rank.filter((data) => data.winetype === tab[currentTab]);
      setRankList(newrank);
   }, [currentTab]);


   //당도 아이콘
   const sweetDraw = (score) => {
      let i = 0;
      let pdtsweet = [];
      let num = Math.round(score);
      for (i = 0; i < num; i++) {
         pdtsweet.push(<IoWater />);
      }
      for (i = 0; i < 5 - num; i++) {
         pdtsweet.push(<IoWaterOutline />);
      }
      return pdtsweet;
   }
   //산미 아이콘
   const acidDraw = (score) => {
      let i = 0;
      let pdacid = [];
      let num = Math.round(score);
      for (i = 0; i < num; i++) {
         pdacid.push(<IoWater />);
      }
      for (i = 0; i < 5 - num; i++) {
         pdacid.push(<IoWaterOutline />);
      }
      return pdacid;
   }

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
                           className={index === currentTab ? styled.active : ''}
                           onClick={() => setCurrentTab(index)}
                        >
                           {tabname}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className={styled.tabmenu_wrap}></div>
            </div>
            <div className={styled.rank_wrap}>
               {rankList.map((data, index) => (
                  <div id={index} key={index} className={styled.rankcard}>
                     <figure>
                        <img src={data.image} alt={`${data.pdname}_썸네일`} />
                     </figure>
                     <div className={styled.txt_area}>
                        <div className={styled.rank_txt}>
                           <span>RANK</span>
                           <p>{`0${index + 1}`}</p>
                        </div>
                        <p className={styled.winename}>{data.pdname}</p>
                        <p className={styled.price}>{data.pdprice}</p>
                     </div>
                     <div className={styled.tasty_area}>
                        <div className={styled.inner}>
                           <p>당도</p>
                           <div>
                              {sweetDraw(data.sweetness)}
                           </div>
                        </div>
                        <div className={styled.inner}>
                           <p>산도</p>
                           <div>{acidDraw(data.acidity)}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default RankProd;