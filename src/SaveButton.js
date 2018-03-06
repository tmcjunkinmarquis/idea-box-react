import React from 'react'

import './App.css';



class SaveButton extends React.Component {
  constructor(props) {
    super()
    this.state = {
      
    };
  
}





render() {
    return (
      <button id="button-save" 
              className="input-fields" 
              aria-labelledby="save idea"
              
              onClick={ this.props.buttonProp }>
              save


      </button>
  )}
}


           

export default SaveButton;