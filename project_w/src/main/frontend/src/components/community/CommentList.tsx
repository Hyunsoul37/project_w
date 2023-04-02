import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getDate } from "../util/util";
import CommentInput from "./CommentInput";
import styled from "./CommentList.module.css";
import { defaultimg } from "./CommunityComment";
import { firstCommentState, secondCommentState } from "./ReviewTypes";

interface CommentPropsType {
  curCommentnumber: number;
  cursubCommentnumber: number;
  ChangeComment: (index: number) => void;
  ChangeSubComment: (index: number) => void;
  AddSecondComment: (commnetindex: number, data: secondCommentState) => void;
  firstCommentLikeHandler: (id: number) => void;
  SecondCommentLikeHandler: (secondCommentid: number) => void;
}

const CommentList: React.FC<firstCommentState & CommentPropsType> = (props) => {
  const user = useSelector((state: RootState) => state.user);
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [subNickName, setSubNickName] = useState("");
  const [subWriterId, setSubWriterId] = useState(-1);
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

  const CommentInputHandler = (index: number, tagId: number) => () => {
    if (props.curCommentnumber !== -1 || props.cursubCommentnumber !== -1) {
      if (window.confirm("작성중인 댓글이 있습니다. 댓글 전환 하시겠습니까?")) {
        SetCommentInput(index);
        setSubWriterId(tagId);
      }
    } else {
      if (user.isLoggedIn === true) {
        SetCommentInput(index);
        setSubWriterId(tagId);
      } else {
        ref.current?.showModal();
        setShowModal(true);
      }
    }
  };

  const SubCommentInputHandler =
    (nickname: string, index: number, tagId: number) => () => {
      if (props.curCommentnumber !== -1 || props.cursubCommentnumber !== -1) {
        if (
          window.confirm("작성중인 댓글이 있습니다. 댓글 전환 하시겠습니까?")
        ) {
          SetSubCommentInput(nickname, index);
          setSubWriterId(tagId);
        }
      } else {
        if (user.isLoggedIn === true) {
          SetSubCommentInput(nickname, index);
          setSubWriterId(tagId);
        } else {
          ref.current?.showModal();
          setShowModal(true);
        }
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
  const firstCommentLikeHandler = (id: number) => () => {
    if (user.isLoggedIn === true) {
      props.firstCommentLikeHandler(id);
    } else {
      ref.current?.showModal();
      setShowModal(true);
    }
  };
  const SecondCommentLikeHandler = (secondid: number) => () => {
    if (user.isLoggedIn === true) {
      props.SecondCommentLikeHandler(secondid);
    } else {
      ref.current?.showModal();
      setShowModal(true);
    }
  };
  const AddSecondComment = (
    comment: string,
    commentId: number,
    tagName: string
  ) => {
    props.AddSecondComment(props.commentId, {
      reviewId: props.reviewId,
      parentId: props.commentId,
      commentId: commentId,
      writerId: user.userData.data.memberInfo.pid,
      writerNick: user.userData.data.memberInfo.nickName,
      comment: comment,
      writerProfile:
        user.userData.data.memberInfo.profileImg === undefined
          ? "null"
          : user.userData.data.memberInfo.profileImg,
      regiDate: getDate(),
      like: false,
      tagWriterNick: tagName,
      tagWriterId: subWriterId,
    });
    setCommentNum(-10);
    setsubCommentNum(-10);
    props.ChangeComment(-1);
    props.ChangeSubComment(-1);
  };

  return (
    <div className={styled.CommentList}>
      <div className={styled.firstComment}>
        <div className={styled.firstComment_Info}>
          <img
            src={
              props.writerProfile !== ("null" || null)
                ? props.writerProfile
                : defaultimg
            }
          />
          <div>{props.writerNick}</div>
        </div>
        <div className={styled.commentText}>
          <p>{props.comment}</p>
          <div>
            <span>{props.regiDate.split("T")[0]}</span>
            <span
              className={props.like ? styled.like : ""}
              onClick={firstCommentLikeHandler(props.commentId)}
            >
              ♥ 좋아요
            </span>
            <span
              onClick={CommentInputHandler(props.commentId, props.writerId)}
            >
              답글달기
            </span>
          </div>
        </div>
        {props.curCommentnumber === CommentNum && (
          <CommentInput
            isMainInput={false}
            reviewId={props.reviewId}
            subCommentuser={props.writerNick}
            AddSecondComment={AddSecondComment}
          />
        )}
      </div>

      {props.child?.length > 0 && (
        <>
          <div className={styled.SecondCommentWrapper}>
            {props.child.map((c) => (
              <div className={styled.SecondComment}>
                <div className={styled.SecondComment_Info}>
                  <img
                    src={
                      c.writerProfile !== ("null" || null)
                        ? c.writerProfile
                        : defaultimg
                    }
                  />
                  <div>{c.writerNick}</div>
                </div>
                <div className={styled.SecondComment_commentText}>
                  <div className={styled.SecondComment_contents}>
                    <p>@{c.tagWriterNick}</p>
                    <p>{c.comment}</p>
                  </div>
                  <div>
                    <span>{c.regiDate.split("T")[0]}</span>
                    <span
                      className={c.like ? styled.like : ""}
                      onClick={SecondCommentLikeHandler(c.commentId)}
                    >
                      ♥ 좋아요
                    </span>
                    <span
                      onClick={SubCommentInputHandler(
                        c.writerNick,
                        c.commentId,
                        c.writerId
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
            <CommentInput
              isMainInput={false}
              subCommentuser={subNickName}
              reviewId={props.reviewId}
              AddSecondComment={AddSecondComment}
            />
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
