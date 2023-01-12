import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, DataClear } from '../slice/userSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userData = user.userData ? user.userData.data : null;
  const LoginBtnHandler = () => {
    navigate('/login');
  };
  const LogOutHandler = () => {
    dispatch(logout());
  };

  const DataCleatHandler = () => {
    dispatch(DataClear());
  };

  useEffect(() => {
    console.log('랜더!');
  }, []);

  return (
    <div>
      <p>Home Page</p>
      {user.isLoggedIn ? (
        <>
          <div> Hi!! {userData.name}</div>
          <button onClick={LogOutHandler}>Logout</button>
        </>
      ) : (
        <button onClick={LoginBtnHandler}>Login</button>
      )}
      <button onClick={DataCleatHandler}>Data All Clear</button>
    </div>
  );
};

export default Home;
