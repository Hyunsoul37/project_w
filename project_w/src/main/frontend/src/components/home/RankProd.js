import React, { useState } from 'react';
import styled from './RankProd.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDroplet } from "@fortawesome/free-solid-svg-icons";


const menuArr = [
  {
    name: '레드',
    content1: '/images/main_flow6.png',
    content2: '/images/main_flow5.png',
    content3: '/images/main_flow4.png',
    content4: '/images/main_flow3.png',
    content5: '/images/main_flow2.png'
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
              <p>
                <img src={menuArr[currentTab].content1} alt="" />
              </p>
              <div className={styled.txt_area}>
                <div className={styled.rank_txt}>
                  <span>RANK</span>
                  <p>01</p>
                </div>
                <p>블라블라숑 레드01</p>
                <p className="price">12,900</p>
              </div>
              <div className={styled.tasty_area}>
                <div className={styled.inner}>
                  <p>당도</p>
                  <ul>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                  </ul>
                </div>
                <div className={styled.inner}>
                  <p>산미</p>
                  <ul>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styled.tasty_area}>
              <div className={styled.inner}>
                <p>당도</p>
                <ul>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                </ul>
              </div>
              <div className={styled.inner}>
                <p>산미</p>
                <ul>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                  <li><FontAwesomeIcon icon={faDroplet} /></li>
                </ul>
              </div>
            </div>
            <ul className={styled.diffrank}>
              <li>
                <p>
                  <img src={menuArr[currentTab].content2} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>02</p>
                  </div>
                  <p>블라블라숑 레드02</p>
                  <p className="price">12,900</p>
                </div>
                <div className={styled.tasty_area}>
                  <div className={styled.inner}>
                    <p>당도</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                  <div className={styled.inner}>
                    <p>산미</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p>
                  <img src={menuArr[currentTab].content3} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>03</p>
                  </div>
                  <p>블라블라숑 레드03</p>
                  <p className="price">12,900</p>
                </div>
                <div className={styled.tasty_area}>
                  <div className={styled.inner}>
                    <p>당도</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                  <div className={styled.inner}>
                    <p>산미</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p>
                  <img src={menuArr[currentTab].content4} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>04</p>
                  </div>
                  <p>블라블라숑 레드04</p>
                  <p className="price">12,900</p>
                </div>
                <div className={styled.tasty_area}>
                  <div className={styled.inner}>
                    <p>당도</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                  <div className={styled.inner}>
                    <p>산미</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p>
                  <img src={menuArr[currentTab].content5} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>05</p>
                  </div>
                  <p>블라블라숑 레드05</p>
                  <p className="price">12,900</p>
                </div>
                <div className={styled.tasty_area}>
                  <div className={styled.inner}>
                    <p>당도</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                  <div className={styled.inner}>
                    <p>산미</p>
                    <ul>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                      <li><FontAwesomeIcon icon={faDroplet} /></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankProd;
