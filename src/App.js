import React, {Component} from 'react';
import './App.css';
import Person from './Person';

class App extends Component{
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 25 },
      { name: 'Stephanie', age: 23 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>i lobe u tamachan</h1>
        <p>but i really lobe u tamachan :3</p>
        <button onClick={this.switchNameHandler}>Switch name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing </Person>
      </div>
      
    );
  }
}

export default App;
