import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <div className='bg-white nav-main'>
        <div className='nav-bar'>
          <div className='nav-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='30'
              height='30'
              viewBox='0 0 172 172'
              style={{ fill: '#000000' }}>
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
                style={{ mixBlendMode: 'normal' }}>
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g id='original-icon' fill='#cccccc'>
                  <path d='M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z'></path>
                </g>
              </g>
            </svg>
          </div>
          <div className='nav-text'>
            <h6>My Task</h6>
          </div>
        </div>
        <div>
          <h2 className='text-center p-2'>Marketing Campaine</h2>
        </div>
      </div>
    </>
  );
};

export default Navigation;
