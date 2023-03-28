import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Community from "../../components/community/Community";
import data from "../../components/dummydata/review_list.json";
import { GetReview } from "../../slice/reviewSlice";
import Seo from "../../util/Seo";

const reviewPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetReview());
  }, []);

  return (
    <>
      <Seo title={"Community"} />
      <Community />
    </>
  );
};
export default reviewPage;
