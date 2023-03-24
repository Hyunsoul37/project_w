import data from "../../../components/dummydata/wine_add_sweet.json";
import Detail from "../../../components/detail/Detail.tsx";
import WineTerms from "../../../components/detail/Wineterms";
import Seo from "../../../util/Seo";
import { useEffect, useState } from "react";
const detailPage = ({ id }) => {
  const [detailData, setDetailData] = useState({});
  //const filterlist = data.filter((d) => d.winePid === Number(id));
  const GetDetailInfo = async () => {
    const response = await fetch(`/api/product/wine/detail?pid=${id}`, {
      method: "GET",
      body: null,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
    const data = await response.json();
    setDetailData(data.data);
  };
  useEffect(() => {
    GetDetailInfo();
  }, []);

  return (
    <>
      <Seo title={detailData.wineKorName} />
      <Detail {...detailData} />
      <WineTerms />
    </>
  );
};
export default detailPage;

export async function getServerSideProps({ query }) {
  //여기에 서버에서 받는 코드 작성
  const { id } = query;

  return {
    props: { id },
  };
}
