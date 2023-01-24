import Banner from './Banner';
import SelectorArea from './SelectorArea';
import BestReview from './BestReview';
import styled from './Home.module.css';

const Home = () => {
  return (
    <div className={styled.Home}>
      <Banner />
      <SelectorArea />
      <BestReview />
    </div>
  );
};

export default Home;
