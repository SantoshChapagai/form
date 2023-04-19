import React from 'react';
import './style.css';

const Form = (props) => {
  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.onChange(name, value);
  }
  return (
    <div className='form_container'>
      <form onSubmit={props.submit}>
        <div>
          <label for='fname'>First name</label>
          <input type='text' name='firstname' id='fname' onChange={inputChange} />
        </div>
        <div>
          <label for='lname'>Last name</label>
          <input type='text' name='lastname' id='lname' onChange={inputChange} />
        </div>
        <div>
          <label for='phone'>Phone</label>
          <input type='number' name='phone' id='phone' onChange={inputChange} />
        </div>
        <div>
          <label for='role'>Role</label>
          <select name="role" onChange={inputChange}>
            <option default>Choose</option>
            <option value='teacher'>Teacher</option>
            <option value='student'>Student</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label for='text'>Message</label>
          <textarea name="message" id="text" onChange={inputChange} />
        </div>
        <div>
          <button type='submit' value='submit' name='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;