import styled from './BestReview.module.css';
import Modal from '../ui/Modal';
import Card from '../ui/Card';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useState } from 'react';
const img = [
  '/images/review_0.jpg',
  '/images/review_1.jpg',
  '/images/review_2.jpg',
];
const dummyreview = [
  {
    reviewImage: img[0],
    title: '와인이 정말 맛있어요~~!!',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    name: '임선민',
    date: '2020.01.02',
    star: 3.2,
  },
  {
    reviewImage: img[1],
    title: '최고의 와인 추천합니다',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    name: '임선민',
    date: '2020.01.02',
    star: 4.7,
  },
  {
    reviewImage: img[2],
    title: '굳굳굳!!!',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    name: '임선민',
    date: '2020.01.02',
    star: 2.4,
  },
];

const BestReview = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [curModalNum, setcurModalNum] = useState(-1);

  const OnModal = (idx) => () => {
    setShowModal(true);
    setcurModalNum(idx);
  };
  const OffModal = () => {
    setShowModal(false);
    setcurModalNum(-1);
  };
  const drawStar = (score) => {
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
      <div className={['maxframe', styled.BestReview].join(' ')}>
        {dummyreview.map((data, idx) => (
          <Card
            id={idx}
            key={`review_${idx}`}
            onClick={OnModal(idx)}
            className={styled.card}
          >
            <img
              id={idx}
              className={styled.reviewimg}
              alt={`${data.winename}_review_img`}
              src={data.reviewImage}
            />
            <h1 id={idx}>{data.title}</h1>
            <div id={'contents'}>{data.contents}</div>
            <div id={'text'}>{data.name}</div>
            <div id={'text'}>{data.date}</div>
            <div id={'star'}>{drawStar(data.star).map((star) => star)}</div>
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
    </section>
  );
};

export default BestReview;
