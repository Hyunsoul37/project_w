import styled from "./CommentInput.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { defaultimg } from "./CommunityComment";
import React from "react";

const CommentInput: React.FC<{
  isMainInput: boolean;
  subCommentuser?: string;
}> = ({ isMainInput, subCommentuser }) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className={isMainInput ? styled.CommentInput : styled.CommentInput_sub}
    >
      <img
        src={
          user.userData !== null && user.userData.data.userImage
            ? user.userData.data.userImage
            : defaultimg
        }
      />
      <div className={styled.CommentInput_Input}>
        {isMainInput ? (
          <input
            type="text"
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 : )"
          />
        ) : (
          <div className={styled.CommentInput_subInput}>
            <span>{subCommentuser ? `@${subCommentuser}` : " "}</span>
            <input type="text" />
          </div>
        )}
        <button>입력</button>
      </div>
    </div>
  );
};
export default CommentInput;
