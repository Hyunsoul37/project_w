import styled from './ProductCard.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

export interface ProductCardState {
  winePid: number;
  wineKorName: string;
  wineEngName?: string;
  winePrice: string;
  wineType: string;
  winebody?: number;
  wineAcidity?: number;
  wineSweet?: number;
  wineAlcohol?: string;
  wineTannin?: number;
  wineCountry: string;
  wineRegion: string;
  wineDesc?: string;
  wineStarPoint?: number;
  wineRecommendedSnack?: string;
  wineGrapeVariety?: string;
  userLike?: boolean;
}
const ProductCard: React.FC<ProductCardState> = (props) => {
  const [like, setLike] = useState(props.userLike);
  return (
    <div className={styled.ProductCard}>
      <div className={styled.imageWrapper}>
        <img src={`/images/wine/${props.winePid - 1}.png`} />
        <div className={styled.heart}>
          {like ? (
            <AiFillHeart onClick={() => setLike(false)} />
          ) : (
            <AiOutlineHeart onClick={() => setLike(true)} />
          )}
        </div>
      </div>
      <p id="name_ko">{props.wineKorName}</p>
      <p id="name_en">{props.wineEngName}</p>
      <p id="desc">{props.wineDesc}</p>
      <div className={styled.wineInfoBox}>
        <span>{props.wineType}</span>
        <span>{props.wineCountry}</span>
        <span>{props.wineGrapeVariety}</span>
      </div>
      <h4>{props.winePrice.replace('원', 'won')}</h4>
    </div>
  );
};
export default ProductCard;
