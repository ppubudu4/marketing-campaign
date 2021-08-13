import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Alert, Button, Card, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import FormInput from '../components/layout/FormInput';
import PropTypes from 'prop-types';
import { login, clearError } from '../redux/actions/authAction';
import { useHistory } from 'react-router-dom';

const Login = ({ login, clearError, auth }) => {
  //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  //timeout error
  useEffect(() => {
    if (auth.error !== null) {
      setTimeout(() => {
        clearError();
      }, 2000);
    }
  }, [auth.error]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    login(data, history);
  };
  const input = [
    {
      controlId: 'formBasicUsername',
      lable: 'Username',
      type: 'text',
      placeholder: 'Enter Username',
      value: username,
      setValue: setUsername,
    },
    {
      controlId: 'formBasicPassword',
      lable: 'Password',
      type: 'password',
      placeholder: 'Enter Password',
      value: password,
      setValue: setPassword,
    },
  ];

  return (
    <Fragment>
      <Col
        className='d-flex justify-content-center align-items-center'
        style={{ height: '87vh' }}>
        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form className='mt-4' onSubmit={onSubmit}>
              {input?.map((item, index) => {
                return <FormInput key={index} {...item} />;
              })}
              {auth.error !== null && (
                <Alert variant='danger'>{auth.error}</Alert>
              )}
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
            <blockquote className='mt-3'>
              Username: pubudu {' | '} Password: Test@#123
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};
Login.prototype = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearError: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { login, clearError })(Login);
