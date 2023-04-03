import Seo from "../util/Seo";
import Banner from "../components/home/Banner";
import BestReview from "../components/home/BestReview";
import SelectorArea from "../components/home/SelectorArea";
import RankProd from "../components/home/RankProd";
import { useRef, useEffect } from "react";

const Home = ({ rank }) => {
  return (
    <div>
      <Seo title="Home" />
      <Banner />
      <SelectorArea />
      <BestReview />
      <RankProd {...rank} />
    </div>
  );
};
export default Home;

export async function getServerSideProps() {
  const Rank = await fetch(
    "http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/product/rank",
    {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    }
  );
  const data = await Rank.json();
  return {
    props: { rank: data.data },
  };
}
