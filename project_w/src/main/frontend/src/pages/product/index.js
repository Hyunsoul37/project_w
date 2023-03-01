import { useDispatch, useSelector } from 'react-redux';
import Product_SM from '../../components/product_sm/Product_SM';
import data from '../../components/util/wine_add_sweet.json';

const product = ({ list }) => {
  // return <></>;
  return <Product_SM list={list} />;
};
export default product;

export async function getServerSideProps() {
  //여기에 서버에서 받는 코드 작성
  const list = data;
  return {
    props: { list },
  };
}
