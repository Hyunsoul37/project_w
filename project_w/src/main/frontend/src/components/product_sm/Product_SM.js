import ProductFilter from './ProductFilter';
import { MdFilterAlt } from 'react-icons/md';
import styled from './Product_SM.module.css';
import { useState } from 'react';

const Product_SM = () => {
  const [showFilter, setshowFilter] = useState(false);
  return (
    <div className={styled.ProductWrapper}>
      <div className="maxframe">
        <div className={styled.title}>
          <h4>PRODUCT</h4>
          <MdFilterAlt onClick={() => setshowFilter(!showFilter)} />
        </div>
      </div>
      {showFilter && <ProductFilter />}
    </div>
  );
};
export default Product_SM;
