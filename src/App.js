import './App.css';
import LoginLayout from './Layouts/AuthLayout/Body';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Features/Login/Login';
import ForgetPassword from '../src/Features/ForgetPassword/ForgetPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route path="Login" element={<Login />} />
        <Route
          path="ForgetPassword"
          element={<ForgetPassword />}
        />
      </Route>
    </Routes>
  );
}

export default App;
