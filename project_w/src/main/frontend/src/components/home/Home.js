import Banner from './Banner';
import SelectorArea from './SelectorArea';
import BestReview from './BestReview';
import RankProd from './RankProd';
import styled from './Home.module.css';

const Home = () => {
  return (
    <div className={styled.Home}>
      <Banner />
      <SelectorArea />
      <BestReview />
      <RankProd />
    </div>
  );
};

export default Home;
