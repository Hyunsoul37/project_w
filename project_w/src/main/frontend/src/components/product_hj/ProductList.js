import React, { useState } from "react";

const ProductList = (props) => {
   return (
      <>
         <ul>
            <li>
               <figure>
                  <img src="" alt="" />
               </figure>
               <div>
                  <div>
                     {props.wineKorName}
                  </div>
                  <p>영어제목</p>
                  <span>서브설명...</span>
                  <div>
                     <span>로제</span>
                     <span>프랑스</span>
                     <span>기탕트</span>
                  </div>
                  <p>12300won</p>
               </div>
            </li>
         </ul>
      </>
   );
}

export default ProductList;