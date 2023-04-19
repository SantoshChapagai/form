import React, { Component } from 'react';
import './app.css'
import Form from './components/Form';
import Display from './components/Display';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false,
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    message: ''
  }
  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal
    });

  }
  inputChangeHandler = (name, value) => {
    this.setState({
      [name]: value
    });

  }
  render() {
    return (
      <div className="App">
        <div>
          <Form submit={this.modalHandler} onChange={this.inputChangeHandler} />
        </div>
        <div>
          <Display
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            role={this.state.role}
            message={this.state.message}
          />
        </div>
        <div>
          {this.state.showModal && <Modal click={this.modalHandler} />}

        </div>

      </div>
    );
  }
}

export default App;
