import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import styled from "./CommunityComment.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  commentState,
  firstCommentState,
  secondCommentState,
} from "./ReviewTypes";
import axios from "axios";
import { getCookie, setCookie } from "../../util/cookiesController";
export const defaultimg = `/images/default_profile.png`;

const CommunityComment: React.FC<{ reviewId: number }> = ({ reviewId }) => {
  const [commmentData, setCommentData] = useState<commentState>();
  const [activeCommentNum, setActiveCommentNum] = useState(-1);
  const [activeSubCommentNum, setactiveSubCommentNum] = useState(-1);

  useEffect(() => {
    getCommentList();
  }, []);

  const getCommentList = useCallback(async () => {
    let commentList: firstCommentState[] = [];
    await axios
      .get(`/api/comment?reviewId=${reviewId}`)
      .then((res) => {
        let tmp: firstCommentState[] = res.data.data;
        commentList = tmp.map((c) => (c.child ? c : { ...c, child: [] }));
      })
      .catch((err) => console.log(err));

    setCommentData({ parent: commentList });
  }, [reviewId]);

  const ChangeComment = (index: number) => {
    setActiveCommentNum(index);
  };
  const ChangeSubComment = (index: number) => {
    setactiveSubCommentNum(index);
  };

  const getToken = async () => {
    const token = getCookie("token");
    let authToken: string = "";
    if (token) {
      authToken = token;
    } else {
      const refreshToken = localStorage.getItem("refresh");
      const id = localStorage.getItem("id");
      const today = new Date();
      today.setMinutes(today.getMinutes() + 1);
      await axios
        .post("/api/auth/refresh", {
          pid: id,
          refreshToken: refreshToken,
        })
        .then((res) => {
          setCookie("token", res.data.data.reissueToken, {
            expires: today,
          });
          authToken = res.data.data.reissueToken;
        })
        .catch((err) => console.log(err));
    }
    return authToken;
  };

  const AddFirstComment = async (data: firstCommentState) => {
    let token = await getToken().then((res) => res);

    await axios
      .post(
        "/api/comment",
        { reviewId: data.reviewId, comment: data.comment },
        { headers: { Authorization: `bearer ${token}` } }
      )
      .then((res) => {
        let resCommentId = res.data.data;
        const commentlist = { ...commmentData };
        commentlist!.parent!.push({ ...data, commentId: resCommentId });
        setCommentData(commentlist as commentState);
      })
      .catch((err) => console.log(err));
  };

  const AddSecondComment = async (index: number, data: secondCommentState) => {
    let token = await getToken().then((res) => res);
    await axios
      .post(
        "/api/comment",
        {
          reviewId: data.reviewId,
          comment: data.comment,
          parentId: data.parentId,
          tagWriterId: data.tagWriterId,
        },
        {
          headers: { Authorization: `bearer ${token}` },
        }
      )
      .then(() => {
        const commentlist = { ...commmentData };
        commentlist?.parent?.map((comment) => {
          comment.commentId === index
            ? {
                ...comment,
                child: comment.child.push(data),
              }
            : comment;
        });
        setCommentData(commentlist as commentState);
      })
      .catch((err) => console.log(err));
  };

  const firstCommentLikeHandler = (id: number) => {
    const editdata = commmentData?.parent.map((data) =>
      data.commentId === id
        ? { ...data, commentLike: data.like ? false : true }
        : data
    );
    if (editdata) {
      setCommentData({ parent: editdata });
    }
  };

  const SecondCommentLikeHandler = (secondCommentid: number) => {
    let tmp: firstCommentState = { ...commmentData?.parent[0]! };
    commmentData?.parent.map((data) =>
      data.child.map((secdata) => {
        if (secdata.commentId === secondCommentid) {
          secdata.like = !secdata.like;
          tmp = {
            ...data,
            child: [...data.child],
          };
        }
      })
    );
    const editdata = commmentData?.parent.map((data) =>
      data.commentId === tmp.commentId ? { ...tmp } : data
    );
    if (editdata) {
      setCommentData({ parent: editdata });
    }
  };

  return (
    <div className={styled.CommunityComment}>
      <div className={styled.InputWrapper}>
        <CommentInput
          isMainInput={true}
          reviewId={commmentData?.parent[0]?.reviewId ?? reviewId}
          AddfirstComment={AddFirstComment}
        />
      </div>
      <div className={styled.CommentList}>
        {commmentData?.parent?.map((data, index) => (
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
