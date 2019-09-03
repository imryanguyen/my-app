import React, {Component} from 'react';
import './App.css';
import './Person.css';
import Person from './Person';

class App extends Component{
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 25 },
      { name: 'Stephanie', age: 23 }
    ],
    otherState: 'some other values',
    showPersons: false
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age}  />
          })}     
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>i lobe u tamachan</h1>
        <p>but i really lobe u tamachan :3</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch name!</button>
        {persons}
      </div>
      
    );
  }
}

export default App;
