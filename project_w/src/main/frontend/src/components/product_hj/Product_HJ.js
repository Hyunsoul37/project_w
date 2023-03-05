import ProductList from "./ProductList";

const Product_HJ = (props) => {
   console.log(props[0])
   //const arr = [props]
   //console.log(arr)
   return (
      <>
         <div className="maxframe">
            <div className="sub_p_wrap">
               <div className="sub_p_title">
                  <h2>PRODUCT</h2>
                  <span>원하는 상품을 찾아보세요</span>
               </div>
               {/* {props.map((data, index) => {
                  <ProductList data={data} />
               })} */}
            </div>
         </div>
      </>
   );
};

export default Product_HJ;