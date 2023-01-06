import React, { useState } from 'react';
import styled from './Signupform.module.css';

const Signupform = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const postData = async () => {
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        body: JSON.stringify({
          id: id,
          password: password,
          name: name,
          email: email,
          address: address,
          phone: phone,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await res.json();
      console.log('sucess!!', responseData);
    } catch (err) {
      console.log(err);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('data전송 시작!!');
    postData();
    setId('');
    setPassword('');
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };

  const ChangeIdHandler = (e) => {
    setId(e.target.value);
  };
  const ChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const ChangeNameHandler = (e) => {
    setName(e.target.value);
  };
  const ChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const ChangeAddressHandler = (e) => {
    setAddress(e.target.value);
  };
  const ChangePhoneHandler = (e) => {
    setPhone(e.target.value);
  };
  return (
    <form onSubmit={submitHandler} className={styled.signupform}>
      <label htmlFor="id">
        ID
        <input id="id" type="text" onChange={ChangeIdHandler} />
      </label>

      <label htmlFor="password">
        PASSWORD
        <input id="password" type="password" onChange={ChangePasswordHandler} />
      </label>

      <label htmlFor="name">
        NAME
        <input id="name" type="text" onChange={ChangeNameHandler} />
      </label>
      <label htmlFor="email">
        EMAIL
        <input id="email" type="email" onChange={ChangeEmailHandler} />
      </label>
      <label htmlFor="address">
        ADDRESS
        <input id="address" type="text" onChange={ChangeAddressHandler} />
      </label>
      <label htmlFor="phone">
        PHONE
        <input id="phone" type="tel" onChange={ChangePhoneHandler} />
      </label>
      <div className={styled.btn}>
        <button>제출</button>
      </div>
    </form>
  );
};

export default Signupform;
