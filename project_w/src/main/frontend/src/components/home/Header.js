import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, DataClear } from '../../slice/userSlice';
import styled from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userData = user.userData ? user.userData.data : null;

  const LoginBtnHandler = () => {
    navigate('/login');
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
    <div className={styled.Header}>
      {user.isLoggedIn ? (
        <>
          <div> Hi!! {userData.name}</div>
          <button onClick={LogOutHandler}>Logout</button>
        </>
      ) : (
        <button onClick={LoginBtnHandler}>Login</button>
      )}
      {/* <button onClick={DataClearHandler}>Data Clear</button> */}
    </div>
  );
};
export default Header;
