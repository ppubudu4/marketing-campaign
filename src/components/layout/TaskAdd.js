import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import FormInput from './FormInput';

const SelectPriority = {
  HIGH: 'High',
  MED: 'Med',
  Low: 'Low',
};
const TaskAdd = (props) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(SelectPriority.Low);

  const item = {
    controlId: 'formBasicTask',
    lable: 'Task',
    type: 'text',
    placeholder: 'Enter Task',
    value: task,
    setValue: setTask,
  };

  const onSelectChange = (e) => {
    e.preventDefault();
    setPriority(e.target.value);
  };

  const onSubmit = () => {
    props.onSubmit({
      task: task,
      priority: priority,
    });
  };
  return (
    <Modal
      centered
      show={props.show}
      onHide={props.handleClose}
      className='p-3'>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='mt-4'>
          <FormInput {...item} />
          <Form.Select defaultValue={priority} onChange={onSelectChange}>
            <option value={SelectPriority.HIGH}>High</option>
            <option value={SelectPriority.MED}>Med</option>
            <option value={SelectPriority.Low}>Low</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={onSubmit} style={{ color: 'white' }}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskAdd;
