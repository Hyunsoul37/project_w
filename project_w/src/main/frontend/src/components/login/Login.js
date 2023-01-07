import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import Form from '../ui/Form';
import styled from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { sendRequestData: postData } = useFetch();

  const url = '/api/auth';
  const type = 'POST';
  const header = { 'Content-Type': 'application/json' };

  const ChangeIdHandler = e => {
    setId(e.target.value);
  };
  const ChangePasswordHandler = e => {
    setPassword(e.target.value);
  };

  const Test = data => {
    if (data.token === null) {
      console.log(data.message);
    } else {
      console.log(data.token);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    postData({
      url: url,
      type: type,
      data: { id: id, password: password },
      header: header,
      movepath: '/',
      AfterGetData: Test,
    });
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
