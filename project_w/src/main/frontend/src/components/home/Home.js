import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, DataClear } from '../../slice/userSlice';
import Banner from './Banner';
import styled from './Home.module.css';

const Home = () => {
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
    <div className={styled.Home}>
      <Banner />
      {user.isLoggedIn ? (
        <>
          <div> Hi!! {userData.name}</div>
          <button onClick={LogOutHandler}>Logout</button>
        </>
      ) : (
        <button onClick={LoginBtnHandler}>Login</button>
      )}
      <button onClick={DataClearHandler}>Data All Clear</button>
    </div>
  );
};

export default Home;
