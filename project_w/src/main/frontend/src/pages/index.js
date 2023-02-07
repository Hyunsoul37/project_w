import Seo from '../util/Seo';
import Banner from '../components/home/Banner';
import BestReview from '../components/home/BestReview';
import SelectorArea from '../components/home/SelectorArea';
import Header from '../components/home/Header';

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <Header />
      <Banner />
      <SelectorArea />
      <BestReview />
    </div>
  );
};
export default Home;
