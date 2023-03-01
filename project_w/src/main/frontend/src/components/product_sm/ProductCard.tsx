import styled from './ProductCard.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { wineState } from './productTypes';
import Link from 'next/link';

const ProductCard: React.FC<wineState> = (props) => {
  const [like, setLike] = useState(props.userLike);
  return (
   
    <div className={styled.ProductCard}>
      <div className={styled.imageWrapper}>
      <Link href={{
      pathname:`/product/detail/${props.wineEngName}`,
      query:{
        id:props.winePid,
        winename:props.wineEngName,
      }
      }}>
        <img src={`/images/wine/${props.winePid - 1}.png`} />
      </Link>
        <div className={styled.heart}>
          {like ? (
            <AiFillHeart onClick={() => setLike(false)} />
          ) : (
            <AiOutlineHeart onClick={() => setLike(true)} />
          )}
        </div>
      </div>
      <Link href={{
      pathname:`/product/detail/${props.wineEngName}`,
      query:{
        id:props.winePid,
        winename:props.wineEngName,
      }
      }}> 
      <p id="name_ko">{props.wineKorName}</p>
      </Link>
     
      <p id="name_en">{props.wineEngName}</p>
      <p id="desc">{props.wineDesc}</p>
      <div className={styled.wineInfoBox}>
        <span>{props.wineType}</span>
        <span>{props.wineCountry}</span>
        <span>{props.wineGrapeVariety}</span>
      </div>
      <h4>{props.winePrice?.replace('원', 'won')}</h4>
    </div>
    
  );
};
export default ProductCard;
