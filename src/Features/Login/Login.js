import React, {
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';
import AuthContext from '../../Context/AuthContext';
import {
  Form,
  Container,
  Button,
  Alert
} from 'react-bootstrap';
import '../../styles/text.css';
import '../Login/login.css';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import useXHR from '../../Hook/xhr';

const Login = ({ onForgotPassWord }) => {
  const userRef = useRef();

  const [item, setItem] = useState({
    email: '',
    password: ''
  });
  const [loading, error, send] = useXHR();
  const { setAuth } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      {
        url: 'auth/login',
        method: 'POST',

        data: {
          email: item.email,
          password: item.password
        }
      },
      (response) => {
        if (response?.data) {
          setAuth(response.data.item);
        }
      }
    );
  };

  useEffect(() => {
    if (item.email && item.password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [item.email, item.password]);

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
        <div className="component-header text-center ">
          {' '}
          <span>{t('login.label')}</span>
        </div>
        {error && <Alert variant={'danger'}>{error}</Alert>}
        <form className="px-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label
              htmlFor="email"
              className="component-label"
            >
              {t('Email.label')}
            </Form.Label>
            <Form.Control
              type={'email'}
              name={'email'}
              id="email"
              ref={userRef}
              placeholder={'Yourname@example.com'}
              autoComplete="off"
              onChange={changeHandler}
              value={item.email}
            />
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
              value={item.password}
            />
          </Form.Group>
          <Button
            disabled={disable}
            type="submit"
            className="buttonContainerPrimary clickAbleButton"
          >
            {t('signIn.label')}
          </Button>
        </form>
        <div className="buttonContainerLight clickAbleButton">
          <span className=" buttonLightText component-label text-center ">
            {/* put router link here */}
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
      </Container>
    </div>
  );
};

export default Login;
