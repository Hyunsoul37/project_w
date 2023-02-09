import styled from './BestReview.module.css';
import Modal from '../ui/Modal';
import Card from '../ui/Card';

import { useState } from 'react';
const img = [
  '/images/banner_1.png',
  '/images/banner_2.png',
  '/images/banner_3.png',
];
const dummyreview = [
  {
    reviewImage: img[0],
    title: '와인이 정말 맛있어요~~!!',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    id: 'dlatjsals123',
    star: 5,
  },
  {
    reviewImage: img[1],
    title: '최고의 와인 추천합니다',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    id: 'dlatjsals123',
    star: 5,
  },
  {
    reviewImage: img[2],
    title: '굳굳굳!!!',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    id: 'dlatjsals123',
    star: 5,
  },
];

const BestReview = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [curModalNum, setcurModalNum] = useState(-1);

  const OnModal = (e) => {
    setShowModal(true);
    setcurModalNum(e.target.id);
  };
  const OffModal = () => {
    setShowModal(false);
    setcurModalNum(-1);
  };
  return (
    <div className={styled.BestReviewwrapper}>
      <div className="sub_tit__">
        <h4>BestReview</h4>
        <span>와구 베스트 리뷰</span>
      </div>
      <div className={['maxframe', styled.BestReview].join(' ')}>
        {dummyreview.map((data, idx) => (
          <Card
            id={idx}
            key={`review_${idx}`}
            onClick={(e) => OnModal(e)}
            className={styled.card}
          >
            <img
              id={idx}
              className={styled.reviewimg}
              alt={`${data.winename}_review_img`}
              src={data.reviewImage}
            />
            <h1 id={idx}>{data.title}</h1>
            <div id={idx}>{data.contents}</div>
            <div id={idx}>{data.id}</div>
            <div id={idx}>{data.star}</div>
          </Card>
        ))}
      </div>
      {ShowModal && (
        <Modal offModal={OffModal}>
          <img
            className={styled.reviewimg}
            alt={`${dummyreview[curModalNum].winename}_review_img`}
            src={dummyreview[curModalNum].reviewImage}
          />
          <h1>{dummyreview[curModalNum].title}</h1>
          <div>{dummyreview[curModalNum].contents}</div>
          <div>{dummyreview[curModalNum].id}</div>
          <div>{dummyreview[curModalNum].star}</div>
        </Modal>
      )}
    </div>
  );
};

export default BestReview;
