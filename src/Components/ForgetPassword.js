import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import '../styles/text.css';
import loginLogo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import {
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';

const ForgetPassword = ({ onForgotPassWord }) => {
  const [user, setUserDetails] = useState({
    email: ''
  });
  const ChangePassHandler = (e) => {
    e.preventDefault();
    setUserDetails(e.target.value);
  };
  const { t } = useTranslation();
  return (
    <div className="font-face-pl">
      <Container className="my-3  ">
        <div className="mt-5 text-center">
          <span>
            <img src={loginLogo} alt="loginLogo"></img>
          </span>
        </div>
        <div className=" text-center ">
          {' '}
          <span className="component-header">
            {t('ForgetPassword.label')}
          </span>
          <div className="component-label px-5 m-5 buttonContainerLight">
            {t('ForgetPassword.body')}
          </div>
        </div>
        <Form className="px-5 ">
          <Form.Group className="mb-3">
            <Form.Label
              htmlFor="email"
              className="component-label"
            >
              {t('Email.label')}
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Yourname@example.com"
            />
          </Form.Group>
          <div
            className="buttonContainerPrimary clickAbleButton"
            onClick={ChangePassHandler}
          >
            <span className="buttonPrimaryText">
              {t('sendCode.label')}
            </span>
          </div>
          <div className="buttonContainerLight clickAbleButton">
            <span className=" buttonLightText component-label text-center ">
              <a
                href="#"
                onClick={() => {
                  onForgotPassWord(false);
                }}
              >
                {t('backToLogin.label')}
              </a>
            </span>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ForgetPassword;
