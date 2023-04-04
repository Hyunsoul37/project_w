import Seo from "../util/Seo";
import Banner from "../components/home/Banner";
import BestReview from "../components/home/BestReview";
import SelectorArea from "../components/home/SelectorArea";
import RankProd from "../components/home/RankProd";
import { useRef, useEffect } from "react";
import axios from "axios";

const Home = ({ rank, best_review }) => {
  return (
    <div>
      <Seo title="Home" />
      <Banner />
      <SelectorArea />
      <BestReview list={best_review} />
      <RankProd {...rank} />
    </div>
  );
};
export default Home;

export async function getServerSideProps() {
  let Rank = {};
  let bestReview = {};
  await axios
    .get(
      "http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/product/rank"
    )
    .then((res) => (Rank = res.data.data));
  await axios
    .get(
      "http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/community/best-review"
    )
    .then((res) => (bestReview = res.data.data));

  return {
    props: { rank: Rank, best_review: bestReview },
  };
}
