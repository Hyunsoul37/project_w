import { wineState } from "../product_sm/productTypes";
import styled from "./Detail.module.css";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { drawStar } from "../util/util";
import StarRatings from "react-star-ratings";
import Image from "next/image";

const Detail: React.FC<wineState> = (props) => {
  const snack = props?.recommendedSnack?.split("/");
  const newarr = snack?.map((data) => data.replaceAll(" ", ""));
  const arrUnique = [...new Set(newarr)];
  const snackList = arrUnique.filter((data) => data !== "null");

  if (!props?.imageUrl) {
    return <></>;
  }
  return (
    <div className="maxframe">
      <div className={styled.Detail}>
        <div className={styled.imageWrapper}>
          <Image
            alt="wineimg"
            width={318}
            height={318}
            src={props.imageUrl ? props.imageUrl : ""}
          />
        </div>
        <div className={styled.wineInfoWrapper}>
          <div className={styled.wineName}>
            <h4>{props.korName}</h4>
            <p>{props.engName}</p>
          </div>
          <div className={styled.wineInfo}>
            <table>
              <tbody>
                <tr>
                  <th>소비자가</th>
                  <td>{props.price}</td>
                  <th>생산국가 / 지역</th>
                  <td>
                    {props.country} / {props.region}
                  </td>
                </tr>
                <tr>
                  <th>평점({props.starPoint}점)</th>
                  <td>
                    <StarRatings
                      rating={props.starPoint}
                      starRatedColor="#61002E"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      name="rating"
                    />
                  </td>
                  <th>알콜도수</th>
                  <td>{props.alcohol !== "null" ? props.alcohol : "없음"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styled.wineTasty}>
            <table>
              <tbody>
                <tr>
                  <th>당도</th>
                  <td>
                    {props.sweet
                      ? drawStar(props.sweet, <FaCircle />, <FaRegCircle />)
                      : "없음"}
                  </td>
                  <th>바디</th>
                  <td>
                    {props.body
                      ? drawStar(props.body, <FaCircle />, <FaRegCircle />)
                      : "없음"}
                  </td>
                </tr>
                <tr>
                  <th>산도</th>
                  <td>
                    {props.acidity
                      ? drawStar(props.acidity, <FaCircle />, <FaRegCircle />)
                      : "없음"}
                  </td>
                  <th>타닌</th>
                  <td>
                    {props.tannin
                      ? drawStar(props.tannin, <FaCircle />, <FaRegCircle />)
                      : "없음"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styled.wineFood}>
            <p>음식매칭</p>
            <div>
              {snackList.map((food) => (
                <Image
                  alt="food"
                  width={100}
                  height={100}
                  src={`/images/icon/${food}.PNG`}
                />
              ))}
            </div>
            <div className={styled.wineFoodTextWrapper}>
              {snackList.length > 0
                ? snackList.map((food) => <div key={`${food}_txt`}>{food}</div>)
                : "없음"}
            </div>
          </div>
        </div>
      </div>
      <div className={styled.Desc}>
        <img src="/images/wineBg.png" />
        <p className={styled.Desctitle}>{props.korName}</p>
        <p className={styled.desctext}>{props.desc}</p>
      </div>
    </div>
  );
};
export default Detail;
