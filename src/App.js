import React, { Component } from 'react';
import './app.css'
import Form from './components/Form';
import Display from './components/Display';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false
  }
  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal
    })

  }
  render() {
    return (
      <div className="App">
        <div>
          <Form submit={this.modalHandler} />
        </div>
        <div>
          <Display />
        </div>
        <div>
          {this.state.showModal && <Modal />}

        </div>

      </div>
    );
  }
}

export default App;
