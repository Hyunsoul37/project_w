import Slider from "react-slick";
import styled from "./Selector.module.css";

const SelectorSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    touchRatio: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: false,
    draggable: false,
    arrows: false,
    cssEase: "linear",
    touchMove: false,
    //  easing: 'linear',
    //  cssEase: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
  };
  const flowImgs = [];
  for (let idx = 0; idx <= 14; idx++) {
    flowImgs.push(`/images/main_flow${idx}.png`);
  }

  return (
    <Slider {...settings}>
      {flowImgs.map((flowImgs, idx) => (
        <img
          key={`flowimg${idx}`}
          src={flowImgs}
          alt={`flowimg${idx}`}
          className={styled.h25}
        />
      ))}
    </Slider>
  );
};

export default SelectorSlider;
