import React from 'react'

import './App.css';



class NameInput extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    };
  
  this.userInputsName = this.userInputsName.bind(this);

}

  userInputsName(event) {
    this.props.nameProp(event.target.value)
  }

  clearUserInputs(event) {
    event.target.value = ''
  }

render() {
    return (
      <input  type="text" 
              className="input-fields" 
              id="input-title" 
              placeholder="Title" 
              maxLength="100" 
              aria-labelledby="idea name" 
              onChange={this.userInputsName}/>
  )}
}

export default NameInput;