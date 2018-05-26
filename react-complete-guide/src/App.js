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

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm and React app 555</h1>
        <p>I'm working</p>
        <button onClick={ () => this.switchNameHandler('oat') }>swtichName</button>
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
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default App;
