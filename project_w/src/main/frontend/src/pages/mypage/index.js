import MyPage from "../../components/mypage/MyPage";
import Seo from "../../util/Seo";

const mypage = () => {
  return (
    <>
      <Seo title={"마이페이지"} />
      <MyPage />
    </>
  );
};
export default mypage;
