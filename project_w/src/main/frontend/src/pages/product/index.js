import { useDispatch, useSelector } from "react-redux";
import Product_SM from "../../components/product_sm/Product_SM";
import Product_HJ from "../../components/product_hj/Product_HJ";
import data from "../../components/dummydata/wine_add_sweet.json";
import { useRouter } from "next/router";
import Seo from "../../util/Seo";
import { useCallback, useEffect, useState } from "react";
import useFetch from "../../customHooks/useFetch";
//Product_SM
const product = ({ query }) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const [list, setList] = useState([]);
  const [fullpagenum, setFullPageNum] = useState(0);
  const { sendRequestData } = useFetch();
  const GetproductList = (data) => {
    if (data) {
      setList(data.data);
    }
  };
  const GetproductCount = (data) => {
    if (data) {
      setFullPageNum(data.data);
    }
  };

  const getList = async () => {
    await sendRequestData({
      url: `api/product/wine/${
        user.isLoggedIn ? user.userData.data.memberInfo.pid : 0
      }/search?page=${query.page}`,
      type: "GET",
      data: null,
      header: { "Content-Type": "application/json" },
      AfterGetData: GetproductList,
    });
    await sendRequestData({
      url: `api/product/wine/count`,
      type: "GET",
      data: null,
      header: { "Content-Type": "application/json" },
      AfterGetData: GetproductCount,
    });
  };
  useEffect(() => {
    getList();
  }, [query]);

  return (
    <>
      <Seo title="Product" />
      <Product_SM list={list} fullpage={fullpagenum} />
    </>
  );
};
export default product;

export function getServerSideProps({ query }) {
  console.log(query);

  //const { page ,type,} = query;
  return {
    props: { query },
  };
}

// export async function getServerSideProps() {
//   //여기에 서버에서 받는 코드 작성
//   const pid = localStorage.getItem("pid");

//   return {
//     props: { list },
//   };
// }

//Product_HJ
// const product = () => {
//   const router = useRouter();
//   const { food, body, sweet, sour } = router.query;
//   console.log('food: ', food);
//   console.log('body: ', body);
//   console.log('sweet: ', sweet);
//   console.log('sour: ', sour);

//   // console.log(data);
//   return <Product_HJ {...data} />;
// }
//export default product;
