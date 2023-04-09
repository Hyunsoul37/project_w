import Slider from "react-slick";
import styled from "./Selector.module.css";
import Image from "next/image";

const SelectorSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    // variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    // centerMode: true,
    // touchRatio: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: false,
    draggable: false,
    arrows: false,
    cssEase: "linear",
    touchMove: false,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };
  const flowImgs = [];
  for (let idx = 0; idx <= 14; idx++) {
    flowImgs.push(`/images/main_flow${idx}.png`);
  }

  return (
    <div className={styled.sliderwrapper}>
      <Slider {...settings} className={styled.slider}>
        {flowImgs.map((flowImgs, idx) => (
          <Image
            key={`flowimg${idx}`}
            src={flowImgs}
            alt={`flowimg${idx}`}
            width={250}
            height={250}
            //className={styled.h25}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SelectorSlider;
