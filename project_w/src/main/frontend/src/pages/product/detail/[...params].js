import data from "../../../components/dummydata/wine_add_sweet.json";
import Detail from "../../../components/detail/Detail.tsx";
import WineTerms from "../../../components/detail/Wineterms";
import Seo from "../../../util/Seo";
const detailPage = ({ id }) => {
  const filterlist = data.filter((d) => d.winePid === Number(id));
  return (
    <>
      <Seo title={filterlist[0].wineKorName} />
      <Detail {...filterlist[0]} />
      <WineTerms />
    </>
  );
};
export default detailPage;

export function getServerSideProps({ query }) {
  //여기에 서버에서 받는 코드 작성
  const { id } = query;

  return {
    props: { id },
  };
}
