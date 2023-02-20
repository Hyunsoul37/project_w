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
      <h4>LOGIN</h4>
      <Form
        onsubmit={submitHandler}
        isLogin={true}
      >
        <input
          id="id"
          type="text"
          value={id ? id : ''}
          onChange={ChangeIdHandler}
          placeholder="사용자 아이디"
        />
        <input
          id="password"
          type="password"
          value={password ? password : ''}
          onChange={ChangePasswordHandler}
          placeholder="비밀번호"
        />
        <div>
          <button>Login</button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
