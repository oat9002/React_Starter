import React from 'react';

const userOutput = (props) => {
    const style = {
        width: '100%',
        margin: 'auto',
        padding: '16px',
        textAlign: 'center'
    };
    
    return (
        <div style={ style }>
            <p>username: { props.username }</p>
            <p>{ props.children }</p>
        </div>
    );
};

export default userOutput;
