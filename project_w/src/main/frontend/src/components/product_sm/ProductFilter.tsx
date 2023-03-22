import { useEffect, useState } from "react";
import styled from "./ProductFilter.module.css";
import { winetype, country, grape } from "./filterindex";
import { filterdataState } from "./Product_SM";
import Slider from "@mui/material/Slider";
import FilterInput from "./FilterInput";
import Button from "../ui/Button";

const score = [1, 2, 3, 4, 5];

interface FilterPropsState {
  isshow: boolean;
  SetFilterData: (data: filterdataState) => void;
  offFilter: () => void;
}

const ProductFilter: React.FC<FilterPropsState> = (props) => {
  const [type, setWineType] = useState<number[]>([]);
  const [body, setbody] = useState<number[]>([]);
  const [sweet, setsweet] = useState<number[]>([]);
  const [acidity, setAcidity] = useState<number[]>([]);
  const [tannin, setTannin] = useState<number[]>([]);
  const [price, setPrice] = useState<number[]>([40000, 90000]);
  const [makeCountry, setMakeCountry] = useState<string[]>([]);

  useEffect(() => {
    const wrapper = document.getElementById("Filter") as HTMLElement;
    let timer = null;
    if (!props.isshow) {
      timer = setTimeout(() => {
        wrapper.style.display = "none";
      }, 500);
    } else {
      wrapper.style.display = "block";
    }
  }, [props.isshow]);

  const FilterSubmitHandler = () => {
    props.SetFilterData({
      wineType: type,
      winebody: body,
      wineSweet: sweet,
      wineAcidity: acidity,
      wineTannin: tannin,
      winePrice: price,
      wineCountry: makeCountry,
    });
    props.offFilter();
  };

  const Reset = () => {
    setWineType([]);
    setbody([]);
    setsweet([]);
    setAcidity([]);
    setTannin([]);
    setPrice([40000, 90000]);
    setMakeCountry([]);
  };
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  return (
    <div
      id="Filter"
      className={[
        styled.FilterWrapper,
        props.isshow ? styled.showfilter : styled.offfilter,
      ].join(" ")}
    >
      <div className={["maxframe", styled.filter].join(" ")}>
        <div className={styled.inputbox}>
          <p>와인종류</p>
          {winetype.map((data: string, idx) => (
            <label key={`F_winetype_${idx}`}>
              <FilterInput
                name="winetype"
                value={idx + 1}
                setFilterState={setWineType}
                list={type}
              />
              {data}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>바디</p>
          {score.map((num, idx) => (
            <label key={`F_body_${idx}`}>
              <FilterInput
                name="body"
                value={num}
                setFilterState={setbody}
                list={body}
              />
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>당도</p>
          {score.map((num, idx) => (
            <label key={`F_sweet_${idx}`}>
              <FilterInput
                name="sweet"
                value={num}
                setFilterState={setsweet}
                list={sweet}
              />
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>산미</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <FilterInput
                name="acidity"
                value={num}
                setFilterState={setAcidity}
                list={acidity}
              />
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>탄닌</p>
          {score.map((num, idx) => (
            <label key={`F_acidity_${idx}`}>
              <FilterInput
                name="tannins"
                value={num}
                setFilterState={setTannin}
                list={tannin}
              />
              {num}
            </label>
          ))}
        </div>

        <div className={styled.inputbox}>
          <p>가격</p>
          <Slider
            style={{
              color: "#61002E",
            }}
            step={10000}
            min={30000}
            max={100000}
            getAriaLabel={() => "Price range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </div>

        <div className={styled.inputbox}>
          <p>생산국가</p>
          {country.map((data, idx) => (
            <label key={`F_country${idx}`}>
              <FilterInput
                name="country"
                value={data}
                setFilterState={setMakeCountry}
                list={makeCountry}
              />
              {data}
            </label>
          ))}
        </div>

        <div className={styled.buttonWrap}>
          <Button
            buttontext={"초기화"}
            buttonColor={"second"}
            onClick={Reset}
          />
          <Button
            buttontext={"적용"}
            buttonColor={"main"}
            onClick={FilterSubmitHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductFilter;
