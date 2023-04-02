import styled from "./ProductCard.module.css";
import { wineState } from "./productTypes";
import Link from "next/link";
import Heart from "../util/Heart";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import useFetch from "../../customHooks/useFetch";

interface CardProps extends wineState {
  index: number;
}
const url = "/api/product/wine/like";
const type = "POST";
const header = { "Content-Type": "application/json;charset=UTF-8" };

const ProductCard = ({ index, ...rest }: CardProps) => {
  const user = useSelector((state: RootState) => state.user);
  const modalref = useRef<HTMLDialogElement>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { sendRequestData: likewine } = useFetch();

  const winetype =
    rest.type === 1
      ? "레드"
      : rest.type === 2
      ? "화이트"
      : rest.type === 3
      ? "로제"
      : rest.type === 4
      ? "스파클링"
      : rest.type === 5
      ? "주정강화"
      : "디저트";

  const HeartHandler = () => {
    const id = localStorage.getItem("id");
    if (user.isLoggedIn) {
      likewine({
        url: url,
        type: type,
        header: header,
        data: {
          memberPid: id,
          winePid: rest.pid,
        },
        AfterGetData: null,
      });
    } else {
      modalref.current?.showModal();
      setShowModal(true);
    }
  };
  const OffModal = () => {
    modalref.current?.close();
    setShowModal(false);
    router.push(
      { pathname: "/login", query: { returnUrl: router.asPath } },
      "/login"
    );
  };
  return (
    <div className={styled.ProductCard}>
      <div className={styled.imageWrapper}>
        <Link
          href={{
            pathname: `/product/detail/${rest.korName}`,
            query: {
              id: rest.pid,
              winename: rest.korName,
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
            loading={index < 10 ? "eager" : "lazy"}
            priority={index < 10 ? true : false}
            src={
              rest.imageUrl ? rest.imageUrl : `/images/wine/${rest.pid - 1}.png`
            }
          />
        </Link>
        <div className={styled.heart}>
          <Heart userLike={rest.like} onClick={HeartHandler} />
        </div>
      </div>
      <Link
        href={{
          pathname: `/product/detail/${rest.engName}`,
          query: {
            id: rest.pid,
            winename: rest.engName,
          },
        }}
      >
        <p id="name_ko">{rest.korName}</p>
      </Link>

      <p id="name_en">{rest.engName}</p>
      <p id="desc">{rest.desc}</p>
      <div className={styled.wineInfoBox}>
        <span>{winetype}</span>
        <span>{rest.country}</span>
        <span>{rest.grapeVariety}</span>
      </div>
      <h4>{rest.price}won</h4>
      <dialog
        style={!showModal ? { display: "none" } : { display: "flex" }}
        className={styled.modal}
        ref={modalref}
      >
        <p style={{ fontSize: "16px" }}>로그인이 필요한 기능입니다.</p>
        <button onClick={OffModal}>확인</button>
      </dialog>
    </div>
  );
};
export default ProductCard;
