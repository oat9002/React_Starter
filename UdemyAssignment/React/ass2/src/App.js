import React, { Component } from 'react';
import './App.css';
import CharComp from './Char';
import ValidationComp from './Validation';

class App extends Component {
  state = {
    txt: ''
  }

  changeTextHandler = (event) => {
    this.setState({
      txtLength: event.target.value.length,
      txt: event.target.value
    });
  }
  
  deleteCharacterHandler = (index) => {
    let tempTxt = this.state.txt;
    let arrTxt = tempTxt.split('')
    
    arrTxt.splice(index, 1);
    tempTxt = arrTxt.join('');
  
    this.setState({
      txt: tempTxt
    });
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange={ this.changeTextHandler } />
        <ValidationComp length={ this.state.txt.length }></ValidationComp>
        <div className='Character'>
          { this.state.txt.split('').map((c, idx) => 
              <CharComp key={ idx } character={ c } click={ this.deleteCharacterHandler.bind(this, idx) }></CharComp>
            ) 
          }
        </div>
      </div>
    );
  }
}

export default App;
