import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signupform from './components/signup/Signupform';
import styled from './App.module.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/home/Header';

function App() {
  return (
    <div className={styled.App}>
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
