import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../../slice/userSlice';
import Form from '../ui/Form';
import styled from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate('/');
    }
  }, [user.isLoggedIn, navigate]);

  const ChangeIdHandler = e => {
    setId(e.target.value);
  };
  const ChangePasswordHandler = e => {
    setPassword(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      LogIn({
        id: id,
        password: password,
      })
    );
    setId('');
    setPassword('');
  };

  return (
    <div className={styled.formWrapper}>
      <Form onsubmit={submitHandler}>
        <label htmlFor="id">
          ID
          <input
            id="id"
            type="text"
            value={id ? id : ''}
            onChange={ChangeIdHandler}
          />
        </label>
        <label htmlFor="password">
          PASSWORD
          <input
            id="password"
            type="password"
            value={password ? password : ''}
            onChange={ChangePasswordHandler}
          />
        </label>
        <div>
          <button>Login</button>
        </div>
      </Form>
      <button onClick={() => navigate('/join')}>SignUp</button>
    </div>
  );
};

export default Login;
