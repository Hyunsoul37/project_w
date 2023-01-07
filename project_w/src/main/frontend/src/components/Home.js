import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const LoginBtnHandler = () => {
    navigate('/login');
  };
  return (
    <div>
      <button onClick={LoginBtnHandler}>Login</button>
    </div>
  );
};

export default Home;
