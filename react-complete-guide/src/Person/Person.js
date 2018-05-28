import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div onClick={ props.click } className='Person'>
            <h1>I'm a {props.name}! I'm {props.age} years old.</h1>
            <p>{ props.children }</p>
            <input type='text' onChange={props.changed}/>
        </div>
    );
};

export default person;