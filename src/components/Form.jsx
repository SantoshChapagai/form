import React from 'react';
import './style.css';

const Form = (props) => {
  return (
    <div className='form_container'>
      <form onSubmit={props.submit}>
        <div>
          <label for='fname'>First name</label>
          <input type='text' name='firstname' id='fname' />
        </div>
        <div>
          <label for='lname'>Last name</label>
          <input type='text' name='lastname' id='lname' />
        </div>
        <div>
          <label for='phone'>Phone</label>
          <input type='number' name='phone' id='phone' />
        </div>
        <div>
          <label for='role'>Role</label>
          <select>
            <option default>Choose</option>
            <option value='teacher'>Teacher</option>
            <option value='student'>Student</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label for='text'>Message</label>
          <textarea name="message" id="text" />
        </div>
        <div>
          <button type='submit' value='submit' name='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;