import styled from "./ProductCard.module.css";
import { wineState } from "./productTypes";
import Link from "next/link";
import Heart from "../util/Heart";
import Image from "next/image";
const imageLoader = require("../../util/imageLoader");

const ProductCard: React.FC<wineState> = (props) => {
  const winetype =
    props.type === 1
      ? "레드"
      : props.type === 2
      ? "화이트"
      : props.type === 3
      ? "로제"
      : props.type === 4
      ? "스파클링"
      : props.type === 5
      ? "주정강화"
      : "디저트";
  return (
    <div className={styled.ProductCard}>
      <div className={styled.imageWrapper}>
        <Link
          href={{
            pathname: `/product/detail/${props.engName}`,
            query: {
              id: props.pid,
              winename: props.engName,
            },
          }}
        >
          <Image
            alt="wine"
            // loader={imageLoader}
            width={100}
            height={100}
            sizes="(max-width: 768px) 200px,
              (max-width: 1200px) 200px,"
            // loading={"lazy"}
            priority
            src={
              props.imageUrl
                ? props.imageUrl
                : `/images/wine/${props.pid - 1}.png`
            }
          />
        </Link>
        <div className={styled.heart}>
          <Heart userLike={props.like} />
        </div>
      </div>
      <Link
        href={{
          pathname: `/product/detail/${props.engName}`,
          query: {
            id: props.pid,
            winename: props.engName,
          },
        }}
      >
        <p id="name_ko">{props.korName}</p>
      </Link>

      <p id="name_en">{props.engName}</p>
      <p id="desc">{props.desc}</p>
      <div className={styled.wineInfoBox}>
        <span>{winetype}</span>
        <span>{props.country}</span>
        <span>{props.grapeVariety}</span>
      </div>
      <h4>{props.price}won</h4>
    </div>
  );
};
export default ProductCard;
