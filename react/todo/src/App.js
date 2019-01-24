import React, { Component } from 'react';
import './App.css';

const TodoObj = (props) => (
  <li>{props.text}</li>
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState( { newTodo: event.target.value } );
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    const newTodo = this.state.newTodo;
    const todos = this.state.todos.map((todo, index) => (
      <TodoObj key={index} text={todo} />
    ));
    return (
      <div className="App">
        <h2>Simple Todo App</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange} placeholder="What needs to be done?" />
          <button type="submit">SAVE</button>
        </form>
        <div>
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
