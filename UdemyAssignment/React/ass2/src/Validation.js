import React from 'react';

const validation = (props) => {
    let validationTxt = null;

    if(props.length > 10) {
        validationTxt = (
            <p>Text too long</p>
        );
    }
    else if(props.length < 5) {
        validationTxt = (
            <p>Text too short</p>
        );
    }
    
    return (
        <div>
            { validationTxt }
        </div>     
    );
};

export default validation;