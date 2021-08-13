import React from 'react';

const SelectPriority = {
  HIGH: 'High',
  MED: 'Med',
  LOW: 'Low',
};
const ListItem = ({ item, onComplete }) => {
  const handleLableColor = (status) => {
    switch (status) {
      case SelectPriority.HIGH:
        return '#cc3232';
      case SelectPriority.MED:
        return '#e7b416';
      case SelectPriority.LOW:
        return '#2dc937';
      default:
        return '#2dc937';
    }
  };
  const onTaskComplete = () => {
    onComplete({
      ...item,
      complete: item.complete ? false : true,
    });
  };

  return (
    <div className='row mb-2'>
      <div className='col-10 d-flex align-items-center'>
        <span
          className='mx-2'
          onClick={onTaskComplete}
          style={{ cursor: 'pointer' }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='32'
            height='32'
            viewBox='0 0 172 172'
            style={{ fill: '#000000' }}>
            <g
              fill='none'
              fillRule='nonzero'
              stroke='none'
              strokeWidth='1'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='10'
              strokeDasharray=''
              strokeDashoffset='0'
              fontFamily='none'
              fontWeight='none'
              fontSize='none'
              textAnchor='none'
              style={{ mixBlendMode: 'normal' }}>
              <path d='M0,172v-172h172v172z' fill='none'></path>
              <g fill={item.complete ? '#00D100' : '#000000'}>
                <path d='M86,21.5c-35.55872,0 -64.5,28.9413 -64.5,64.5c0,35.55869 28.94128,64.5 64.5,64.5c35.55872,0 64.5,-28.94131 64.5,-64.5c0,-35.5587 -28.94128,-64.5 -64.5,-64.5zM86,32.25c29.749,0 53.75,24.00103 53.75,53.75c0,29.74897 -24.001,53.75 -53.75,53.75c-29.749,0 -53.75,-24.00103 -53.75,-53.75c0,-29.74897 24.001,-53.75 53.75,-53.75zM112.60205,64.5l-33.59375,33.59375l-17.46875,-17.46875l-7.5166,7.5271l24.98535,24.99585l41.12085,-41.12085z'></path>
              </g>
            </g>
          </svg>
        </span>{' '}
        <p className={`mb-0 ${item.complete ? 'text-cut' : ''}`}>{item.task}</p>
      </div>
      <div className='col-2 d-flex justify-content-center align-items-center'>
        <span
          className='lable-priority'
          style={{
            backgroundColor: handleLableColor(item.priority),
          }}>
          {item.priority}
        </span>
      </div>
    </div>
  );
};

export default ListItem;
