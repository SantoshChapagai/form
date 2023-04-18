import React from 'react';

const Modal = (props) => {
  console.log(props);
  return (
    <div className='modal_container'>
      <h2>This your input</h2>
      <div>
        <p>First name: <span>{props.firstname}</span></p>
      </div>
      <div>
        <p>Last name: <span>{props.lastname}</span></p>
      </div>
      <div>
        <p>Phone: <span>{props.phone}</span></p>
      </div>
      <div>
        <p>Role: <span>{props.role}</span></p>
      </div>
      <div>
        <p>Message: <span>{props.message}</span></p>
      </div>
      <div className='btn'>
        <button>Send message</button>
        <button>Do not send</button>
      </div>
    </div>
  );
}
export default Modal;