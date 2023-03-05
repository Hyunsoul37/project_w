import { wineState } from "../product_sm/productTypes";
import styled from "./Detail.module.css";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { drawStar } from "../util/util";
import StarRatings from "react-star-ratings";

const Detail: React.FC<wineState> = (props) => {
  const snack = props.wineRecommendedSnack?.split("/");
  const newarr = snack?.map((data) => data.replaceAll(" ", ""));
  const arrUnique = [...new Set(newarr)];
  const snackList = arrUnique.filter((data) => data !== "null");

  return (
    <div className="maxframe">
      <div className={styled.Detail}>
        <div className={styled.imageWrapper}>
          <img src={`/images/wine/${props.winePid - 1}.png`} />
        </div>
        <div className={styled.wineInfoWrapper}>
          <div className={styled.wineName}>
            <h4>{props.wineKorName}</h4>
            <p>{props.wineEngName}</p>
          </div>
          <div className={styled.wineInfo}>
            <table>
              <tbody>
                <tr>
                  <th>소비자가</th>
                  <td>{props.winePrice}</td>
                  <th>생산국가 / 지역</th>
                  <td>
                    {props.wineCountry} / {props.wineRegion}
                  </td>
                </tr>
                <tr>
                  <th>평점({props.wineStarPoint}점)</th>
                  <td>
                    <StarRatings
                      rating={props.wineStarPoint}
                      starRatedColor="#61002E"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      name="rating"
                    />
                  </td>
                  <th>알콜도수</th>
                  <td>
                    {props.wineAlcohol !== "null" ? props.wineAlcohol : "없음"}
                  </td>
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
                    {props.wineSweet
                      ? drawStar(props.wineSweet, <FaCircle />, <FaRegCircle />)
                      : "없음"}
                  </td>
                  <th>바디</th>
                  <td>
                    {props.winebody
                      ? drawStar(props.winebody, <FaCircle />, <FaRegCircle />)
                      : "없음"}
                  </td>
                </tr>
                <tr>
                  <th>산도</th>
                  <td>
                    {props.wineAcidity
                      ? drawStar(
                          props.wineAcidity,
                          <FaCircle />,
                          <FaRegCircle />
                        )
                      : "없음"}
                  </td>
                  <th>타닌</th>
                  <td>
                    {props.wineTannin
                      ? drawStar(
                          props.wineTannin,
                          <FaCircle />,
                          <FaRegCircle />
                        )
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
                <img key={food} src={`/images/icon/${food}.PNG`} />
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
        <p className={styled.Desctitle}>{props.wineKorName}</p>
        <p className={styled.desctext}>{props.wineDesc}</p>
      </div>
    </div>
  );
};
export default Detail;
