import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();

    if(rnd > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div onClick={ props.click } className={ classes.Person } >
            <h1>I'm a {props.name}! I'm {props.age} years old.</h1>
            <p>{ props.children }</p>
            <input type='text' onChange={props.changed}/>
        </div>
    );
};

export default person;