import styled from "./BestReview.module.css";
import Modal from "../ui/Modal";
import Card from "../ui/Card";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useState } from "react";

interface propsState {
  list: bestReviewState[];
}
interface bestReviewState {
  reviewId: number;
  reviewTitle: string;
  desc: string;
  writerId: number;
  regiDate: string;
  starPoint: number;
  reviewImg1: string;
  writerNick: string;
  wineName: string;
}

const BestReview = (props: propsState) => {
  const [ShowModal, setShowModal] = useState(false);
  const [curModalNum, setcurModalNum] = useState(-1);
  const [bestreviewArr, setbestreviewArr] = useState<bestReviewState[]>(
    props.list
  );

  const OnModal = (idx: number) => () => {
    setShowModal(true);
    setcurModalNum(idx);
  };
  const OffModal = () => {
    setShowModal(false);
    setcurModalNum(-1);
  };
  const drawStar = (score: number) => {
    let i = 0;
    let star = [];
    let num = Math.round(score);
    for (i = 0; i < num; i++) {
      star.push(<AiFillStar />);
    }
    for (i = 0; i < 5 - num; i++) {
      star.push(<AiOutlineStar />);
    }
    return star;
  };
  return (
    <section className={styled.BestReviewwrapper}>
      <div className="maxframe">
        <div className="sub_tit__">
          <h4>와구 베스트 리뷰</h4>
          <span>BestReview</span>
        </div>
      </div>
      <div className={["maxframe", styled.BestReview].join(" ")}>
        {bestreviewArr.map((data, idx) => (
          <Card
            id={idx}
            key={`review_${idx}`}
            onClick={OnModal(idx)}
            className={styled.card}
          >
            <img
              id={idx.toString()}
              className={styled.reviewimg}
              alt={`${data.wineName}_review_img`}
              src={data.reviewImg1}
            />
            <h1 id={idx.toString()}>{data.reviewTitle}</h1>
            <div id={"contents"}>{data.desc}</div>
            <div id={"text"}>{data.writerNick}</div>
            <div id={"text"}>{data.regiDate.split("T")[0]}</div>
            <div id={"star"}>
              {drawStar(data.starPoint).map((star, idx) => (
                <span key={`star_${idx}`}>{star}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      {ShowModal && (
        <Modal offModal={OffModal}>
          <img
            className={styled.reviewimg_Modal}
            alt={`${bestreviewArr[curModalNum].wineName}_review_img`}
            src={bestreviewArr[curModalNum].reviewImg1}
          />
          <div className={styled.modalText}>
            <h1>{bestreviewArr[curModalNum].reviewTitle}</h1>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div id="winename">{bestreviewArr[curModalNum].wineName}</div>
              <div id="modal_star">
                {drawStar(bestreviewArr[curModalNum].starPoint).map(
                  (star, idx) => (
                    <span key={`star_${idx}`}>{star}</span>
                  )
                )}
              </div>
            </div>
            <div>{bestreviewArr[curModalNum].desc}</div>
            <div id="modal_name">{bestreviewArr[curModalNum].writerNick}</div>
            <div id="modal_date">
              {bestreviewArr[curModalNum].regiDate.split("T")[0]}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default BestReview;
