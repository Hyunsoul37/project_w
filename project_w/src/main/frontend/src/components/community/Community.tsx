import styled from "./Community.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import CommunityCard from "./CommunityCard";
import ReviewFilter from "./ReviewFilter";
import { RootState } from "../../store";
import { reviewState } from "./ReviewTypes";
import { PushReview, TestGetReview } from "../../slice/reviewSlice.js";
import data from "../dummydata/review_list.json";

const Community = () => {
  const review = useSelector((state: RootState) => state.review);
  const dispatch = useDispatch();
  const target = useRef<HTMLDivElement>(null);
  const curpage = useRef(-2);
  const [isloadding, setIsLoadding] = useState(false);
  const [isfinish, setisfinish] = useState(false);

  const loadData = () => {
    if (!isloadding && !isfinish) {
      // 서버에서 데이터 받아오기!
      curpage.current++;
      const addlist = filterData();
      if (addlist.length < 12) {
        setisfinish(true);
      }
      dispatch(PushReview([...addlist]));
      setIsLoadding(true);
      setTimeout(() => {
        setIsLoadding(false);
      }, 10000);
    }
  };
  const filterData = () => {
    let newlist = [];
    for (let i = curpage.current * 12; i < curpage.current * 12 + 12; i++) {
      if (data[i]) {
        newlist.push(data[i]);
      }
    }
    return newlist;
  };

  const options = {
    root: null,
    threshold: 1.0,
  };

  const observerHandler = (entries: IntersectionObserverEntry[]) => {
    const endtarget = entries[0];
    if (!isloadding && endtarget.isIntersecting) {
      loadData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler, options);
    const input = target.current;
    if (input) {
      observer.observe(input);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

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
        <div ref={target} className={styled.Community_SrollChecker}></div>
      </div>
    </div>
  );
};
export default Community;
