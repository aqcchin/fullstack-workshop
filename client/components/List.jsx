import React, { Component } from 'react';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo } = this.state;
    axios.post('/api/todoList', { todo, listName })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    })
    e.target.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {this.handleSubmit(e)}}>
        Add todo: <input onKeyUp={this.handleInput}></input>
        </form>
      </div>
    )
  }
}