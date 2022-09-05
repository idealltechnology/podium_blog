import React, { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import '../styles/text.css';
import loginLogo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Login = ({ setUserState, onForgotPassWord }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const { t } = useTranslation();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      error.email = 'Please enter a valid email address';
    }
    if (!values.password) {
      error.password = 'Password is required';
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios
        .post('http://localhost:9002/login', user)
        .then((res) => {
          alert(res.data.message);
          setUserState(res.data.user);
        });
    }
  }, [formErrors]);
  return (
    <div className="font-face-pl">
      <Container className="my-3  ">
        <div className="mt-5 text-center">
          <span>
            <img src={loginLogo} alt="loginLogo"></img>
          </span>
        </div>
        <div className="component-header text-center ">
          {' '}
          <span>{t('login.label')}</span>
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
              onChange={changeHandler}
              value={user.email}
            />
            <p className="">{formErrors.email}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label
              htmlFor="password"
              className="component-label"
            >
              {t('password.label')}
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              placeholder={t('password.label')}
              onChange={changeHandler}
              value={user.password}
            />
            <p className="">{formErrors.password}</p>
          </Form.Group>
          <div
            className="buttonContainerPrimary clickAbleButton"
            onClick={loginHandler}
          >
            <span className="buttonPrimaryText">
              {t('signIn.label')}
            </span>
          </div>
          <div className="buttonContainerLight clickAbleButton">
            <span className=" buttonLightText component-label text-center ">
              <a
                href="#"
                onClick={() => {
                  onForgotPassWord(true);
                }}
              >
                {t('ForgetPassword.label')}
              </a>
            </span>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
