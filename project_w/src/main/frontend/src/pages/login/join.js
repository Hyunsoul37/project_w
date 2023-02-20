import React, { useEffect, useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import Form from '../../components/ui/Form';
import styled from './Signupform.module.css';
import Seo from '../../util/Seo';

const join = () => {
  const { sendRequestData: postData } = useFetch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isduplicate, setDuplicate] = useState(false);
  const [iseditedId, setIseditedId] = useState(false);

  const url = '/api/join';
  const type = 'POST';
  const header = { 'Content-Type': 'application/json;charset=UTF-8' };
  const movepath = '/login';

  const submitHandler = (e) => {
    e.preventDefault();
    if (isduplicate) {
      alert('아이디 중복임 다시하셈');
      return;
    }
    console.log('data전송 시작!!');
    postData({
      url: url,
      type: type,
      header: header,
      data: {
        id: id,
        password: password,
        name: name,
        email: email,
        address: address,
        phone: phone,
      },
      movepath: movepath,
    });
    setId('');
    setPassword('');
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };
  const DuplicateResponseMessage = (data) => {
    if (data === true) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
    setIseditedId(true);
  };

  const OnCheckduplicateID = async () => {
    await postData({
      url: `api/auth/id-check?id=${id}`,
      type: 'GET',
      data: null,
      header: { 'Content-Type': 'text/plain' },
      AfterGetData: DuplicateResponseMessage,
    });
  };

  const ChangeIdHandler = (e) => {
    setIseditedId(false);
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
    <div className={styled.formWrapper}>
      <Seo title="Sign In" />
      <h1>SIGN IN</h1>
      <h4>회원정보 입력</h4>
      <Form
        onsubmit={submitHandler}
        isLogin={false}
      >
        <label htmlFor="name">
          이름
          <input
            id="name"
            type="text"
            value={name ? name : ''}
            onChange={ChangeNameHandler}
            placeholder="사용자 이름"
          />
        </label>
        <label htmlFor="id">
          아이디
          <input
            id="id"
            type="text"
            value={id ? id : ''}
            onChange={ChangeIdHandler}
            onBlur={OnCheckduplicateID}
            placeholder="사용자 아이디"
          />
          {id !== '' && iseditedId ? (
            isduplicate ? (
              <p className={styled.errormsg}>아이디 중복입니다.</p>
            ) : (
              <p>사용가능한 아이디입니다.</p>
            )
          ) : null}
        </label>

        <label htmlFor="password">
          비밀번호
          <input
            id="password"
            type="password"
            value={password ? password : ''}
            onChange={ChangePasswordHandler}
            placeholder="비밀번호"
          />
        </label>

        <label htmlFor="email">
          이메일
          <input
            id="email"
            type="email"
            value={email ? email : ''}
            onChange={ChangeEmailHandler}
          />
        </label>
        {/* <label htmlFor="address">
          주소
          <input
            id="address"
            type="text"
            value={address ? address : ''}
            onChange={ChangeAddressHandler}
          />
        </label> */}
        <label htmlFor="phone">
          휴대폰
          <input
            id="phone"
            type="tel"
            value={phone ? phone : ''}
            onChange={ChangePhoneHandler}
          />
        </label>
        <div>
          <button>회원가입</button>
        </div>
      </Form>
    </div>
  );
};

export default join;
