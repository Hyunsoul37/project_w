import React, { useState } from 'react';
import styled from './RankProd.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { IoWater, IoWaterOutline } from 'react-icons/io5';
import { faDroplet } from "@fortawesome/free-solid-svg-icons";


const menuArr = [
  {
    name: '레드',
    content1: {
      pdimg: '/images/main_flow6.png',
      pdname: '블라블라숑 레드01',
      pdprice: '12,900',
      pdtsweet: 3,
      pdacid: '5',
    },
    content2: {
      pdimg: '/images/main_flow5.png',
      pdname: '블라블라숑 레드02',
      pdprice: '33,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content3: {
      pdimg: '/images/main_flow4.png',
      pdname: '블라블라숑 레드03',
      pdprice: '12,900',
      pdtsweet: 1,
      pdacid: '',
    },
    content4: {
      pdimg: '/images/main_flow3.png',
      pdname: '블라블라숑 레드04',
      pdprice: '12,900',
      pdtsweet: 4,
      pdacid: '',
    },
    content5: {
      pdimg: '/images/main_flow2.png',
      pdname: '블라블라숑 레드05',
      pdprice: '12,900',
      pdtsweet: 2,
      pdacid: '',
    },
  },
  {
    name: '화이트',
    content1: {
      pdimg: '/images/main_flow1.png',
      pdname: '블라블라숑 화이트01',
      pdprice: '42,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content2: {
      pdimg: '/images/main_flow2.png',
      pdname: '블라블라숑 화이트02',
      pdprice: '42,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content3: {
      pdimg: '/images/main_flow3.png',
      pdname: '블라블라숑 화이트03',
      pdprice: '42,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content4: {
      pdimg: '/images/main_flow4.png',
      pdname: '블라블라숑 화이트04',
      pdprice: '42,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content5: {
      pdimg: '/images/main_flow5.png',
      pdname: '블라블라숑 화이트05',
      pdprice: '42,900',
      pdtsweet: 2,
      pdacid: '',
    },
  },
  {
    name: '스파클링',
    content1: {
      pdimg: '/images/main_flow5.png',
      pdname: '블라블라숑 스파클링1',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content2: {
      pdimg: '/images/main_flow4.png',
      pdname: '블라블라숑 스파클링2',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content3: {
      pdimg: '/images/main_flow3.png',
      pdname: '블라블라숑 스파클링3',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content4: {
      pdimg: '/images/main_flow2.png',
      pdname: '블라블라숑 스파클링4',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content5: {
      pdimg: '/images/main_flow1.png',
      pdname: '블라블라숑 스파클링5',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
  },
  {
    name: '주정강화',
    content1: {
      pdimg: '/images/main_flow1.png',
      pdname: '블라블라숑 주정강화1',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content2: {
      pdimg: '/images/main_flow2.png',
      pdname: '블라블라숑 주정강화2',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content3: {
      pdimg: '/images/main_flow3.png',
      pdname: '블라블라숑 주정강화3',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content4: {
      pdimg: '/images/main_flow4.png',
      pdname: '블라블라숑 주정강화4',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
    content5: {
      pdimg: '/images/main_flow5.png',
      pdname: '블라블라숑 주정강화5',
      pdprice: '32,900',
      pdtsweet: 2,
      pdacid: '',
    },
  },
];

const RankProd = () => {
  //카테고리 탭 메뉴
  const [currentTab, clickTab] = useState(0);
  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  //당도,산미 아이콘
  const sweetDraw=(score)=>{
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

  return (
    <section>
      <div className='maxframe'>
        <div className='sub_tit__'>
          <h4>카테고리별 랭킹</h4>
          <span>CATECORY’S RANKING</span>
        </div>
        <div>
          <div className={styled.tablist}>
            <ul className={styled.tablistinner}>
              {menuArr.map((el, index) => (
                <li
                  className={index === currentTab ? styled.active : ''}
                  onClick={() => selectMenuHandler(index)}
                  key={el.name}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styled.tabmenu_wrap}>
            <div className={styled.rank01}>
              <p>
                <img src={menuArr[currentTab].content1.pdimg} alt="" />
              </p>
              <div className={styled.txt_area}>
                <div className={styled.rank_txt}>
                  <span>RANK</span>
                  <p>01</p>
                </div>
                <p>{menuArr[currentTab].content1.pdname}</p>
                <p className="price">{menuArr[currentTab].content1.pdprice} won</p>
              </div>
              {menuArr.map((data) => (
                <div className={styled.tasty_area} key={data.pdtsweet}>
                  <div className={styled.inner}>
                    <p>당도</p>
                    <ul>
                      {sweetDraw(data.pdtsweet).map((pdtsweet)=>(
                        <li key={pdtsweet}>{pdtsweet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styled.inner}>
                    <p>산미</p>
                    <ul>
                      {sweetDraw(data.pdtsweet).map((pdtsweet, idx)=>(
                        <li key={`pdtsweet_${idx}`}>{pdtsweet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <ul className={styled.diffrank}>
              <li>
                <p>
                  <img src={menuArr[currentTab].content2.pdimg} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>02</p>
                  </div>
                  <p>{menuArr[currentTab].content2.pdname}</p>
                  <p className="price">{menuArr[currentTab].content2.pdprice} won</p>
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
                  <img src={menuArr[currentTab].content3.pdimg} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>03</p>
                  </div>
                  <p>{menuArr[currentTab].content3.pdname}</p>
                  <p className="price">{menuArr[currentTab].content3.pdprice} won</p>
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
                  <img src={menuArr[currentTab].content4.pdimg} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>04</p>
                  </div>
                  <p>{menuArr[currentTab].content4.pdname}</p>
                  <p className="price">{menuArr[currentTab].content4.pdprice} won</p>
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
                  <img src={menuArr[currentTab].content5.pdimg} alt="" />
                </p>
                <div className={styled.txt_area}>
                  <div className={styled.rank_txt}>
                    <span>RANK</span>
                    <p>05</p>
                  </div>
                  <p>{menuArr[currentTab].content5.pdname}</p>
                  <p className="price">{menuArr[currentTab].content5.pdprice} won</p>
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
