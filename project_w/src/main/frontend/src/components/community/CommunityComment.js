import { useSelector } from "react-redux";
import CommentList from "./CommentList";
import styled from "./CommunityComment.module.css";
import comment from "../dummydata/review_Comment.json";
export const defaultimg = `/images/default_profile.png`;

const CommunityComment = ({ reviewId }) => {
  const user = useSelector((state) => state.user);

  const commmentData = comment.filter(
    (data) => parseInt(data.reviewId) === parseInt(reviewId)
  );

  return (
    <div className={styled.CommunityComment}>
      <div className={styled.MainInput}>
        <img
          src={user.userData !== null ? user.userData.userImage : defaultimg}
        />
        <div className={styled.CommunityComment_mainInput}>
          <input
            type="text"
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 : )"
          />
          <button>입력</button>
        </div>
      </div>
      <div className={styled.CommentList}>
        {commmentData.map((list) =>
          list.firstComment.map((data) => <CommentList {...data} />)
        )}
      </div>
    </div>
  );
};

export default CommunityComment;
