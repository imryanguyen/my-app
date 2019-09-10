import React, {Component} from 'react';
import './App.css';
import './Person.css';
import Person from './Person';
import { O_DIRECT } from 'constants';

class App extends Component{
  state = {
    persons: [
      { id: 121, name: 'Max', age: 28 },
      { id: 122, name: 'Manu', age: 25 },
      { id: 123, name: 'Stephanie', age: 23 }
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex];
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}  
              key={person.id}
              change={() => this.nameChangeHandler(event, person.id)} />
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
