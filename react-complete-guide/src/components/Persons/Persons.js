import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside conponentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside conponentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate');

        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.click !== this.props.click;
        //return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person 
                        name={ person.name } 
                        age={ person.age } 
                        click={ () => this.props.clicked(index) } 
                        position={ index }
                        key={ person.id } 
                        changed={ (event) => this.props.changed(event, person.id) }/>
        });
    }
}

export default Persons;