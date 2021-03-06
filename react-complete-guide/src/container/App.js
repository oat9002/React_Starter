import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);

    this.state = {
      persons : [
        { id: 'asd', name: 'Max', age: 28 },
        { id: 'f', name: 'Manu', age: 29 },
        { id: 'aa', name: 'Stephanie', age: 27 },
      ],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside conponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside conponentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate');

    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');

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
    this.setState((prevState, prpos) => {
      return {
        showPersons: !this.state.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      };
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
      <Aux>
         <button onClick={ () => { this.setState({ showPersons: true }) } }>Show Persons</button>
          <Cockpit
            appTitle={ this.props.title }
            showPersons={ this.state.showPersons }
            persons={ this.state.persons }
            clicked={ this.togglePersonHandler }
          />
          { persons }
      </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default withClass(App, classes.App);
