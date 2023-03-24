import { useDispatch, useSelector } from "react-redux";
import Product_SM from "../../components/product_sm/Product_SM";
import Product_HJ from "../../components/product_hj/Product_HJ";
import data from "../../components/dummydata/wine_add_sweet.json";
import Seo from "../../util/Seo";
import { useEffect } from "react";
import { GetList, GetCount } from "../../slice/wineSlice";
import Loading from "../../components/ui/Loading";

//Product_SM
const product = ({ query }) => {
  const { user, wine } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const queryurl = decodeURI(window.location.search);
    const queryarr = queryurl.split("&");
    queryarr.shift();
    const counturl = queryarr.length > 0 ? `?${queryarr.join("&")}` : "";
    dispatch(
      GetList({
        userId: user.isLoggedIn ? user.userData.data.memberInfo.pid : -1,
        queryurl: queryurl,
      })
    );
    dispatch(
      GetCount({
        counturl: counturl,
      })
    );
  }, [query]);

  return (
    <>
      <Seo title="Product" />
      {!wine.isLoadding ? (
        <Product_SM />
      ) : (
        <div style={{ padding: "80px 0px" }}>
          <Loading height={700} />
        </div>
      )}
    </>
  );
};
export default product;

export function getServerSideProps({ query }) {
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
