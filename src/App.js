import React, { Component } from 'react';
import './app.css'
import Form from './components/Form';
import Display from './components/Display';
import Modal from './components/Modal';
import Footer from './components/Footer'

class App extends Component {
  state = {
    showModal: false,
    note: {
      firstname: '',
      lastname: '',
      phone: '',
      role: '',
      message: ''
    }
  }
  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal
    });

  }
  inputChangeHandler = (e) => {
    const name = e.target.name;
    this.setState({
      note: {
        ...this.state.note,
        [name]: e.target.value
      }
    });

  }
  render() {
    return (
      <div className="App">
        <div className='holder'>
          <div>
            <Form submit={this.modalHandler} inputChangeHandler={this.inputChangeHandler} />
          </div>
          <div>
            <Display
              {...this.state.note}
            />
          </div>
          <div>
            {this.state.showModal && <Modal
              click={this.modalHandler}
              {...this.state.note}
            />}
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
