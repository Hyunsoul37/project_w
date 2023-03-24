import Lottie from "lottie-react";
import LottieData from "../components/ui/404_not-found.json";
import styled from "./404.module.css";

const NotFoundLottie = () => {
  const style = {
    height: 700,
  };

  return <Lottie animationData={LottieData} style={style} />;
};

const NotFound = () => {
  return (
    <div className={styled.NotFound}>
      <div className="maxframe">{NotFoundLottie()}</div>
    </div>
  );
};
export default NotFound;
