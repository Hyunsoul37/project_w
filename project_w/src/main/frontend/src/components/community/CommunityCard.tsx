import styled from "./CommunityCard.module.css";
import { reviewState } from "./ReviewTypes";
import Heart from "../util/Heart";
import { useEffect, useState } from "react";
import Link from "next/link";

const CommunityCard: React.FC<reviewState> = (props) => {
  const [heartnum, setHeartNum] = useState(props.reviewLike);
  const [data, setdata] = useState<reviewState>();

  const heartCountHandler = (islike: boolean) => {
    if (islike) {
      setHeartNum(heartnum + 1);
    } else {
      setHeartNum(heartnum - 1);
    }
  };

  useEffect(() => {
    setdata(props);
  }, [props]);

  if (data === null) {
    return <></>;
  }

  return (
    <div className={styled.CommunityCard}>
      <div className={styled.CommunityCard_Header}>
        <div>
          <span>{data?.writerNickName}</span>
          <span>님의 포스팅</span>
        </div>
        <div>
          <Heart userLike={false} onClick={heartCountHandler} />
          <span>{data?.reviewLike}</span>
        </div>
      </div>
      <div className={styled.CommunityCard_Image}>
        <Link
          href={{
            pathname: `/community/detail/${props.reviewId}`,
            query: {
              id: props.reviewId,
            },
          }}
        >
          <img src={data?.reviewImgs[0]} />
        </Link>
      </div>
      <div className={styled.CommunityCard_Contents}>
        <Link
          href={{
            pathname: `/community/detail/${data?.reviewId}`,
            query: {
              id: data?.reviewId,
            },
          }}
        >
          <h4 className={styled.CommunityCard_Contents_title}>
            {data?.reviewTitle}
          </h4>
          <p className={styled.CommunityCard_Contents_text}>{data?.desc}</p>
        </Link>
      </div>

      <div className={styled.CommunityCard_hashTag}>
        {data?.hashTag.map((hashTag) => (
          <span>#{hashTag}</span>
        ))}
      </div>
    </div>
  );
};
export default CommunityCard;
