import styled from "./Community.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import CommunityCard from "./CommunityCard";
import Button from "../ui/Button";
import { AppDispatch, RootState } from "../../store";
import { reviewState } from "./ReviewTypes";
import { NextGetReview } from "../../slice/reviewSlice";

import Loading from "../ui/Loading";
import { useRouter } from "next/router";

export interface GetReviewAction {
  data: reviewState;
  curpage: number;
}
const Community: React.FC<{ list: reviewState[] }> = () => {
  const { review, user } = useSelector((state: RootState) => state);
  const dispatch: AppDispatch = useDispatch();
  const target = useRef<HTMLDivElement>(null);
  const curpage = useRef(0);
  const modalref = useRef<HTMLDialogElement>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const loadData = () => {
    if (curpage.current >= 0) {
      dispatch(NextGetReview(curpage.current));
    }
  };

  const options = {
    root: null,
    threshold: 1.0,
  };

  const observerHandler = (entries: IntersectionObserverEntry[]) => {
    const endtarget = entries[0];
    if (
      !review.isloadding &&
      curpage.current < review.TotalpageNum &&
      endtarget.isIntersecting
    ) {
      curpage.current++;
      loadData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler, options);
    const input = target.current;
    let timer: number;

    if (input) {
      observer.observe(input);
    }
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [review.isloadding, review.TotalpageNum]);

  const OnClickWritePost = () => {
    if (user.isLoggedIn === true) {
      router.push({
        pathname: "/community/post",
        query: { edit: false, reviewId: -1 },
      });
    } else {
      modalref.current?.showModal();
      setShowModal(true);
    }
  };
  const OffModal = () => {
    modalref.current?.close();
    setShowModal(false);
    router.push(
      { pathname: "/login", query: { returnUrl: router.asPath } },
      "/login"
    );
  };
  return (
    <div className="maxframe">
      <div className={styled.Community}>
        <h1>COMMUNITY</h1>
        <h3>와구 회원들과의 즐거운 와인 이야기</h3>
        <div className={styled.btnWrapper}>
          <Button
            buttontext="새글작성"
            buttonColor="second"
            buttonSize="m"
            onClick={OnClickWritePost}
          />
        </div>
        <div className={styled.Community_CardWrapper}>
          {review.post.map((data: reviewState, index: number) => (
            <CommunityCard key={`reviewCard_${index}`} {...data} />
          ))}
        </div>
        {review.isloadding ? <Loading height={300} /> : null}
        <div ref={target} className={styled.Community_SrollChecker}></div>
      </div>
      <dialog
        style={!showModal ? { display: "none" } : { display: "flex" }}
        className={styled.modal}
        ref={modalref}
      >
        <p>로그인이 필요한 기능입니다.</p>
        <button onClick={OffModal}>확인</button>
      </dialog>
    </div>
  );
};
export default Community;
