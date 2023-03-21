import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logout, DataClear } from "../../slice/userSlice";
import styled from "./Header.module.css";
import { RiUser5Line } from "react-icons/ri";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userData = user.userData ? user.userData.data : null;
  const [headerBG, setHeaderBg] = useState(false);

  const LoginBtnHandler = () => {
    router.push({ pathname: "/login" });
    //router.push("/login");
  };
  const LogOutHandler = () => {
    dispatch(logout());
  };

  const DataClearHandler = () => {
    dispatch(DataClear());
  };

  const HeaderFadeHandler = () => {
    if (window.scrollY === 0) {
      setHeaderBg(false);
    } else {
      setHeaderBg(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HeaderFadeHandler);
    HeaderFadeHandler();
  }, []);

  return (
    <header
      className={[styled.headerWrapper, headerBG ? styled.activebg : ""].join(
        " "
      )}
    >
      <div className="maxframe">
        <nav className={styled.Header}>
          <span className={styled.logo} onClick={() => router.push("/")}>
            WAGU
          </span>
          <div className={styled.btnWrapper}>
            <span
              onClick={() =>
                router.push({ pathname: "/product", query: { page: 1 } })
              }
            >
              PRODUCT
            </span>
            <span onClick={() => router.push({ pathname: "/community" })}>
              COMMUNITY
            </span>
            {/* <span onClick={() => router.push("/QnA")}>QnA</span>
            <span onClick={() => router.push("/notice")}>NOTICE</span> */}
          </div>
          <div className={styled.btnWrapper}>
            {user.isLoggedIn ? (
              <>
                <RiUser5Line
                  onClick={() => router.push({ pathname: "/mypage" })}
                />
                <span onClick={LogOutHandler}>LOGOUT</span>
              </>
            ) : (
              <>
                <span onClick={() => router.push("/login/join")}>SIGN IN</span>
                <span onClick={LoginBtnHandler}>LOGIN</span>
              </>
            )}
            {/* <button onClick={DataClearHandler}>Data Clear</button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
