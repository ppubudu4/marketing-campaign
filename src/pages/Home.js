import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/layout/ListItem';
import TaskAdd from '../components/layout/TaskAdd';
import PropTypes from 'prop-types';
import { getTasks, addTask, updateTask } from '../redux/actions/taskActions';

const Home = ({ getTasks, taskState, addTask, updateTask }) => {
  //state
  const [show, setShow] = useState(false);

  //effect hooks
  useEffect(() => {
    getTasks();
    //eslint-disable-next-line
  }, []);

  const onComplete = (document) => {
    updateTask(document);
  };
  //model func
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = (document) => {
    addTask(document);
    setShow(false);
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
          {taskState?.taskList?.map((item, index) => {
            return <ListItem key={index} item={item} onComplete={onComplete} />;
          })}
        </div>
      </div>
      <TaskAdd show={show} onSubmit={onSubmit} handleClose={handleClose} />
    </>
  );
};

Home.prototype = {
  tasksList: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  taskState: state.task,
});

export default connect(mapStateToProps, { getTasks, addTask, updateTask })(
  Home
);
