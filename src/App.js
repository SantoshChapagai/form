import React, { Component } from 'react';
import './app.css'
import Form from './components/Form';
import Display from './components/Display';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Post from './components/Post';
import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    note: {
      firstname: '',
      lastname: '',
      phone: '',
      role: '',
      message: '',
    },
    data: [],

  }
  componentDidMount() {
    axios.get(" http://localhost:4000/posts/")
      .then(res => this.setState({ data: res.data }));
  }
  //   fetch(" http://localhost:4000/posts").then(res => res.json())
  //     .then(res => this.setState({ data: res }));
  // }
  submitHandler = (e) => {
    e.preventDefault();
    axios.post(" http://localhost:4000/posts", this.state.note)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  abortHandler = () => {
    this.setState({
      showModal: false,
      note: {
        firstname: '',
        lastname: '',
        phone: '',
        role: '',
        message: '',
      },
      data: []
    })
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
              send={this.submitHandler}
              back={this.abortHandler}
              {...this.state.note}

            />}
          </div>
        </div>
        <Post
          data={this.state.data} />
        <div className='footer'>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
