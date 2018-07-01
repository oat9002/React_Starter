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
    

    render() {
        return this.props.persons.map((person, index) => {
            return <Person 
                        name={ person.name } 
                        age={ person.age } 
                        click={ () => this.props.clicked(index) } 
                        key={ person.id } 
                        changed={ (event) => this.props.changed(event, person.id) }/>
        });
    }
}

export default Persons;