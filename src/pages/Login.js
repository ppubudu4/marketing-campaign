import React, { useState } from 'react';
import { Fragment } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import FormInput from '../components/layout/FormInput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
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
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Login;
