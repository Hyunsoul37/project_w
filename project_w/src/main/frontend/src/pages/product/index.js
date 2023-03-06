import { useDispatch, useSelector } from "react-redux";
import Product_SM from "../../components/product_sm/Product_SM";
import Product_HJ from "../../components/product_hj/Product_HJ";
import data from "../../components/dummydata/wine_add_sweet.json";

//Product_SM
// const product = ({ list }) => {
//   // return <></>;
//   console.log(list);
//   return <Product_SM list={list} />;
// };
// export default product;

// export async function getServerSideProps() {
//   //여기에 서버에서 받는 코드 작성
//   const list = data;
//   return {
//     props: { list },
//   };
// }

//Product_HJ
const product = () => {
  console.log(data);
  return <Product_HJ {...data} />;
};
export default product;
