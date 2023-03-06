import styled from "./ReviewDetail.module.css";
import { reviewState } from "./ReviewTypes";

const ReviewDetail: React.FC<reviewState> = (props) => {
  return (
    <div className="maxframe">
      <div className={styled.ReviewDetail}>
        <h1>COMMUNITY</h1>
        <h3>와구 회원들과의 즐거운 와인 이야기</h3>
        <div className={styled.HeaderImage}>
          <img src={`/images/review/${props.reviewimage[0]}.PNG`} />
          <div>
            <p>{props.reviewTitle}</p>
          </div>
        </div>
        <div>
          <div>
            <span>와인타입</span>
            <span>{props.wineType}</span>
            <span>와인명</span>
            <span>{props.wineName}</span>
            <span>구매가격</span>
            <span>{props.price}</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ReviewDetail;
