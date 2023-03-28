import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../store";
import { defaultimg } from "./CommunityComment";
import styled from "./CommentInput.module.css";
import { firstCommentState, secondCommentState } from "./ReviewTypes";
import { getDate, GetReviewid } from "../util/util";

interface commentState {
  isMainInput: boolean;
  subCommentuser?: string;
  AddfirstComment?: (data: firstCommentState) => void;
  AddSecondComment?: (
    comment: string,
    commentId: number,
    tagName: string
  ) => void;
}

const CommentInput: React.FC<commentState> = ({
  isMainInput,
  subCommentuser,
  AddfirstComment,
  AddSecondComment,
}) => {
  const user = useSelector((state: RootState) => state.user);
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");

  const CommentSubmitHandler = () => {
    if (user.isLoggedIn === true) {
      if (isMainInput) {
        AddfirstComment!({
          firstComment_Id: GetReviewid(),
          writerId: user.userData.data.memberInfo.pid,
          writerNickName: user.userData.data.memberInfo.nickName
            ? user.userData.data.memberInfo.nickName
            : "임시",
          commentText: comment,
          writerImage:
            user.userData.data.memberInfo.userImage === undefined
              ? "null"
              : user.userData.data.memberInfo.userImage,
          regiDate: getDate(),
          commentLike: false,
          secondComment: [],
        });
        setComment("");
      } else {
        AddSecondComment!(comment, GetReviewid(), subCommentuser!);
        setComment("");
      }
    } else {
      ref.current?.showModal();
      setShowModal(true);
    }
  };
  const OffModal = () => {
    ref.current?.close();
    setShowModal(false);
    router.push(
      { pathname: "/login", query: { returnUrl: router.asPath } },
      "/login"
    );
  };

  return (
    <div
      className={isMainInput ? styled.CommentInput : styled.CommentInput_sub}
    >
      <img
        src={
          user.isLoggedIn &&
          user.userData !== null &&
          user.userData.data.memberInfo.userImage !== "" &&
          user.userData.data.memberInfo.userImage !== undefined
            ? user.userData.data.memberInfo.userImage
            : defaultimg
        }
      />
      <div className={styled.CommentInput_Input}>
        {isMainInput ? (
          <input
            type="text"
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 : )"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        ) : (
          <div className={styled.CommentInput_subInput}>
            <span>{subCommentuser ? `@${subCommentuser}` : " "}</span>
            <input
              type="text"
              value={comment}
              autoFocus
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        )}
        <button onClick={CommentSubmitHandler}>입력</button>
      </div>
      <dialog
        style={!showModal ? { display: "none" } : { display: "flex" }}
        className={styled.modal}
        ref={ref}
      >
        <p>로그인이 필요한 기능입니다.</p>
        <button onClick={OffModal}>확인</button>
      </dialog>
    </div>
  );
};
export default CommentInput;
