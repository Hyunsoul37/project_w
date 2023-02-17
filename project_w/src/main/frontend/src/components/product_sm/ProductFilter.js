import { useState } from 'react';
import styled from './ProductFilter.module.css';
import { winetype, country, grape } from './filterindex';
const score = [1, 2, 3, 4, 5];
const pricearr = [0, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
const ProductFilter = (props) => {
  return (
    <div
      className={[
        styled.FilterWrapper,
        props.isshow ? styled.offfilter : '',
      ].join(' ')}
    >
      <div className={['maxframe', styled.filter].join(' ')}>
        <div className={styled.inputbox}>
          <p>와인종류</p>
          {winetype.map((data, idx) => (
            <label key={`F_winetype_${idx}`}>
              <input
                type="checkbox"
                name="winetype"
                value={data}
              />
              {data}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>바디</p>
          {score.map((num, idx) => (
            <label key={`F_body_${idx}`}>
              <input
                type="checkbox"
                name="body"
                value={num}
              />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>당도</p>
          {score.map((num, idx) => (
            <label key={`F_sweet_${idx}`}>
              <input
                type="checkbox"
                name="sweet"
                value={num}
              />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>산미</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <input
                type="checkbox"
                name="acidity"
                value={num}
              />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>탄닌</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <input
                type="checkbox"
                name="tannins"
                value={num}
              />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>가격</p>
          {pricearr.map((p, idx) => (
            <label key={`Price${idx}`}>
              <input
                key={p}
                type="checkbox"
                name="price"
                value={p}
              />
              {idx === 0
                ? `${pricearr[idx + 1].toLocaleString('ko-KR')}원이하`
                : idx === pricearr.length - 1
                ? `${pricearr[idx - 1].toLocaleString('ko-KR')}원이상`
                : `${p.toLocaleString('ko-KR')}원`}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>생산국가</p>
          {country.map((data, idx) => (
            <label key={`F_country${idx}`}>
              <input
                type="checkbox"
                name="country"
                value={data}
              />
              {data}
            </label>
          ))}
        </div>
        {/* <div className={styled.inputbox}>
          <p>포도품종</p>
          {grape.map((data) => (
            <label>
              <input
                type="checkbox"
                name="grape"
                value={data}
              />
              {data}
            </label>
          ))}
        </div> */}
        <div className={styled.buttonWrap}>
          <button>초기화</button>
          <button>적용</button>
        </div>
      </div>
    </div>
  );
};
export default ProductFilter;
