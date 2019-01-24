import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      let randomInstructor = Math.floor(Math.random() * this.state.instructors.length);

      let randomHobby = Math.floor(Math.random() *  this.state.instructors[randomInstructor]['hobbies'].length);

      let deleteInstructorHobby = this.state.instructors.map((instructor, index) => {
        if (index === randomInstructor) {
          const hobbies = [...instructor['hobbies']];
          hobbies.splice(randomHobby, 1); // Splice may MODIFIES ORIGINAL. make sure using with new object
          console.log(hobbies);
          return {
            ...instructor, 
            hobbies
          };
        }
        return instructor;
      })
      // console.log(deleteInstructorHobby);
      this.setState({instructors: deleteInstructorHobby}); // Must set if different name
      // console.log(this.state.instructors);
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;