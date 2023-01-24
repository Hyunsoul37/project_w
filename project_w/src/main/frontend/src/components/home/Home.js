import Banner from './Banner';
import BestReview from './BestReview';
import styled from './Home.module.css';

const Home = () => {
  return (
    <div className={styled.Home}>
      <Banner />
      <BestReview />
    </div>
  );
};

export default Home;
