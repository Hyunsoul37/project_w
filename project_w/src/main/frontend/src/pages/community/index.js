import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Community from "../../components/community/Community";
import data from "../../components/dummydata/review_list.json";
import { TestGetReview } from "../../slice/reviewSlice.js";

const reviewPage = ({ newlist }) => {
  // const review = useSelector((state) => state.review);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(TestGetReview([...newlist]));
  // }, []);
  return <Community list={newlist} />;
};
export default reviewPage;

export async function getServerSideProps({ query }) {
  //여기에 서버에서 받는 코드 작성
  const list = data;
  let newlist = [];
  for (let i = 0; i < 12; i++) {
    newlist.push(list[i]);
  }
  return {
    props: { newlist },
  };
}
