import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { LogIn } from '../../slice/userSlice';
import Form from '../../components/ui/Form';
import styled from './Login.module.css';
import Seo from '../../util/Seo';

const Login = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLoggedIn) {
      router.push('/');
    }
  }, [user.isLoggedIn]);

  const ChangeIdHandler = (e) => {
    setId(e.target.value);
  };
  const ChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
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
      <Seo title="login" />
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
      <button onClick={() => router.push('/login/Join')}>SignUp</button>
    </div>
  );
};

export default Login;
