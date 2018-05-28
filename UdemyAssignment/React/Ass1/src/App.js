import React, { Component } from 'react';
import './App.css';
import UserInput from './IO/UserInput';
import UserOutput from './IO/UserOutput';

class App extends Component {
  state = {
    username: 'default'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div>
        <UserInput changed={ this.changeUsernameHandler } username={ this.state.username }/>
        <UserOutput username={ this.state.username }/>
        <UserOutput username='default'>Testing children</UserOutput>
      </div>
    );
  }
}

export default App;
