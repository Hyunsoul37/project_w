import ProductFilter from './ProductFilter';
import { MdFilterAlt } from 'react-icons/md';
import styled from './Product_SM.module.css';
import { useState } from 'react';
import ProductCard from './ProductCard';
import data from '../util/wine_add_sweet.json';
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styled.ProductCardWrapper}>
          {data.map((list) => (
            <ProductCard {...list} islike={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product_SM;
