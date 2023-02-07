import Seo from '../util/Seo';
import Banner from '../components/home/Banner';
import BestReview from '../components/home/BestReview';
import SelectorArea from '../components/home/SelectorArea';

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <Banner />
      <SelectorArea />
      <BestReview />
    </div>
  );
};
export default Home;
