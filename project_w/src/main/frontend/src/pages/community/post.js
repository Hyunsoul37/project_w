import Post from "../../components/community/Post";
import Seo from "../../util/Seo";

const post = () => {
  return (
    <>
      <Seo title={"커뮤니티 새글작성"} />
      <Post />
    </>
  );
};
export default post;
