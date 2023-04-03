import axios from "axios";
import Post from "../../components/community/Post";
import Seo from "../../util/Seo";

const post = ({ reviewId, edit, data }) => {
  return (
    <>
      <Seo title={"커뮤니티 새글작성"} />
      {reviewId !== -1 ? (
        <Post reviewId={reviewId} edit={edit} {...data} />
      ) : (
        <Post reviewId={reviewId} edit={edit} />
      )}
    </>
  );
};
export default post;

export async function getServerSideProps({ query }) {
  const { reviewId, edit } = query;
  let data = {};
  console.log(edit);
  if (reviewId !== -1) {
    await axios
      .get(
        `http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/community/review/detail?reviewId=${reviewId}`
      )
      .then((res) => {
        data = { ...res.data.data };
      })
      .catch((err) => console.log(err));
  }

  return {
    props: { reviewId, edit, data },
  };
}
