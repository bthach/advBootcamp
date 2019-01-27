import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      new: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.new];
    this.setState({todos, newTodo: ''});
  }

  render() {
    const {newTodo} = this.state;

    return (
      <div className="App">
        <h2>Simple Todo App</h2>
        <form onSubmit={this.handleSubmit}/>
          <input type="text" value={newTodo} onChange={(event) => this.setState({[event.target.name]: event.target.value })} />
          <button type="submit">SAVE</button>
      </div>
    );
  }
}

export default App;
