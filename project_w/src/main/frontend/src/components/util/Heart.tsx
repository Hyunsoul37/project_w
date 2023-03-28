import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import styled from "./Heart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface HeartState {
  userLike: boolean;
  onClick?: (islike: boolean) => void;
}
const Heart: React.FC<HeartState> = (props) => {
  const user = useSelector((state: RootState) => state.user);
  const [like, setLike] = useState(props.userLike);
  useEffect(() => {
    if (!user.isLoggedIn) {
      setLike(false);
    }
  }, [user.isLoggedIn]);

  const ClickHandler = (islike: boolean) => () => {
    if (props.onClick) {
      props.onClick(islike);
    }
    if (!user.isLoggedIn) {
      return;
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
