import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dummy01 from '../../image/dummy01.png';
import dummy02 from '../../image/dummy02.png';
import dummy03 from '../../image/dummy03.png';

const SelectorSlider = () => {
   const settings ={
      rows:1,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      speed: 2000,
   };
   return(
      <Slider {...settings}>
         <div>
            <img src={dummy01} alt=""/>
         </div>
         <div>
            <img src={dummy02} alt=""/>
         </div>
         <div>
            <img src={dummy03} alt=""/>
         </div>
      </Slider>
   );
}

export default SelectorSlider; 