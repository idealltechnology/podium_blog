import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../../Features/Login/Login';
import ForgetPassword from '../../Features/ForgetPassword/ForgetPassword';
import LanguageSelection from '../../Layouts/AuthLayout/Header/LanguageSelection';

const LoginLayout = () => {
  const [forgotPassword, setForgotPassword] =
    useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} className="my-4">
            <Row>
              <LanguageSelection />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="my-3  login-container">
        <Row className=" loginBoxContainer">
          <Col>
            {forgotPassword ? (
              <ForgetPassword
                onForgotPassWord={setForgotPassword}
              />
            ) : (
              <Login onForgotPassWord={setForgotPassword} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginLayout;
