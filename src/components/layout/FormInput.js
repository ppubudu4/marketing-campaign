import React from 'react';
import { Form } from 'react-bootstrap';

const FormInput = (props) => {
  const { controlId, lable, placeholder, type, value, setValue } = props;
  return (
    <div>
      <Form.Group className='mb-3' controlId={controlId}>
        <Form.Label>{lable}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default FormInput;
