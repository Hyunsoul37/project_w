import React, { useState } from 'react';
import styled from './RankProd.module.css'
const menuArr = [
  {
    name: '레드',
    content1: '레드 랭킹1 사진 넣기',
    content2: '레드 랭킹2 사진 넣기',
    content3: '레드 랭킹3 사진 넣기',
    content4: '레드 랭킹4 사진 넣기',
    content5: '레드 랭킹5 사진 넣기',
  },
  {
    name: '화이트',
    content1: '화이트 랭킹1 사진 넣기',
    content2: '화이트 랭킹2 사진 넣기',
    content3: '화이트 랭킹3 사진 넣기',
    content4: '화이트 랭킹4 사진 넣기',
    content5: '화이트 랭킹5 사진 넣기',
  },
  {
    name: '스파클링',
    content1: '스파클링 랭킹1 사진 넣기',
    content2: '스파클링 랭킹2 사진 넣기',
    content3: '스파클링 랭킹3 사진 넣기',
    content4: '스파클링 랭킹4 사진 넣기',
    content5: '스파클링 랭킹5 사진 넣기',
  },
  {
    name: '주정강화',
    content1: '주정강화 랭킹1 사진 넣기',
    content2: '주정강화 랭킹2 사진 넣기',
    content3: '주정강화 랭킹3 사진 넣기',
    content4: '주정강화 랭킹4 사진 넣기',
    content5: '주정강화 랭킹5 사진 넣기',
  },
];

const RankProd = () => {
  const [currentTab, clickTab] = useState(0);
  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <section>
      <div className='maxframe'>
        <div className='sub_tit__'>
          <h4>카테고리별 랭킹</h4>
          <span>CATECORY’S RANKING</span>
        </div>
        <div>
          <div className={styled.tablist}>
            <ul>
              {menuArr.map((el, index) => (
                <li
                  className={index === currentTab ? 'submenu focused' : 'submenu'}
                  onClick={() => selectMenuHandler(index)}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styled.tabmenu_wrap}>
            <div className={styled.rank01}>
              <p>{menuArr[currentTab].content1}</p>
              <div className="text_area">
                <span>Rank01</span>
                <p>블라블라숑 레드01</p>
                <p className="price">12,900</p>
              </div>
            </div>
            <ul className={styled.diffrank}>
              <li>
                <p>{menuArr[currentTab].content2}</p>
                <span>Ranking 02</span>
                <p>블라블라숑 레드02</p>
                <p className="price">12,900</p>
              </li>
              <li>
                <p>{menuArr[currentTab].content3}</p>
                <span>Ranking 03</span>
                <p>블라블라숑 레드03</p>
                <p className="price">12,900</p>
              </li>
              <li>
                <p>{menuArr[currentTab].content4}</p>
                <span>Ranking 04</span>
                <p>블라블라숑 레드04</p>
                <p className="price">12,900</p>
              </li>
              <li>
                <p>{menuArr[currentTab].content5}</p>
                <span>Ranking 05</span>
                <p>블라블라숑 레드05</p>
                <p className="price">12,900</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankProd;
