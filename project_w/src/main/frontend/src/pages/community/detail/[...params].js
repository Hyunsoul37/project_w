import { useSelector } from "react-redux";
import ReviewDetail from "../../../components/community/ReviewDetail";
import data from "../../../components/dummydata/review_list.json";
import Seo from "../../../util/Seo";
import axios from "axios";

const CommunityDetail = ({ data }) => {
  return (
    <>
      <Seo title={`${data.writerNickName}님의 포스팅`} />
      <ReviewDetail {...data} />
    </>
  );
};
export default CommunityDetail;

export async function getServerSideProps({ query }) {
  const { id } = query;
  let data;
  await axios
    .get(
      `http://ec2-15-164-230-113.ap-northeast-2.compute.amazonaws.com:8080/api/community/review/detail?reviewId=${id}`
    )
    .then((res) => (data = { ...res.data.data }))
    .catch((err) => console.log(err));

  return {
    props: { data },
  };
}
