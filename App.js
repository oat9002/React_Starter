import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      txt: 'text test',
      click: false
    };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value,
      txt: ReactDOM.findDOMNode(this.refs.txt).value,
    });
  }

  handleClick() {
    this.setState({
      click: true
    });
  }

  render() {
    // return React.createElement('h1', null, 'Hello Guy');
    let txt = this.props.txt;
    return (
      <div>
        <Slider ref="red" update={this.update}/>
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update}/>
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update}/>
        {this.state.blue}
        <br />
        <br />
        <InputBox ref="txt" update={this.update} />
        <br/>
        <Btn onClick={this.handleClick} >Send</Btn>
        <br />
        {this.state.click ? <txtLabel txt={this.state.txt} /> : <txtLabel txt={Please insert some texts.} />}
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
    );
  }
}

class txtLabel extends React.Component {
  render() {
    return <label>{this.props.label}</label>
  }
}

class Btn extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

class InputBox extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update} />
  }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text" onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   );
// }

// const App = () => <h1>Hello Oat</h1>
ReactDOM.render(
  <App />, document.getElementById('app')
);

// export default App
