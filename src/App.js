import React, { Component } from 'react';
import './app.css'
import Form from './components/Form';
import Display from './components/Display';
import Modal from './components/Modal';

function App() {

  return (
    <div className="App">
      <div>
        <Form />
      </div>
      <div>
        <Display />
      </div>
      <div>
        <Modal />
      </div>

    </div>
  );
}

export default App;
