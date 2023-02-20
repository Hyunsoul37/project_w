import { useEffect, useState } from 'react';
import styled from './ProductFilter.module.css';
import { winetype, country, grape } from './filterindex';
import { filterdataState } from './Product_SM';
import FilterInput from './FilterInput';
const score = [1, 2, 3, 4, 5];
const pricearr = [0, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];

interface FilterPropsState{
  isshow:boolean;
  SetFilterData:(data:filterdataState)=>void;
  offFilter:()=>void;
}

const ProductFilter:React.FC<FilterPropsState> = (props) => {
  const[type, setWineType] = useState<string[]>([]);
  const[body,setbody]=useState<number[]>([]);
  const[sweet,setsweet]=useState<number[]>([]);
  const[acidity,setAcidity]=useState<number[]>([]);
  const[tannin,setTannin]=useState<number[]>([]);
  const[price, setPrice] = useState<string[]>([]);
  const[makeCountry, setMakeCountry] = useState<string[]>([]);

  useEffect(() => {
    const wrapper = document.getElementById('Filter') as HTMLElement;
    let timer = null;
    if (!props.isshow) {
      timer = setTimeout(() => {
        wrapper.style.display = 'none';
      }, 500);
    } else {
      wrapper.style.display = 'block';
    }
  }, [props.isshow]);

  const FilterSubmitHandler=()=>{
    props.SetFilterData({
      wineType:type,
      winebody:body,
      wineSweet:sweet,
      wineAcidity:acidity,
      wineTannin:tannin,
      winePrice:price,
      wineCountry:makeCountry
    })
    props.offFilter();
  }

  const Reset=()=>{
    setWineType([]);
    setbody([]);
    setsweet([]);
    setAcidity([]);
    setTannin([]);
    setPrice([]);
    setMakeCountry([]);
  }

  return (
    <div
      id="Filter"
      className={[
        styled.FilterWrapper,
        props.isshow ? styled.showfilter : styled.offfilter,
      ].join(' ')}
    >
      <div className={['maxframe', styled.filter].join(' ')}>
        <div className={styled.inputbox}>
          <p>와인종류</p>
          {winetype.map((data, idx) => (
            <label key={`F_winetype_${idx}`}>
              <FilterInput name='winetype' value={data} setFilterState={setWineType} list={type}/>
              {data}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>바디</p>
          {score.map((num, idx) => (
            <label key={`F_body_${idx}`}>
                 <FilterInput name='body' value={num} setFilterState={setbody} list={body}/>
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>당도</p>
          {score.map((num, idx) => (
            <label key={`F_sweet_${idx}`}>
              <FilterInput name='sweet' value={num} setFilterState={setsweet} list={sweet}/>
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>산미</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
                <FilterInput name='acidity' value={num} setFilterState={setAcidity} list={acidity}/>
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>탄닌</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <FilterInput name='tannins' value={num} setFilterState={setTannin} list={tannin}/>
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>가격</p>
          {pricearr.map((p, idx) => (
            <label key={`Price${idx}`}>
               <FilterInput name='price' value={p} setFilterState={setPrice} list={price}/>
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
              <FilterInput name='country' value={data} setFilterState={setMakeCountry} list={makeCountry}/>
              {data}
            </label>
          ))}
        </div>

        <div className={styled.buttonWrap}>
          <button onClick={Reset}>초기화</button>
          <button onClick={FilterSubmitHandler}>적용</button>
        </div>
      </div>
    </div>
  );
};
export default ProductFilter;
