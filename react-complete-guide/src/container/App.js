import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside conponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside conponentDidMount()');
  }
  

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
    console.log('[App.js] Inside reder()')
    let persons = null;

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
    }

    return (
      <div className={ classes.App }>
        <Cockpit
           appTitle={ this.props.title }
           showPersons={ this.state.showPersons }
           persons={ this.state.persons }
           clicked={ this.togglePersonHandler }
        />
        { persons }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default App;
