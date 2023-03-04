import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import styled from "./Heart.module.css";

interface HeartState {
  userLike: boolean;
  onClick?: (islike: boolean) => void;
}
const Heart: React.FC<HeartState> = (props) => {
  const [like, setLike] = useState(props.userLike);
  const ClickHandler = (islike: boolean) => () => {
    if (props.onClick) {
      props.onClick(islike);
    }
    setLike(islike);
  };
  return (
    <div className={styled.heart}>
      {like ? (
        <AiFillHeart onClick={ClickHandler(false)} />
      ) : (
        <AiOutlineHeart onClick={ClickHandler(true)} />
      )}
    </div>
  );
};
export default Heart;
