import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { defaultimg } from "../community/CommunityComment";
import Button from "../ui/Button";
import styled from "./MyPage_All.module.css";

const MyPage_All = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={styled.MyPage_All}>
      <div className={styled.userInfo}>
        <img
          src={
            user.userData.data.memberInfo.userImage
              ? user.userData.data.memberInfo.userImage
              : defaultimg
          }
        />
        <div>{user.userData.data.memberInfo.nickName}</div>
        <Button buttontext="설정" buttonColor="main" buttonSize="m" />
      </div>
      <div className={styled.contents}>
        <div>
          <h3>좋아요한 와인</h3>
          <div>준비중입니다.</div>
        </div>
        <div>
          <h3>내 게시글</h3>
          <div>준비중입니다.</div>
        </div>
        <div>
          <h3>좋아요한 게시글</h3>
          <div>준비중입니다.</div>
        </div>
      </div>
    </div>
  );
};
export default MyPage_All;
