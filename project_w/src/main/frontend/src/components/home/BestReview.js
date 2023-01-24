import styled from './BestReview.module.css';
import Modal from '../ui/Modal';
import Card from '../ui/Card';
import img from '../../image/banner_1.png';
import img2 from '../../image/banner_2.png';
import img3 from '../../image/banner_3.png';
import { useState } from 'react';

const dummyreview = [
  {
    reviewImage: img,
    title: '와인이 정말 맛있어요~~!!',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    id: 'dlatjsals123',
    star: 5,
  },
  {
    reviewImage: img2,
    title: '최고의 와인 추천합니다',
    contents: `여기서 리뷰 보고 달달하다고 해서 주문해봤는데 역시 리뷰대로 너무 맛잇네요!!
       추천합니당`,
    winename: 'GANCIA',
    id: 'dlatjsals123',
    star: 5,
  },
  {
    reviewImage: img3,
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

  const OnModal = e => {
    setShowModal(true);
    setcurModalNum(e.target.id);
  };
  const OffModal = () => {
    setShowModal(false);
    setcurModalNum(-1);
  };
  return (
    <>
      <div className={styled.BestReview}>
        {dummyreview.map((data, idx) => (
          <Card
            id={idx}
            key={`review_${idx}`}
            onClick={e => OnModal(e)}
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
    </>
  );
};

export default BestReview;
