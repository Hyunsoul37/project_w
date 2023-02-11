import styled from './winelist.module.css';
const WineListForm = () => {
  return (
    <form className={['maxframe', styled.wineForm].join(' ')}>
      <div className={styled.formRow}>
        <label htmlFor="image">이미지</label>
        <input
          id="image"
          type="file"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="winename_ko">와인명(국문)</label>
        <input
          id="winename_ko"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="winename_en">와인명(영문)</label>
        <input
          id="winename_en"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="price">가격</label>
        <input
          id="price"
          type="number"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="winetype">와인종류</label>
        <input
          id="winetype"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="body">바디</label>
        <input
          id="body"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="sando">산도</label>
        <input
          id="sando"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="tan">타닌</label>
        <input
          id="tan"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="alcohol">알콜도수</label>
        <input
          id="alcohol"
          type="number"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="country">생산국가</label>
        <input
          id="country"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="region">생산지역</label>
        <input
          id="region"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="desc">와인설명</label>
        <textarea id="desc" />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="star">별점</label>
        <input
          id="star"
          type="number"
          min={1}
          max={5}
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="food">추천안주</label>
        <input
          id="food"
          type="text"
        />
      </div>
      <div className={styled.formRow}>
        <label htmlFor="grape">포도품종</label>
        <input
          id="grape"
          type="text"
        />
      </div>
      <button>전송!</button>
    </form>
  );
};
export default WineListForm;
