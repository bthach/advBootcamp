import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

=======
import './App.css';

const TodoObj = (props) => (
  <li>{props.text}</li>
);


>>>>>>> f0e972286c011118db464af27bc4d6a246d6b1b3
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
<<<<<<< HEAD
      new: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.new];
=======
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
>>>>>>> f0e972286c011118db464af27bc4d6a246d6b1b3
    this.setState({todos, newTodo: ''});
  }

  render() {
<<<<<<< HEAD
    const {newTodo} = this.state;

    return (
      <div className="App">
        <h2>Simple Todo App</h2>
        <form onSubmit={this.handleSubmit}/>
          <input type="text" value={newTodo} onChange={(event) => this.setState({[event.target.name]: event.target.value })} />
          <button type="submit">SAVE</button>
=======
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
>>>>>>> f0e972286c011118db464af27bc4d6a246d6b1b3
      </div>
    );
  }
}

export default App;
