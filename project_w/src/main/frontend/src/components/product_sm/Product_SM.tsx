import ProductFilter from './ProductFilter';
import { MdFilterAlt } from 'react-icons/md';
import styled from './Product_SM.module.css';
import { useEffect, useState } from 'react';
import ProductCard, { ProductCardState } from './ProductCard';
import data from '../util/wine_add_sweet.json';

const winetypeTab = [
  'ALL',
  '레드',
  '화이트',
  '로제',
  '디저트',
  '스파클링',
  '주정강화',
];

const Product_SM = () => {
  const [showFilter, setshowFilter] = useState(false);
  const [clickOff, setClickoff] = useState(false);
  const [curfilter, setCurFilter] = useState(0);
  const [winelist, setWinelist] = useState<ProductCardState[]>(data);

  const FilterActiveHandler = () => {
    if (showFilter) {
      setClickoff(true);
      setTimeout(() => setshowFilter(!showFilter), 500);
    } else {
      setshowFilter(!showFilter);
      setClickoff(false);
    }
  };

  const WineTabHandler = (index: number) => () => {
    setCurFilter(index);
  };

  useEffect(() => {
    if (curfilter !== 0) {
      let newWinelist: ProductCardState[] = [];
      data.map((winelist) => {
        if (winelist.wineType === winetypeTab[curfilter]) {
          newWinelist.push({ ...winelist });
        }
      });
      setWinelist(newWinelist);
    } else {
      setWinelist(data);
    }
  }, [curfilter]);

  return (
    <div className={styled.ProductWrapper}>
      <div className="maxframe">
        <div className={styled.title}>
          <h4>PRODUCT</h4>
          <MdFilterAlt onClick={FilterActiveHandler} />
        </div>
        {/* <div className={styled.winetypetab}>
          {winetypeTab.map((data, index) => (
            <span
              key={`winetype_${index}`}
              onClick={WineTabHandler(index)}
              className={index === curfilter ? styled.activetab : ''}
            >
              {data}
            </span>
          ))}
        </div> */}
      </div>

      {showFilter && <ProductFilter isshow={clickOff} />}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styled.ProductCardWrapper}>
          {winelist.map((list) => (
            <ProductCard
              key={`product_${list.winePid}`}
              {...list}
              userLike={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product_SM;
