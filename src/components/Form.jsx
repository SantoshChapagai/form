import React from 'react';
import './style.css';

const Form = () => {
  return (
    <div className='form_container'>
      <form>
        <div>
          <label for='fname'>First name</label>
          <input type='text' id='fname' />
        </div>
        <div>
          <label for='lname'>Last name</label>
          <input type='text' id='lname' />
        </div>
        <div>
          <label for='phone'>Phone</label>
          <input type='number' id='phone' />
        </div>
        <div>
          <label for='role'>Role</label>
          <select>
            <option default>Choose</option>
            <option>Teacher</option>
            <option>Student</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label for='text'>Message</label>
          <textarea name="" id="text" />
        </div>
        <div>
          <button type='submit' value='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;