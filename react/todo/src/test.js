class App extends Component {
 constructor(){
 super()
    this.state = {
    todo: [],
    inputText: ""
    }
 }

 onChange = (e) => {
 this.setState({[e.target.name]: e.target.value})
 }

 onSubmit = (e) => {
 e.preventDefault();
 let todo = this.state.todo.slice();
 todo.push(this.state.inputText)
 this.setState({todo , inputText: ""});
 }

 render() {
 return (
 <div className="App">
 <h2>Todo App</h2>
 <div>
 <form onSubmit={this.onSubmit}>
 <input 
 type="text" 
 name="inputText" 
 value={this.state.inputText} 
 onChange={this.onChange} 
 placeholder="insert todo" />
 <button>SUBMIT</button>
 </form>
 <hr/>
 <Todo todo={this.state.todo}/>
 </div>
 </div>
 );
 }
}
export default App;


class Todo extends Component {
 render() {
 const todo = this.props.todo.map((val, key) => ( 
 <li key={key}>{val}</li> 
 ));
 return (
 <div >
 {todo}
 </div>
 )
 }
}
export default Todo