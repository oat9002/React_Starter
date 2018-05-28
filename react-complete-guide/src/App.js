import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 },
    ],
    showPersons: false
  }

  switchNameHandler = (name) => {
    this.setState({
      persons : [
        { name: name, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    });
  }

  changeHandler = (event) => {
    this.setState({
      persons : [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        <Person 
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age }/>
        <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Irene') }
          changed={ this.changeHandler }
          >Hi!!!!!!</Person>
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age }/>
      </div> 
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm and React app 555</h1>
        <p>I'm working</p>
        <button style={ style } onClick={ this.togglePersonHandler }>swtichName</button>
        { persons }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default App;
