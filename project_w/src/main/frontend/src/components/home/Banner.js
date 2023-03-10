import styled from './Banner.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerimg = [
  '/images/banner_1.png',
  '/images/banner_2.png',
  '/images/banner_3.png',
];
const Settings = {
  autoplay: true,
  infinite: true,
  draggable: false,
  speed: 3000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  arrows: false,
  //   slidesToScroll: 1,
};
const Banner = () => {
  return (
    <div>
      <Slider {...Settings} className={styled.Banner}>
        {bannerimg.map((bannerimg, idx) => (
          <img key={`banner_${idx}`} alt="bannerimg" src={bannerimg} />
        ))}
      </Slider>
    </div>
  );
};
export default Banner;
