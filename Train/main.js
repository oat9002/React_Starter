import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {

	ComponentWillMount() {
		console.log('ComponentWillMount');
	}

	ComponentDidMount() {
		console.log('ComponentDidMount');
	}



	render() {
		console.log('render()');

		const data = "data naja";
    const item = [{
      id: 0,
      text: 'oat'
    }, {
      id: 1,
      text: 'oat2'
    }
  ];

		return (
			<div>
				<h1>Hello Nextzy</h1>
				<h2>sssss</h2>
				<Widget name={data}/>
				<Header/>
        <MyComp/>
        {item.map((ea) => {
          return <div key={ea.id}><p>{ea.text}</p></div>
        })}
			</div>
		);
	}
}

const MyComp = () => <h1>Test const</h1>


class Widget extends Component {

	render(){
		return (
			<div>
				<h1>Widget</h1>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

class Header extends Component {
	constructor() {
		super();

		this.onClick = this.onClick.bind(this);

		this.state = {
			name: 'New Nextzy',
			value: 0
		}
	}

	onClick(){
		this.setState({name: 'Yoohoo!!', value: this.state.value +1})
	}

	render(){
		console.log('render() in Header')
		return (
			<h1 onClick={this.onClick}>{this.state.name} {this.state.value}</h1>
		);
	}
}

const node = document.getElementById('app')
render(<App />,node)
