import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CommentInput from "./CommentInput";
import styled from "./CommentList.module.css";
import { defaultimg } from "./CommunityComment";
import { firstCommentState } from "./ReviewTypes";

interface CommentPropsType {
  curCommentnumber: number;
  cursubCommentnumber: number;
  ChangeComment: (index: number) => void;
  ChangeSubComment: (index: number) => void;
  AddFirstComment: () => void;
  AddSecondComment: (commnetindex: number) => void;
}

const CommentList: React.FC<firstCommentState & CommentPropsType> = (props) => {
  const user = useSelector((state: RootState) => state.user);
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [subNickName, setSubNickName] = useState("");
  const [CommentNum, setCommentNum] = useState(-10);
  const [subCommentNum, setsubCommentNum] = useState(-10);

  const SetCommentInput = (index: number) => {
    setCommentNum(index);
    setsubCommentNum(-10);
    props.ChangeSubComment(-1);
    props.ChangeComment(index);
  };

  const SetSubCommentInput = (nickname: string, index: number) => {
    setsubCommentNum(index);
    setCommentNum(-10);
    props.ChangeSubComment(index);
    props.ChangeComment(-1);
    setSubNickName(nickname);
  };

  const CommentInputHandler = (index: number) => () => {
    if (props.curCommentnumber !== -1 || props.cursubCommentnumber !== -1) {
      if (window.confirm("작성중인 댓글이 있습니다. 댓글 전환 하시겠습니까?")) {
        SetCommentInput(index);
      }
    } else {
      if (user.isLoggedIn === true) {
        SetCommentInput(index);
      } else {
        ref.current?.showModal();
        setShowModal(true);
      }
    }
  };

  const SubCommentInputHandler = (nickname: string, index: number) => () => {
    if (props.curCommentnumber !== -1 || props.cursubCommentnumber !== -1) {
      if (window.confirm("작성중인 댓글이 있습니다. 댓글 전환 하시겠습니까?")) {
        SetSubCommentInput(nickname, index);
      }
    } else {
      if (user.isLoggedIn === true) {
        SetSubCommentInput(nickname, index);
      } else {
        ref.current?.showModal();
        setShowModal(true);
      }
    }
  };

  const OffModal = () => {
    ref.current?.close();
    setShowModal(false);
    router.push({ pathname: "/login", query: { returnUrl: router.asPath } });
  };

  return (
    <div className={styled.CommentList}>
      <div className={styled.firstComment}>
        <div className={styled.firstComment_Info}>
          <img
            src={props.writerImage !== "null" ? props.writerImage : defaultimg}
          />
          <div>{props.writerNickName}</div>
        </div>
        <div className={styled.commentText}>
          <p>{props.commentText}</p>
          <div>
            <span>{props.regiDate}</span>
            <span>♥ 좋아요</span>
            <span onClick={CommentInputHandler(props.firstComment_Id)}>
              답글달기
            </span>
          </div>
        </div>
        {props.curCommentnumber === CommentNum && (
          <CommentInput
            isMainInput={false}
            subCommentuser={props.writerNickName}
          />
        )}
      </div>
      {props.secondComment.length > 0 && (
        <>
          <div className={styled.SecondCommentWrapper}>
            {props.secondComment.map((c) => (
              <div className={styled.SecondComment}>
                <div className={styled.SecondComment_Info}>
                  <img
                    src={
                      c.writerImage !== "null" ? props.writerImage : defaultimg
                    }
                  />
                  <div>{c.writerNickName}</div>
                </div>
                <div className={styled.SecondComment_commentText}>
                  <p>{c.commentText}</p>
                  <div>
                    <span>{c.regiDate}</span>
                    <span>♥ 좋아요</span>
                    <span
                      onClick={SubCommentInputHandler(
                        c.writerNickName,
                        c.secondComment_Id
                      )}
                    >
                      답글달기
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {props.cursubCommentnumber === subCommentNum && (
            <CommentInput isMainInput={false} subCommentuser={subNickName} />
          )}
        </>
      )}
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
export default CommentList;
