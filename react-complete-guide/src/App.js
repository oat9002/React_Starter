import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
    // this.setState({
    //   persons : [
    //     { name: 'Max', age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 26 },
    //   ]
    // });

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => 
              <Person 
                name={ person.name } 
                age={ person.age } 
                click={ () => this.deletePersonHandler(index) } 
                key={ person.id } 
                changed={ (event) => this.nameChangedHandler(event, person.id) }/>
          ) }
      </div> 
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightblue',
        color: 'grey'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1>Hi, I'm and React app 555</h1>
          <p className={ classes.join(' ') } >I'm working</p>
          <button style={ style } onClick={ this.togglePersonHandler }>Toggle Person</button>
          { persons }
        </div>
      </StyleRoot>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default Radium(App);
