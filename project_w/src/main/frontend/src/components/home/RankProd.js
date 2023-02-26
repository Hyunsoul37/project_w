import React, { useState } from 'react';
import styled from './RankProd.module.css'
import { IoWater, IoWaterOutline } from 'react-icons/io5';


const menus = [
   {
      winetype: '레드',
      image: '/images/main_flow6.png',
      pdname: '블라블라숑 레드1',
      pdprice: '12,900',
      sweetness: 1,
      acidity: 3,
   },
   {
      winetype: '주정강화',
      image: '/images/main_flow6.png',
      pdname: '블라블라숑 주정강화2',
      pdprice: '12,900',
      sweetness: 3,
      acidity: 2,
   },
   {
      winetype: '화이트',
      image: '/images/main_flow6.png',
      pdname: '블라블라숑 화이트4',
      pdprice: '12,900',
      sweetness: 3,
      acidity: 2,
   },
   {
      winetype: '스파클링',
      image: '/images/main_flow6.png',
      pdname: '블라블라숑 스파클링0232',
      pdprice: '12,900',
      sweetness: 1,
      acidity: 2,
   },
   {
      winetype: '레드',
      image: '/images/main_flow6.png',
      pdname: '블라블라숑 레드2342',
      pdprice: '12,900',
      sweetness: 3,
      acidity: 4,
   },
   {
      winetype: '화이트',
      image: '/images/main_flow6.png',
      pdname: '블라블라숑 화이트2098',
      pdprice: '12,900',
      sweetness: 3,
      acidity: 3,
   },
];

const redW = menus.filter((elm) => elm.winetype === '레드');
const whiteW = menus.filter((elm) => elm.winetype === '화이트');
const spakW = menus.filter((elm) => elm.winetype === '스파클링');
const strongW = menus.filter((elm) => elm.winetype === '주정강화');

console.log(redW, whiteW, spakW, strongW);

const RankProd = () => {
   return (
      <section>
         <div className='maxframe'>
            <div className='sub_tit__'>
               <h4>카테고리별 랭킹</h4>
               <span>CATECORY’S RANKING</span>
            </div>
         </div>
         <div>
            <div className={styled.tablist}>
               <ul className={styled.tablistinner}>
                  <li>레드</li>
                  <li>화이트</li>
                  <li>스파클링</li>
                  <li>주정강화</li>
               </ul>
            </div>
            <div className={styled.tabmenu_wrap}>

            </div>
         </div>
         <div>

         </div>
      </section>
   )
};


export default RankProd;
