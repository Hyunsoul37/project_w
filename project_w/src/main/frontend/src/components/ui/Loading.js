import Lottie from "lottie-react";
import LottieData from "./94906-wine.json";

const Loading = () => {
  const style = {
    height: 300,
  };

  return <Lottie animationData={LottieData} style={style} />;
};
export default Loading;
