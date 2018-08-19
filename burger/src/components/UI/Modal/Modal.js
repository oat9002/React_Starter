import React from 'react';
import classes from './Modal.css';

const modal = (props) => (
    <div 
        className={ classes.Modal }
        style={{ 
            transfrom: props.show ? 'translateY(0)' : 'translateY(-1000vh)',
            opacity: props.show ? '1' : '0' 
        }}>
        { props.children }
    </div>
);

export default modal;