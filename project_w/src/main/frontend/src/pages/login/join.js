import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Form from "../../components/ui/Form";
import styled from "./Signupform.module.css";
import Seo from "../../util/Seo";

const url = "/api/auth/join";
const type = "POST";
const header = { "Content-Type": "application/json;charset=UTF-8" };
const movepath = "/login";
const emailReg =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export const passwordreg =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

const join = () => {
  const EmailRef = useRef(null);
  const passwordRef = useRef(null);
  const { sendRequestData: postData } = useFetch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickName, setnickName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isduplicate, setDuplicate] = useState(false);
  const [iseditedId, setIseditedId] = useState(false);
  const [isNickNameduplicate, setNickNameDuplicate] = useState(false);
  const [iseditedNickName, setIseditedNickName] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isduplicate || isNickNameduplicate) {
      alert("아이디 또는 닉네임이 중복입니다.");
      return;
    }
    if (!passwordreg.test(password)) {
      alert(
        "비밀번호는 대소문자,숫자,특수문자를 포함한 8글자 이상이여야 합니다."
      );
      passwordRef.current.focus();
      return;
    }
    if (!emailReg.test(email)) {
      alert("유효하지 않은 이메일입니다");
      EmailRef.current.focus();
      return;
    }
    postData({
      url: url,
      type: type,
      header: header,
      data: {
        id: id,
        nickName: nickName,
        password: password,
        name: name,
        email: email,
        address: address,
        phone: phone,
      },
      movepath: movepath,
    });
    setId("");
    setnickName("");
    setPassword("");
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
  };
  const IDDuplicateResponseMessage = (data) => {
    if (data.data.duplicate === true) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
    setIseditedId(true);
  };
  const NickNameDuplicateResponseMessage = (data) => {
    if (data.data.duplicate === true) {
      setNickNameDuplicate(true);
    } else {
      setNickNameDuplicate(false);
    }
    setIseditedNickName(true);
  };

  const OnCheckduplicateID = async () => {
    await postData({
      url: `api/auth/id-check?id=${id}`,
      type: "GET",
      data: null,
      header: { "Content-Type": "text/plain" },
      AfterGetData: IDDuplicateResponseMessage,
    });
  };

  const OnCheckduplicateNickName = async () => {
    await postData({
      url: `api/auth/nickname-check?nickName=${nickName}`,
      type: "GET",
      data: null,
      header: { "Content-Type": "text/plain" },
      AfterGetData: NickNameDuplicateResponseMessage,
    });
  };

  const ChangeIdHandler = (e) => {
    setIseditedId(false);
    setId(e.target.value);
  };
  const ChangeNickNameHandler = (e) => {
    setIseditedNickName(false);
    setnickName(e.target.value);
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
      <Form onsubmit={submitHandler} isLogin={false}>
        <label htmlFor="name">
          이름
          <input
            id="name"
            type="text"
            value={name ? name : ""}
            onChange={ChangeNameHandler}
            placeholder="사용자 이름"
          />
        </label>
        <label htmlFor="id">
          아이디
          <input
            id="id"
            type="text"
            value={id ? id : ""}
            onChange={ChangeIdHandler}
            onBlur={OnCheckduplicateID}
            placeholder="사용자 아이디"
          />
          {id !== "" && iseditedId ? (
            isduplicate ? (
              <p className={styled.errormsg}>아이디 중복입니다.</p>
            ) : (
              <p>사용가능한 아이디입니다.</p>
            )
          ) : null}
        </label>

        <label htmlFor="nickName">
          닉네임
          <input
            id="nickName"
            type="text"
            value={nickName ? nickName : ""}
            onChange={ChangeNickNameHandler}
            onBlur={OnCheckduplicateNickName}
            placeholder="사용자 닉네임"
          />
          {nickName !== "" && iseditedNickName ? (
            isNickNameduplicate ? (
              <p className={styled.errormsg}>닉네임 중복입니다.</p>
            ) : (
              <p>사용가능한 닉네임입니다.</p>
            )
          ) : null}
        </label>

        <label htmlFor="password">
          비밀번호
          <input
            id="password"
            type="password"
            ref={passwordRef}
            value={password ? password : ""}
            onChange={ChangePasswordHandler}
            placeholder="비밀번호"
          />
        </label>

        <label htmlFor="email">
          이메일
          <input
            id="email"
            type="email"
            ref={EmailRef}
            value={email ? email : ""}
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
            value={phone ? phone : ""}
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
