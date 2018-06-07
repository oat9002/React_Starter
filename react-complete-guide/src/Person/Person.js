import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div onClick={ props.click } className='Person' style={ style }>
            <h1>I'm a {props.name}! I'm {props.age} years old.</h1>
            <p>{ props.children }</p>
            <input type='text' onChange={props.changed}/>
        </div>
    );
};

export default Radium(person);