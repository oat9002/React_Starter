import React from 'react';

class App extends React.Component {
  render() {

  }
}

class Slider extends React.Component {
  render() {
    return <input type="range" max="255" min="0" onChange={this.props.update}></input>
  }
}
