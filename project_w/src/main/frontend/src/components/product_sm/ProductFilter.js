import { useState } from 'react';
import styled from './ProductFilter.module.css';
import { winetype, country, grape } from './filterindex';
const score = [1, 2, 3, 4, 5];

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
              <input type="checkbox" name="winetype" value={data} />
              {data}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>바디</p>
          {score.map((num, idx) => (
            <label key={`F_body_${idx}`}>
              <input type="checkbox" name="body" value={num} />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>당도</p>
          {score.map((num, idx) => (
            <label key={`F_sweet_${idx}`}>
              <input type="checkbox" name="sweet" value={num} />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>산미</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <input type="checkbox" name="acidity" value={num} />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>탄닌</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <input type="checkbox" name="tannins" value={num} />
              {num}
            </label>
          ))}
        </div>
        <div className={styled.inputbox}>
          <p>가격</p>
          <input
            type="range"
            min={30000}
            max={100000}
            step={10000}
            list="tickmarks"
          />
          <datalist id="tickmarks" className={styled.rangelabel}>
            <option value="0" label="0원"></option>
            <option value="30000" label="30,000원"></option>
            <option value="40000" label="40,000원"></option>
            <option value="50000" label="50,000원"></option>
            <option value="60000" label="60,000원"></option>
            <option value="70000" label="70,000원"></option>
            <option value="80000" label="80,000원"></option>
            <option value="90000" label="90,000원"></option>
            <option value="100000" label="100,000원"></option>
          </datalist>
        </div>
        <div className={styled.inputbox}>
          <p>생산국가</p>
          {country.map((data, idx) => (
            <label key={`F_country${idx}`}>
              <input type="checkbox" name="country" value={data} />
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
