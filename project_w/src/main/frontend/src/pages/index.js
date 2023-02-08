import Seo from '../util/Seo';
import Banner from '../components/home/Banner';
import BestReview from '../components/home/BestReview';
import SelectorArea from '../components/home/SelectorArea';
import RankProd from '../components/home/RankProd';

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <Banner />
      <SelectorArea />
      <BestReview />
      <RankProd />
    </div>
  );
};
export default Home;
