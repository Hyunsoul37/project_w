import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slice/userSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginBtnHandler = () => {
    navigate('/login');
  };
  const LogOutHandler = () => {
    dispatch(logout());
  };
  const user = useSelector(state => state.user);
  return (
    <div>
      <p>Home Page</p>
      {user.isLoggedIn ? (
        <>
          <div> Hi!!</div>
          <button onClick={LogOutHandler}>Logout</button>
        </>
      ) : (
        <button onClick={LoginBtnHandler}>Login</button>
      )}
    </div>
  );
};

export default Home;
