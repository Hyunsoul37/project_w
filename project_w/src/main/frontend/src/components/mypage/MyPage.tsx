import { useState } from "react";
import styled from "./MyPage.module.css";
import MyPage_All from "./MyPage_All";
import MyPage_LikePost from "./MyPage_LikePost";
import MyPage_LikeWine from "./MyPage_LikeWine";
import MyPage_Post from "./MyPage_Post";
import MyPage_Setting from "./MyPage_Setting";
const menu = [
  "모두보기",
  "내 게시글",
  "좋아요한 와인",
  "좋아요한 게시글",
  "설정",
];
const MyPage = () => {
  const [curtab, setCurTab] = useState(0);
  const curPage =
    curtab === 0 ? (
      <MyPage_All />
    ) : curtab === 1 ? (
      <MyPage_Post />
    ) : curtab === 2 ? (
      <MyPage_LikeWine />
    ) : curtab === 3 ? (
      <MyPage_LikePost />
    ) : (
      <MyPage_Setting />
    );
  return (
    <div className="maxframe">
      <div className={styled.MyPage}>
        <h1>MY PAGE</h1>
        <div className={styled.MyPageTab}>
          {menu.map((m, index) => (
            <span
              className={index === curtab ? styled.active : ""}
              key={m}
              onClick={() => setCurTab(index)}
            >
              {m}
            </span>
          ))}
        </div>
        {curPage}
      </div>
    </div>
  );
};
export default MyPage;
