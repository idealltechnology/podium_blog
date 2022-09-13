import React, {
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';
import AuthContext from '../context/AuthContext';
import { Form, Container, Button } from 'react-bootstrap';
import '../styles/text.css';
import loginLogo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import axios from '../api/axios';
import { toast } from 'react-toastify';
const LOGIN_URL = './auth';

const Login = ({ onForgotPassWord }) => {
  const userRef = useRef();
  const { setAuth } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [success, setSuccess] = useState(false);

  const { t } = useTranslation();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://195.248.240.174:8001/auth/login',
        JSON.stringify({ email: user, password }),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;

      setAuth(user, password, accessToken);
      setUser('');
      setPassword('');
      setSuccess(true);
      toast.success('Hazard');
    } catch (err) {
      if (!err?.response) {
        toast.error('No Server Response');
      } else if (err.response?.status === 400) {
        toast.error('Missing username or password');
      } else if (err.response?.status === 401) {
        toast.error('Unauthorized');
      } else {
        toast.error('Login Failed');
      }
    }
  };

  useEffect(() => {
    if (user && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formErrors, isSubmit, user, password]);

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
        <form className="px-5" onSubmit={handleSubmit}>
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
              ref={userRef}
              placeholder="Yourname@example.com"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p className="">{formErrors.password}</p>
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
