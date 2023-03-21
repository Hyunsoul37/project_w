import ReviewDetail from "../../../components/community/ReviewDetail";
import data from "../../../components/dummydata/review_list.json";
import Seo from "../../../util/Seo";

const CommunityDetail = ({ id }) => {
  const filterlist = data.filter((d) => d.reviewId === Number(id));
  return (
    <>
      <Seo title={`${filterlist[0].nickname}님의 포스팅`} />
      <ReviewDetail {...filterlist[0]} />
    </>
  );
};
export default CommunityDetail;

export function getServerSideProps({ query }) {
  //여기에 서버에서 받는 코드 작성
  const { id } = query;

  return {
    props: { id },
  };
}
