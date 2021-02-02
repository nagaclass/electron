import React from 'react';

// Components
import { Row, Col } from 'react-bootstrap';
import LoginForm from '../components/lognin-form/login-form.comp';
import SignupForm from '../components/signup-form/signup-form.comp';

const LoginPage = () => {
  return (
    <div className="custom-container">
      <Row>
        <Col xm={12} sm={12} md={6} lg={6}>
          <LoginForm />
        </Col>
        <div className="sperator"></div>
        <Col xm={12} sm={12} md={6} lg={6}>
          <SignupForm />
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;