import { useSelector } from "react-redux";
import ReviewDetail from "../../../components/community/ReviewDetail";
import data from "../../../components/dummydata/review_list.json";
import Seo from "../../../util/Seo";
import axios from "axios";

const CommunityDetail = ({ data }) => {
  // const review = useSelector((state) => state.review);
  // const filterlist = review.post.filter((d) => d.reviewId === Number(id));
  // console.log(filterlist);
  console.log(data);
  return (
    <>
      <Seo title={`${data.writerNickName}님의 포스팅`} />
      <ReviewDetail {...data} />
    </>
  );
};
export default CommunityDetail;

export async function getServerSideProps({ query }) {
  //여기에 서버에서 받는 코드 작성
  const { id } = query;
  let data;
  await axios
    .get(`http://winetoy.shop/api/community/review/detail?reviewId=${id}`)
    .then((res) => (data = { ...res.data.data }))
    .catch((err) => console.log(err));

  return {
    props: { data },
  };
}
