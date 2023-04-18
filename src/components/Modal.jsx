import React from 'react';

const Modal = () => {
  return (
    <div className='modal_container'>
      <h2>This your input</h2>
      <div>
        <p>First name:</p>
      </div>
      <div>
        <p>Last name:</p>
      </div>
      <div>
        <p>Phone:</p>
      </div>
      <div>
        <p>Role:</p>
      </div>
      <div>
        <p>Message:</p>
      </div>
      <div className='btn'>
        <button>Send message</button>
        <button>Do not send</button>
      </div>
    </div>
  );
}
export default Modal;