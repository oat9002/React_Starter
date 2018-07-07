import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component{

    componentWillMount() {
        console.log('[Person.js] Inside conponentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside conponentDidMount()');
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside shouldComponentUpdate');

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('[UPDATE Person.js] Inside componentDidUpdate');
    }

    render() {
        return (
            <Aux>
                 <h1 onClick={ this.props.click }>I'm a {this.props.name}! I'm {this.props.age} years old.</h1>
                <p>{ this.props.children }</p>
                <input ref={ (inp) => { this.inputElement = inp } } type='text' onChange={this.props.changed}  />
            </Aux>   
        );
    }
} 

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);