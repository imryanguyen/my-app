import React, {Component} from 'react';
import './App.css';
import Person from './Person';

class App extends Component{
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 25 },
      { name: 'Stephanie', age: 23 }
    ],
    otherState: 'some other values'
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Ryanlov';
    this.setState( {
      persons: [
        { name: 'ryan-kun', age: 19 },
        { name: 'tama-chan', age: 21 },
        { name: 'tamato', age: 12 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>i lobe u tamachan</h1>
        <p>but i really lobe u tamachan :3</p>
        <button onClick={this.switchNameHandler}>Switch name!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age='9'
        > My hobbies: Racing </Person>
      </div>
      
    );
  }
}

export default App;
