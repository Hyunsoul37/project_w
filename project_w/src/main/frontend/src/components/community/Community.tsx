import styled from "./Community.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch, useEffect, useReducer, useRef, useState } from "react";
import CommunityCard from "./CommunityCard";
import ReviewFilter from "./ReviewFilter";
import { RootState } from "../../store";
import { reviewState } from "./ReviewTypes";
import {
  PushReview,
  TestDelayGetReview,
  TestGetReview,
} from "../../slice/reviewSlice.js";
import data from "../dummydata/review_list.json";
import Loading from "../ui/Loading";
import { setTimeout } from "timers";
export interface GetReviewAction {
  data: reviewState;
  curpage: number;
}
const Community: React.FC<{ list: reviewState[] }> = (props) => {
  const review = useSelector((state: RootState) => state.review);
  const dispatch = useDispatch();
  const target = useRef<HTMLDivElement>(null);
  const curpage = useRef(-1);
  const [isStart, setisStart] = useState(true);
  const [targetrender, setTargetRender] = useState(true);

  const loadData = () => {
    curpage.current++;
    if (curpage.current > 0) {
      // 서버에서 데이터 받아오기!
      setisStart(false);
      dispatch(TestDelayGetReview({ data: data, curpage: curpage.current }));
      setTargetRender(false);
      // filterData().then((res) => {
      //   if (res.length < 12) {
      //     setisfinish(true);
      //   }
      //   dispatch(PushReview([...res]));
      //   setIsLoadding(true);
      //   setTimeout(() => {
      //     setIsLoadding(false);
      //   }, 10000);
      // });
    }
  };

  const options = {
    root: null,
    threshold: 1.0,
  };

  const observerHandler = (entries: IntersectionObserverEntry[]) => {
    const endtarget = entries[0];
    if (!review.isloadding && endtarget.isIntersecting) {
      loadData();
    }
  };

  useEffect(() => {
    dispatch(TestGetReview([...props.list]));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler, options);
    const input = target.current;
    let timer: number;

    if (!review.isloadding) {
      timer = window.setTimeout(() => {
        setTargetRender(true);
      }, 500);
    }
    if (input) {
      observer.observe(input);
    }
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [review.isloadding, targetrender]);

  return (
    <div className="maxframe">
      <div className={styled.Community}>
        <h1>COMMUNITY</h1>
        <h3>와구 회원들과의 즐거운 와인 이야기</h3>
        <ReviewFilter />
        <div className={styled.Community_CardWrapper}>
          {review.post.map((data: reviewState, index: number) => (
            <CommunityCard key={`review_${index}`} {...data} />
          ))}
        </div>
        {review.isloadding && !isStart ? <Loading /> : null}
        {!review.isfinish && targetrender ? (
          <div ref={target} className={styled.Community_SrollChecker}></div>
        ) : (
          <span style={{ display: "inline-block", height: "250px" }}></span>
        )}
      </div>
    </div>
  );
};
export default Community;
