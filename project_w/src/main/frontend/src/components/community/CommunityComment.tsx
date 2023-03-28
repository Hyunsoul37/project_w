import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import styled from "./CommunityComment.module.css";
import comment from "../dummydata/review_Comment.json";
import { useEffect, useRef, useState } from "react";
import {
  commentState,
  firstCommentState,
  secondCommentState,
} from "./ReviewTypes";
export const defaultimg = `/images/default_profile.png`;

const CommunityComment: React.FC<{ reviewId: number }> = ({ reviewId }) => {
  const [commmentData, setCommentData] = useState<commentState>();
  const [activeCommentNum, setActiveCommentNum] = useState(-1);
  const [activeSubCommentNum, setactiveSubCommentNum] = useState(-1);

  useEffect(() => {
    const filterlist = comment.filter((data) => data.reviewId === reviewId);
    setCommentData({ ...filterlist[0] });
  }, []);

  const ChangeComment = (index: number) => {
    setActiveCommentNum(index);
  };
  const ChangeSubComment = (index: number) => {
    setactiveSubCommentNum(index);
  };

  const AddFirstComment = (data: firstCommentState) => {
    const commentlist = { ...commmentData };
    commentlist!.firstComment!.push(data);
    setCommentData(commentlist as commentState);
  };

  const AddSecondComment = (index: number, data: secondCommentState) => {
    const commentlist = { ...commmentData };
    commentlist?.firstComment?.map((comment) => {
      comment.firstComment_Id === index
        ? {
            ...comment,
            secondComment: comment.secondComment.push(data),
          }
        : comment;
    });
    setCommentData(commentlist as commentState);
  };

  const firstCommentLikeHandler = (id: number) => {
    const editdata = commmentData?.firstComment.map((data) =>
      data.firstComment_Id === id
        ? { ...data, commentLike: data.commentLike ? false : true }
        : data
    );
    if (editdata) {
      setCommentData({ reviewId, firstComment: editdata });
    }
  };

  const SecondCommentLikeHandler = (secondCommentid: number) => {
    let tmp: firstCommentState = { ...commmentData?.firstComment[0]! };
    commmentData?.firstComment.map((data) =>
      data.secondComment.map((secdata) => {
        if (secdata.secondComment_Id === secondCommentid) {
          secdata.commentLike = !secdata.commentLike;
          tmp = {
            ...data,
            secondComment: [...data.secondComment],
          };
        }
      })
    );
    const editdata = commmentData?.firstComment.map((data) =>
      data.firstComment_Id === tmp.firstComment_Id ? { ...tmp } : data
    );
    if (editdata) {
      setCommentData({ reviewId, firstComment: editdata });
    }
  };

  return (
    <div className={styled.CommunityComment}>
      <div className={styled.InputWrapper}>
        <CommentInput isMainInput={true} AddfirstComment={AddFirstComment} />
      </div>
      <div className={styled.CommentList}>
        {commmentData?.firstComment?.map((data, index) => (
          <CommentList
            key={`review_${index}`}
            curCommentnumber={activeCommentNum}
            cursubCommentnumber={activeSubCommentNum}
            ChangeSubComment={ChangeSubComment}
            ChangeComment={ChangeComment}
            AddSecondComment={AddSecondComment}
            firstCommentLikeHandler={firstCommentLikeHandler}
            SecondCommentLikeHandler={SecondCommentLikeHandler}
            {...data}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityComment;
