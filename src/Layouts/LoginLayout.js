import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../Components/Login';
import '../Components/login.css';
import LanguageSelection from '../Components/LanguageSelection';

const LoginLayout = () => {
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
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginLayout;
