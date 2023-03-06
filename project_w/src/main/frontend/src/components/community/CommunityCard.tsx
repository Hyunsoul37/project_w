import styled from "./CommunityCard.module.css";
import { reviewState } from "./ReviewTypes";
import Heart from "../util/Heart";
import { useEffect, useState } from "react";
import Link from "next/link";

const CommunityCard: React.FC<reviewState> = (props) => {
  const [heartnum, setHeartNum] = useState(props.heartCount);
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

  if (!data) {
    return <></>;
  }

  return (
    <div className={styled.CommunityCard}>
      <div className={styled.CommunityCard_Header}>
        <div>
          <span>{data.nickname}</span>
          <span>님의 포스팅</span>
        </div>
        <div>
          <Heart userLike={false} onClick={heartCountHandler} />
          <span>{heartnum}</span>
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
          <img src={`/images/review/${data.reviewimage[0]}.PNG`} />
        </Link>
      </div>
      <div className={styled.CommunityCard_Contents}>
        <Link
          href={{
            pathname: `/community/detail/${props.reviewId}`,
            query: {
              id: props.reviewId,
            },
          }}
        >
          <h4 className={styled.CommunityCard_Contents_title}>
            {props.reviewTitle}
          </h4>
          <p className={styled.CommunityCard_Contents_text}>
            {props.reviewContents}
          </p>
        </Link>
      </div>

      <div className={styled.CommunityCard_hashTag}>
        {data.hashTag.map((hashTag) => (
          <span>#{hashTag}</span>
        ))}
      </div>
    </div>
  );
};
export default CommunityCard;
