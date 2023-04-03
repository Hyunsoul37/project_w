import axios from "axios";
import Detail from "../../../components/detail/Detail.tsx";
import WineTerms from "../../../components/detail/Wineterms";
import Seo from "../../../util/Seo";
import { useEffect, useState } from "react";

const detailPage = ({ data }) => {
  //const [detailData, setDetailData] = useState({});
  //const filterlist = data.filter((d) => d.winePid === Number(id));

  // useEffect(() => {
  //   GetDetailInfo();
  // }, []);

  return (
    <>
      <Seo title={data.wineKorName} />
      <Detail {...data} />
      <WineTerms />
    </>
  );
};
export default detailPage;

export async function getServerSideProps({ query }) {
  const { id } = query;
  let data = {};
  await axios
    .get(
      `http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/product/wine/detail?pid=${id}`
    )
    .then((res) => (data = res.data.data));
  // const GetDetailInfo = async () => {
  //   const response = await fetch(`/api/product/wine/detail?pid=${id}`, {
  //     method: "GET",
  //     body: null,
  //     headers: { "Content-Type": "application/json;charset=UTF-8" },
  //   });
  //   const data = await response.json();
  //   setDetailData(data.data);
  // };
  return {
    props: { data },
  };
}
