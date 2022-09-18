import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import '../../styles/text.css';

import { useTranslation } from 'react-i18next';
import {
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';

const ForgetPassword = ({ onForgotPassWord }) => {
  const [user, setUserDetails] = useState({
    email: ''
  });
  const [disable, setDisable] = useState(true);
  const ChangePasswordHandler = (e) => {
    e.preventDefault();
    setUserDetails(e.target.value);
  };
  const { t } = useTranslation();
  return (
    <div className="font-face-pl">
      <Container className="my-3  ">
        <div className="mt-5 text-center">
          <span>
            <img
              className="Header-logo"
              src="../../images/logo.png"
              alt="Logo"
            />
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
              onChange={() => setDisable(false)}
            />
          </Form.Group>
          <Button
            disabled={disable}
            className="buttonContainerPrimary clickAbleButton"
            onClick={ChangePasswordHandler}
          >
            {t('sendCode.label')}
          </Button>
          <div className="buttonContainerLight clickAbleButton text-center">
            <span className=" buttonLightText component-label  ">
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
