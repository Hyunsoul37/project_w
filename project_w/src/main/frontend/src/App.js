import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signupform from './components/signup/Signupform';
import styled from './App.module.css';
import Home from './components/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className={styled.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Signupform />} />
      </Routes>
    </div>
  );
}
export default App;
