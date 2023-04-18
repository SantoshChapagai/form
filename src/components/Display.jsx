import React from 'react';

const Display = (props) => {
  return (
    <div className='view_container'>
      <div className='vr'>
        <div className='box'>
          <p>First name: <span>{props.firstname}</span></p>
        </div>
        <div className='box'>
          <p>Last name: <span>{props.lastname}</span></p>
        </div>
        <div className='box'>
          <p>phone: <span>{props.phone}</span></p>
        </div>
        <div className='box'>
          <p>Role: <span>{props.role}</span></p>
        </div>
        <div className='box'>
          <p>Message: <span>{props.message}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Display;