import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../customHooks/useFetch";
import { RootState } from "../../store";
import { defaultimg } from "../community/CommunityComment";
import { passwordreg } from "../../pages/login/join";
import styled from "./MyPage_Setting.module.css";

const MyPage_Setting = () => {
  const user = useSelector((state: RootState) => state.user);
  const TitlefileRef = useRef<HTMLInputElement>(null);
  const { sendRequestData: nickNameCheck } = useFetch();
  const [previewTitle, setPreviewTitle] = useState<string | null>(null);
  const [nickName, setNickName] = useState(
    user.userData.data.memberInfo.nickName
  );
  const [password, SetpassWord] = useState("");
  const [passwordCheck, SetpassWordCheck] = useState("");
  const [matchPassword, setMatchPassword] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isNickNameduplicate, setNickNameDuplicate] = useState(false);
  const [iseditedNickName, setIseditedNickName] = useState(false);

  const OnClickImageUploadBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    TitlefileRef.current?.click();
  };

  const PreviewTitleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const imageFile = e.target.files[0];
      if (imageFile && imageFile.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewTitle(reader.result as string);
        };
        reader.readAsDataURL(imageFile);
      }
    }
  };

  const ChangeNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIseditedNickName(false);
    setNickName(e.target.value);
  };

  const CheckPassWord = () => {
    if (password !== passwordCheck) {
      setMatchPassword(false);
    } else {
      setMatchPassword(true);
    }
  };

  const CheckPasswordVaild = () => {
    if (!passwordreg.test(password)) {
      alert("비밀번호는 대소문자,숫자를 포함한 8글자 이상이여야 합니다.");
      setPasswordValid(false);
      SetpassWordCheck("");
    } else {
      setPasswordValid(true);
    }
  };

  const CheckNickNameDuplicate = async (e: React.MouseEvent) => {
    e.preventDefault();
    await nickNameCheck({
      url: `api/auth/nickname-check?nickName=${nickName}`,
      type: "GET",
      data: null,
      header: { "Content-Type": "text/plain" },
      AfterGetData: NickNameDuplicateResponseMessage,
    });
  };
  const NickNameDuplicateResponseMessage = (data: any) => {
    if (data.data.duplicate === true) {
      setNickNameDuplicate(true);
    } else {
      setNickNameDuplicate(false);
    }
    setIseditedNickName(true);
  };

  return (
    <main className={styled.MyPage_Setting}>
      <form>
        <div className={styled.Setting_Email}>
          <div>
            <span>이메일</span>
            <span>{user.userData.data.memberInfo.email}</span>
          </div>
          <span className={styled.fade}>탈퇴하기</span>
        </div>
        <div>
          <span className={iseditedNickName ? styled.marginZero : ""}>
            닉네임
          </span>
          <input
            type="text"
            value={nickName}
            onChange={ChangeNickNameHandler}
          />
          <button onClick={CheckNickNameDuplicate}>중복확인</button>
          {nickName !== "" && iseditedNickName ? (
            isNickNameduplicate ? (
              <p>
                <span></span>닉네임 중복입니다.
              </p>
            ) : (
              <p>
                <span></span>사용가능한 닉네임입니다.
              </p>
            )
          ) : null}
        </div>
        <div>
          <span>비밀번호 변경</span>
          <input
            type="password"
            value={password}
            onChange={(e) => SetpassWord(e.target.value)}
            onBlur={CheckPasswordVaild}
          />
        </div>
        {passwordValid && (
          <div>
            <span className={!matchPassword ? styled.marginZero : ""}>
              비밀번호 확인
            </span>
            <input
              type="password"
              value={passwordCheck}
              onChange={(e) => SetpassWordCheck(e.target.value)}
              onBlur={CheckPassWord}
            />
            {!matchPassword && (
              <p>
                <span></span>비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>
        )}
        <div className={styled.contents_ProfileImage}>
          <div>
            <span>프로필 이미지</span>
            <p
              style={{
                fontSize: "13px",
                color: "var(--primary)",
              }}
            >
              (최대 20MB)
            </p>
          </div>
          <div className={styled.imageBtn} onClick={OnClickImageUploadBtn}>
            <img src={previewTitle ? (previewTitle as string) : defaultimg} />
          </div>
          <input
            className={styled.imageinput}
            ref={TitlefileRef}
            name="image"
            id="image"
            type="file"
            accept="image/*"
            onChange={PreviewTitleImage}
          />
        </div>
        <div className={styled.btnWrapper}>
          <button onClick={(e) => e.preventDefault()}>등록</button>
        </div>
      </form>
    </main>
  );
};
export default MyPage_Setting;
