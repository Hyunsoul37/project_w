import { useEffect, useState } from "react";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa";
import styled from "./ReviewDetail.module.css";
import { reviewState } from "./ReviewTypes";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import CommunityComment from "./CommunityComment";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useRouter } from "next/router";

const ReviewDetail: React.FC<reviewState> = (props) => {
  const [heart, setHeart] = useState(false);
  const [curCard, setCurCard] = useState(0);
  const [changeFinish, setChangeFinish] = useState(true);
  const [image, setImage] = useState<string[]>([]);
  const router = useRouter();

  const user = useSelector((state: RootState) => state.user);

  const NextArrow = (props: CustomArrowProps & { cssclassName: string }) => {
    const { className, style, currentSlide, onClick, slideCount } = props;
    const ClickHandler = () => {
      if (!changeFinish) {
        return;
      }
      setChangeFinish(false);
      if (currentSlide !== undefined && slideCount != undefined) {
        if (currentSlide < slideCount - 1) {
          setCurCard(currentSlide + 1);
        } else {
          setCurCard(0);
        }
      }
    };
    return (
      <span
        className={[props.cssclassName, className].join(" ")}
        style={{ ...style, display: "block" }}
        onClick={(e) => {
          ClickHandler();
          if (onClick) onClick(e);
        }}
      >
        <AiFillCaretRight />
      </span>
    );
  };

  const PrevArrow = (props: CustomArrowProps & { cssclassName: string }) => {
    const { className, style, currentSlide, onClick, slideCount } = props;
    const ClickHandler = () => {
      if (!changeFinish) {
        return;
      }
      setChangeFinish(false);
      if (currentSlide != undefined && slideCount != undefined) {
        if (currentSlide > 0) {
          setCurCard(currentSlide - 1);
        } else {
          setCurCard(slideCount - 1);
        }
      }
    };
    return (
      <span
        className={[props.cssclassName, className].join(" ")}
        style={{ ...style, display: "block" }}
        onClick={(e) => {
          ClickHandler();
          if (onClick) onClick(e);
        }}
      >
        <AiFillCaretLeft />
      </span>
    );
  };

  const Settings_three = {
    initialSlide: 0,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    draggable: false,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow cssclassName={styled.nextbtn} />,
    prevArrow: <PrevArrow cssclassName={styled.prevbtn} />,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setCurCard(nextSlide);
    },
    afterChange: () => {
      setChangeFinish(true);
    },
  };
  const Settings_one = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    nextArrow: <NextArrow cssclassName={styled.nextbtn} />,
    prevArrow: <PrevArrow cssclassName={styled.prevbtn} />,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setCurCard(nextSlide);
    },
  };

  let setting;
  if (image.length >= 3) {
    setting = Settings_three;
  } else {
    setting = Settings_one;
  }
  useEffect(() => {
    const newimg = props.reviewImgs.filter((c) => c !== null);
    setImage(newimg);
  }, []);
  return (
    <div className="maxframe">
      <div className={styled.ReviewDetail}>
        <h1>COMMUNITY</h1>
        <h3>와구 회원들과의 즐거운 와인 이야기</h3>
        <div className={styled.HeaderImage}>
          <img src={props.reviewImgs[0]} />
          <div>
            <p>{props.reviewTitle}</p>
          </div>
        </div>
        <div className={styled.ReviewInfo}>
          <table>
            <tbody>
              <tr>
                <th>와인타입</th>
                <td>{props.wineType}</td>
                <th>와인명</th>
                <td id="winename">{props.wineName}</td>
                <th>구매가격</th>
                <td>{props.winePrice}</td>
              </tr>
              <tr>
                <th>해시태그</th>
                <td colSpan={5}>
                  {props.hashTag.map((tag, idx) => (
                    <span key={`tag_${idx}`}>{tag}</span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styled.writerInfo}>
          <img
            src={
              props.profileimg === undefined
                ? `/images/default_profile.png`
                : undefined
            }
          />
          <div>
            <span>{props.writerNickName}</span>
            <span>{props.regiDate.split("T")[0]}</span>
          </div>
          {user.isLoggedIn &&
          props.writerId === user.userData.data.memberInfo.pid ? (
            <div
              className={styled.ReviewEditBtn}
              onClick={() =>
                router.push({
                  pathname: "/community/post",
                  query: { reviewId: props.reviewId, edit: true },
                })
              }
            >
              <p>수정하기</p>
            </div>
          ) : (
            <div
              className={[
                styled.ReviewLikeBtn,
                heart ? styled.active : "",
              ].join(" ")}
              onClick={() => setHeart(!heart)}
            >
              <FaHeart />
              <p>좋아요</p>
            </div>
          )}
        </div>
        <div className={styled.ReviewSliderWrapper}>
          <Slider
            {...setting}
            className={
              image.length >= 3
                ? styled.ReviewSlider_three
                : styled.ReviewSlider
            }
            // dotsClass={styled.dots}
          >
            {image.map((img, idx) => (
              <img
                key={`reviewimg_${idx}`}
                alt={img}
                src={img}
                className={idx === curCard ? "" : styled.notcenter}
              />
            ))}
          </Slider>
        </div>
        <div className={styled.ReviewContents}>
          <p>{props.desc}</p>
        </div>
        <CommunityComment reviewId={props.reviewId} />
      </div>
    </div>
  );
};
export default ReviewDetail;
