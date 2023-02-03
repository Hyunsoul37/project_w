import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signupform from './components/signup/Signupform';
import styled from './App.module.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/home/Header';
// 글로벌 스타일 만들기 위한 createGlobalStyle
import { createGlobalStyle } from "styled-components";
// 스타일 초기화를 위한 reset
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background-color: #fff;
    }
`;

function App() {
  return (
    <div className={styled.App}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/join"
          element={<Signupform />}
        />
      </Routes>

    </div>
  );
}
export default App;
