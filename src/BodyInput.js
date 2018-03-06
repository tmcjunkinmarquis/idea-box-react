import React from 'react'

import './App.css';



class BodyInput extends React.Component {
  constructor() {
    super()
    this.state = {
      body: ''
    };
  
  this.userInputsBody = this.userInputsBody.bind(this);

}

  userInputsBody(event) {
    this.props.bodyProp(event.target.value)
  }

  

render() {
    return (
      <input  type="text" 
              className="input-fields" 
              id="input-body" 
              placeholder="Body" 
              maxLength="100" 
              aria-labelledby="body content" 
              onChange={this.userInputsBody}/>
  )}
}

export default BodyInput;