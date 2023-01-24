import styled from './BestReview.module.css';
import Modal from '../ui/Modal';
import Card from '../ui/Card';
import img from '../../image/banner_1.png';
import img2 from '../../image/banner_2.png';
import img3 from '../../image/banner_3.png';

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
  return (
    <div className={styled.BestReview}>
      {dummyreview.map((data, idx) => (
        <Card key={`review_${idx}`}>
          <img
            className={styled.reviewimg}
            alt={`${data.winename}_review_img`}
            src={data.reviewImage}
          />
          <h1>{data.title}</h1>
          <div>{data.contents}</div>
          <div>{data.id}</div>
          <div>{data.star}</div>
        </Card>
      ))}
    </div>
  );
};

export default BestReview;
