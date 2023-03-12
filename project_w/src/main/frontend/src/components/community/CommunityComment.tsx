import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import styled from "./CommunityComment.module.css";
import comment from "../dummydata/review_Comment.json";
import { useEffect, useState } from "react";
import { commentState } from "./ReviewTypes";
export const defaultimg = `/images/default_profile.png`;

const CommunityComment: React.FC<{ reviewId: number }> = ({ reviewId }) => {
  const [commmentData, setCommentData] = useState<commentState[]>([]);
  const [activeCommentNum, setActiveCommentNum] = useState(-1);
  const [activeSubCommentNum, setactiveSubCommentNum] = useState(-1);

  useEffect(() => {
    const filterlist = comment.filter((data) => data.reviewId === reviewId);
    setCommentData(filterlist);
  }, []);

  const ChangeComment = (index: number) => {
    setActiveCommentNum(index);
  };
  const ChangeSubComment = (index: number) => {
    setactiveSubCommentNum(index);
  };

  const AddFirstComment = () => {};
  const AddSecondComment = (index: number) => {};

  return (
    <div className={styled.CommunityComment}>
      <div className={styled.InputWrapper}>
        <CommentInput isMainInput={true} />
      </div>
      <div className={styled.CommentList}>
        {commmentData.map((list) =>
          list.firstComment.map((data) => (
            <CommentList
              curCommentnumber={activeCommentNum}
              cursubCommentnumber={activeSubCommentNum}
              ChangeSubComment={ChangeSubComment}
              ChangeComment={ChangeComment}
              AddFirstComment={AddFirstComment}
              AddSecondComment={AddSecondComment}
              {...data}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CommunityComment;
