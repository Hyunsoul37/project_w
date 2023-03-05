import styled from "./ReviewFilter.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
const filtertype = ["작성자(닉네임)", "해시태그", "와인이름"];

const ReviewFilter = () => {
  const [showType, setShowType] = useState(false);
  const [selecttype, setSelectType] = useState("");

  const FilterTypeHandler = (type: string) => () => {
    setSelectType(type);
    setShowType(false);
  };

  return (
    <>
      <div className={styled.ReviewFilter}>
        <div
          className={styled.ReviewFilter_Selector}
          onClick={() => setShowType(!showType)}
        >
          <p>{selecttype}</p>
          <AiOutlineDown />
        </div>
        <div className={styled.ReviewFilter_Input}>
          <input type="text" />
          <button>검색</button>
        </div>
      </div>
      <div
        className={[
          styled.ReviewFilter_Selector_list,
          showType ? styled.active : styled.unactive,
        ].join(" ")}
      >
        <ul>
          {filtertype.map((type, idx) => (
            <li key={type} onClick={FilterTypeHandler(type)}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ReviewFilter;
