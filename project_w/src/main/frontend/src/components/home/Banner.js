import Slider from 'react-slick';
import banner_0 from '../../image/banner_1.png';
import banner_1 from '../../image/banner_2.png';
import banner_2 from '../../image/banner_3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerimg = [banner_0, banner_1, banner_2];
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
      <Slider {...Settings}>
        {bannerimg.map((bannerimg, idx) => (
          <img
            key={`banner_${idx}`}
            alt="bannerimg"
            src={bannerimg}
            //   style={{ width: '100%' }}
          />
        ))}
      </Slider>
    </div>
  );
};
export default Banner;
