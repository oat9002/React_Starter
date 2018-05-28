import React, { Component } from 'react';
import './App.css';
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
          { this.state.persons.map((person, index) => 
              <Person 
                name={ person.name } 
                age={ person.age } 
                //click={ () => this.deletePersonHandler(index) } 
                key={ person.id } 
                changed={ (event) => this.nameChangedHandler(event, person.id) }/>
          ) }
       
        {/* <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Irene') }
          changed={ this.changeNameHandler }
          >Hi!!!!!!</Person>
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age }/> */}
      </div> 
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm and React app 555</h1>
        <p>I'm working</p>
        <button style={ style } onClick={ this.togglePersonHandler }>togglePerson</button>
        { persons }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
  }
}

export default App;
