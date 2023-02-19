import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logout, DataClear } from '../../slice/userSlice';
import styled from './Header.module.css';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userData = user.userData ? user.userData.data : null;

  const LoginBtnHandler = () => {
    router.push('/login');
  };
  const LogOutHandler = () => {
    dispatch(logout());
  };

  const DataClearHandler = () => {
    dispatch(DataClear());
  };

  useEffect(() => {
    // 로그인 유지 로직 작성
  }, []);

  return (
    <div className={styled.headerWrapper}>
      <div className="maxframe">
        <div className={styled.Header}>
          <span
            className={styled.logo}
            onClick={() => router.push('/')}
          >
            WAGU
          </span>
          <div className={styled.btnWrapper}>
            <span onClick={() => router.push('/product')}>PRODUCT</span>
            <span onClick={() => router.push('/community')}>COMMUNITY</span>
            <span onClick={() => router.push('/QnA')}>QnA</span>
            <span onClick={() => router.push('/notice')}>NOTICE</span>
          </div>
          <div className={styled.btnWrapper}>
            {user.isLoggedIn ? (
              <>
                <div> Hi!! {userData.name}</div>
                <span onClick={LogOutHandler}>LOGOUT</span>
              </>
            ) : (
              <>
                <span onClick={() => router.push('/login/join')}>SIGN IN</span>
                <span onClick={LoginBtnHandler}>LOGIN</span>
              </>
            )}
            {/* <button onClick={DataClearHandler}>Data Clear</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
