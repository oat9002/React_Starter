import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const AssignedClasses = [];
    let btnClass = '';
    if(props.showPerson) {
        btnClass = classes.Red;
    }  

    if(props.persons.length <= 2) {
      AssignedClasses.push('red');
    }
    
    if(props.persons.length <= 1) {
      AssignedClasses.push('bold');
    }

    return (
        <div className={ classes.Cockpit }>
            <h1>{ props.appTitle }</h1>
            <p className={ AssignedClasses.join(' ') } >I'm working</p>
            <button className={ btnClass } onClick={ props.clicked }>Toggle Person</button>
            
        </div>
    );
};


export default cockpit;