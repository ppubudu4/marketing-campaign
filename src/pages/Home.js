import React from 'react';
import ListItem from '../components/layout/ListItem';

const Home = () => {
  return (
    <>
      <div style={{ height: '8rem' }} />
      <div className='card-main'>
        <div className='card'>
          <div className='d-flex justify-content-between card-header-my'>
            <div className='col-2'>
              <button className='btn-add'>Add Task</button>
            </div>
            <div className='col-2'>
              <p>Priority</p>
            </div>
          </div>
          <hr />
          <ListItem />
        </div>
      </div>
    </>
  );
};

export default Home;
