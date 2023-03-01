import data from '../../../components/util/wine_add_sweet.json';
import Detail from '../../../components/detail/Detail.tsx';

const detailPage = ({ id }) => {
  const filterlist = data.filter((d) => d.winePid === Number(id));
  console.log(filterlist);
  return <Detail {...filterlist[0]} />;
};
export default detailPage;

export function getServerSideProps({ query }) {
  //여기에 서버에서 받는 코드 작성
  const { id } = query;

  return {
    props: { id },
  };
}
