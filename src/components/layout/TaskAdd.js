import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import FormInput from './FormInput';

const SelectPriority = {
  HIGH: 'High',
  MED: 'Med',
  LOW: 'Low',
};
const TaskAdd = (props) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(SelectPriority.LOW);

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

  const handleClose = () => {
    setTask('');
    setPriority(SelectPriority.LOW);
    props.handleClose();
  };

  const onSubmit = () => {
    props.onSubmit({
      task: task,
      priority: priority,
      complete: false,
    });
    setTask('');
    setPriority(SelectPriority.LOW);
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
        <Form>
          <FormInput {...item} />
          <Form.Group controlId='formSelect'>
            <Form.Label>Priority</Form.Label>
            <Form.Select defaultValue={priority} onChange={onSelectChange}>
              <option value={SelectPriority.HIGH}>High</option>
              <option value={SelectPriority.MED}>Med</option>
              <option value={SelectPriority.LOW}>Low</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
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
