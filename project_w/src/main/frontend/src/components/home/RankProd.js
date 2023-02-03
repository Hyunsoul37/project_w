import React, { useState } from "react";

const RankProd = () => {
    const [currentTab, clickTab] = useState(0);
    const menuArr = [
        {
            name: '레드',
            content1: '레드 랭킹1 사진 넣기',
            content2: '레드 랭킹2 사진 넣기',
            content3: '레드 랭킹3 사진 넣기',
            content4: '레드 랭킹4 사진 넣기',
            content5: '레드 랭킹5 사진 넣기'
        },
        {
            name: '화이트',
            content1: '화이트 랭킹1 사진 넣기',
            content2: '화이트 랭킹2 사진 넣기',
            content3: '화이트 랭킹3 사진 넣기',
            content4: '화이트 랭킹4 사진 넣기',
            content5: '화이트 랭킹5 사진 넣기'
        },
        {
            name: '스파클링',
            content1: '스파클링 랭킹1 사진 넣기',
            content2: '스파클링 랭킹2 사진 넣기',
            content3: '스파클링 랭킹3 사진 넣기',
            content4: '스파클링 랭킹4 사진 넣기',
            content5: '스파클링 랭킹5 사진 넣기'
        },
        {
            name: '주정강화',
            content1: '주정강화 랭킹1 사진 넣기',
            content2: '주정강화 랭킹2 사진 넣기',
            content3: '주정강화 랭킹3 사진 넣기',
            content4: '주정강화 랭킹4 사진 넣기',
            content5: '주정강화 랭킹5 사진 넣기'
        },
    ];
    const selectMenuHandler = (index) => {
        clickTab(index);
    };
    return (
        <>
            <div>
                <div>
                    <ul style={{ display: 'flex', justifyContent: 'center' }}>
                        {menuArr.map((el, index) => (
                            <li
                                className={index === currentTab ? "submenu focused" : "submenu"}
                                onClick={() => selectMenuHandler(index)}
                                style={{ width: '100px', margin: '0 5px', cursor: 'pointer' }}
                            >
                                {el.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tab_wrap" style={{ width: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ width: '500px', height: '500px', backgroundColor: 'red' }} >
                        <p>{menuArr[currentTab].content1}</p>
                        <div className="text_area">
                            <span>Ranking 01</span>
                            <p>블라블라숑 레드01</p>
                            <p className="price">12,900</p>

                        </div>
                    </div>
                    <ul style={{ width: '500px', display: 'flex', flexWrap: 'wrap' }}>
                        <li style={{ width: '250px', height: '250px', backgroundColor: 'tomato' }} >
                            <p>{menuArr[currentTab].content2}</p>
                            <span>Ranking 02</span>
                            <p>블라블라숑 레드02</p>
                            <p className="price">12,900</p>
                        </li>
                        <li style={{ width: '250px', height: '250px', backgroundColor: 'yellow' }}>
                            <p>{menuArr[currentTab].content3}</p>
                            <span>Ranking 03</span>
                            <p>블라블라숑 레드03</p>
                            <p className="price">12,900</p>
                        </li>
                        <li style={{ width: '250px', height: '250px', backgroundColor: 'skyblue' }}>
                            <p>{menuArr[currentTab].content4}</p>
                            <span>Ranking 04</span>
                            <p>블라블라숑 레드04</p>
                            <p className="price">12,900</p>
                        </li>
                        <li style={{ width: '250px', height: '250px', backgroundColor: 'purple' }}>
                            <p>{menuArr[currentTab].content5}</p>
                            <span>Ranking 05</span>
                            <p>블라블라숑 레드05</p>
                            <p className="price">12,900</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default RankProd;