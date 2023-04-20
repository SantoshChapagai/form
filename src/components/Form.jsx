import React from 'react';
import './style.css';

const Form = (props) => {
  return (
    <div className='form_container'>
      <form onSubmit={props.submit} onChange={props.inputChangeHandler}>
        <div>
          <label htmlFor='fname'>First name</label>
          <input type='text' name='firstname' id='fname' />
        </div>
        <div>
          <label htmlFor='lname'>Last name</label>
          <input type='text' name='lastname' id='lname' />
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input type='number' name='phone' id='phone' />
        </div>
        <div>
          <label htmlFor='role'>Role</label>
          <select name="role" id='role'>
            <option default>Choose</option>
            <option value='teacher'>Teacher</option>
            <option value='student'>Student</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor='text'>Message</label>
          <textarea name="message" id="text" maxLength={1000} />
        </div>
        <div>
          <button type='submit' value='submit' name='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;