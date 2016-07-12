import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      val: 0
    };
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    return <InnerComponent
    update={this.update}
    {...this.state}
    {...this.props} />
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class Test extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt='button'/>
        <LabelMixed txt='label'/>
      </div>
    );
  }
}

class AppSlide extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: ReactDOM.findDOMNode(this.refs.val).value
    });
  }

  render() {
    return (
      <div>
        <Slider ref='val' update={this.update} /><br />
        {this.state.val}
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return <input type="range" max="255" min="0" onChange={this.props.update}></input>
  }
}

export default Test
