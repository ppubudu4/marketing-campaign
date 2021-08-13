import React, { useState } from 'react';
import ListItem from '../components/layout/ListItem';
import TaskAdd from '../components/layout/TaskAdd';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const onSubmit = (document) => {
    console.log(document);
  };
  return (
    <>
      <div style={{ height: '8rem' }} />
      <div className='card-main'>
        <div className='card'>
          <div className='d-flex justify-content-between card-header-my'>
            <div className='col-2'>
              <button className='btn-add' onClick={handleShow}>
                Add Task
              </button>
            </div>
            <div className='col-2'>
              <p>Priority</p>
            </div>
          </div>
          <hr />
          <ListItem />
        </div>
      </div>
      <TaskAdd show={show} onSubmit={onSubmit} handleClose={handleClose} />
    </>
  );
};

export default Home;
