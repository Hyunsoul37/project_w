import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../customHooks/useFetch";
import { useRouter } from "next/router";
import {
  logout,
  DataClear,
  LogInmaintain,
  saveToken,
} from "../../slice/userSlice";
import styled from "./Header.module.css";
import { RiUser5Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { getCookie } from "../../util/cookiesController";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userData = user.userData ? user.userData.data : null;
  const [headerBG, setHeaderBg] = useState(false);
  const [mobileheaderBG, setmobileheaderBG] = useState(false);
  const { sendRequestData: getAccessToken } = useFetch();
  const [showmoblieMenu, setShowMobileMenu] = useState(false);

  const LoginBtnHandler = () => {
    router.push({ pathname: "/login" });
    setmobileheaderBG(false);
    //router.push("/login");
  };
  const LogOutHandler = () => {
    dispatch(logout());
    setmobileheaderBG(false);
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
    const token = getCookie("token");

    if (token) {
      dispatch(LogInmaintain({ token: token }));
    } else {
      const refreshToken = localStorage.getItem("refresh");
      const id = localStorage.getItem("id");
      getAccessToken({
        url: "/api/auth/refresh",
        type: "POST",
        data: {
          pid: id,
          refreshToken: refreshToken,
        },
        header: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        AfterGetData: (data) => {
          dispatch(LogInmaintain({ token: data.data.reissueToken }));
          saveToken(data.data.reissueToken, refreshToken, id);
        },
      });
    }
  }, []);

  return (
    <>
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
            </div>
            <div className={styled.btnWrapper}>
              {user.isLoggedIn && user.userData.data.memberInfo ? (
                <>
                  <img
                    src={user.userData.data.memberInfo.profileImg}
                    onClick={() => router.push({ pathname: "/mypage" })}
                  />
                  <span onClick={LogOutHandler}>LOGOUT</span>
                </>
              ) : (
                <>
                  <span onClick={() => router.push("/login/join")}>
                    SIGN IN
                  </span>
                  <span onClick={LoginBtnHandler}>LOGIN</span>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
      <>
        <AiOutlineMenu
          className={styled.menuBtn}
          onClick={() => setmobileheaderBG(!mobileheaderBG)}
        />
        <div
          className={
            mobileheaderBG
              ? styled.mobile_backdrop
              : styled.mobile_backdrop_none
          }
          onClick={() => setmobileheaderBG(false)}
        ></div>
        <header
          className={[
            styled.mobile_headerWrapper,
            mobileheaderBG ? styled.mobile_activebg : "",
          ].join(" ")}
        >
          <nav>
            <span
              className={styled.logo}
              onClick={() => {
                router.push("/");
                setmobileheaderBG(false);
              }}
            >
              WAGU
            </span>
            <div className={styled.btnWrapper}>
              {user.isLoggedIn && user.userData.data.memberInfo ? (
                <>
                  <img
                    src={user.userData.data.memberInfo.profileImg}
                    onClick={() => {
                      router.push({ pathname: "/mypage" });
                      setmobileheaderBG(false);
                    }}
                  />
                  <span onClick={LogOutHandler}>LOGOUT</span>
                </>
              ) : (
                <>
                  <span
                    onClick={() => {
                      router.push("/login/join");
                      setmobileheaderBG(false);
                    }}
                  >
                    SIGN IN
                  </span>
                  <span onClick={LoginBtnHandler}>LOGIN</span>
                </>
              )}
            </div>
            <div className={styled.btnWrapper}>
              <span
                onClick={() => {
                  router.push({ pathname: "/product", query: { page: 1 } });
                  setmobileheaderBG(false);
                }}
              >
                PRODUCT
              </span>
              <span
                onClick={() => {
                  router.push({ pathname: "/community" });
                  setmobileheaderBG(false);
                }}
              >
                COMMUNITY
              </span>
            </div>
          </nav>
        </header>
      </>
    </>
  );
};
export default Header;
