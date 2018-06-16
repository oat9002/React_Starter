import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons : [
      { id: 'asd', name: 'Max', age: 28 },
      { id: 'f', name: 'Manu', age: 29 },
      { id: 'aa', name: 'Stephanie', age: 27 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({
      persons: persons
    });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
            <Persons
              persons={ this.state.persons }
              clicked={ this.deletePersonHandler }
              changed={ this.nameChangedHandler }
            />
      </div> 
      );

      btnClass = classes.Red;
    }

    const AssignedClasses = [];
    if(this.state.persons.length <= 2) {
      AssignedClasses.push('red');
    }
    
    if(this.state.persons.length <= 1) {
      AssignedClasses.push('bold');
    }

    return (

      <div className={ classes.App }>
        <h1>Hi, I'm and React app 555</h1>
        <p className={ AssignedClasses.join(' ') } >I'm working</p>
        <button className={ btnClass } onClick={ this.togglePersonHandler }>Toggle Person</button>
        { persons }
      </div>

    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default App;
