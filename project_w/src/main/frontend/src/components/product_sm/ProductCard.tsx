import styled from './ProductCard.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

export interface ProductCardState {
  ID: number;
  winename_ko: string;
  winename_en?: string;
  price: string;
  winetype: string;
  body?: number;
  acidity?: number;
  sweet?: number;
  alcohol?: string;
  tannins?: number;
  country: string;
  region: string;
  description?: string;
  star?: number;
  food?: string;
  grapeVariety?: string;
  islike: boolean;
}
const ProductCard: React.FC<ProductCardState> = (props) => {
  const [like, setLike] = useState(props.islike);
  return (
    <div className={styled.ProductCard}>
      <div className={styled.imageWrapper}>
        <img src={`/images/wine/${props.ID - 1}.png`} />
        <div className={styled.heart}>
          {like ? (
            <AiFillHeart onClick={() => setLike(false)} />
          ) : (
            <AiOutlineHeart onClick={() => setLike(true)} />
          )}
        </div>
      </div>
      <h4>{props.winename_ko}</h4>
      <p>{props.winename_en}</p>
      <p>{props.description}</p>
      <div>
        <span>{props.winetype}</span>
        <span>{props.country}</span>
        <span>{props.grapeVariety}</span>
      </div>
      <h4>{props.price}won</h4>
    </div>
  );
};
export default ProductCard;
