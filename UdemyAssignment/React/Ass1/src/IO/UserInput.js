import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
    render() {
        return (
            <div className='txtInput'>
                <input type='text' onChange={ this.props.changed } value={ this.props.username }/>
            </div>
        );
    }
}

export default UserInput;