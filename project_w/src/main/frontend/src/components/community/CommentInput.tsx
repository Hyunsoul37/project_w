import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../store";
import { defaultimg } from "./CommunityComment";
import styled from "./CommentInput.module.css";

const CommentInput: React.FC<{
  isMainInput: boolean;
  subCommentuser?: string;
  AddfirstComment?: () => void;
  AddSecondComment?: () => void;
}> = ({ isMainInput, subCommentuser, AddfirstComment, AddSecondComment }) => {
  const user = useSelector((state: RootState) => state.user);
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  const CommentSubmitHandler = () => {
    if (user.isLoggedIn === true) {
      if (isMainInput) {
        AddfirstComment!();
      } else {
        AddSecondComment!();
      }
    } else {
      ref.current?.showModal();
      setShowModal(true);
    }
  };
  const OffModal = () => {
    ref.current?.close();
    setShowModal(false);
    router.push({ pathname: "/login", query: { returnUrl: router.asPath } });
  };

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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        ) : (
          <div className={styled.CommentInput_subInput}>
            <span>{subCommentuser ? `@${subCommentuser}` : " "}</span>
            <input
              type="text"
              value={comment}
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
