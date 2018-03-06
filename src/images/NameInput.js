import React from 'react'
import PropTypes from 'prop-types';
import './App.css';



class NameInput extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    };
  

  this.submit = this.submit.bind(this);
  this.userInputsName = this.userInputsName.bind(this);

}


submit(event) {
    if (event.keyCode === 13) {
      this.props.getName(this.state.name);
      localStorage.setItem('name', this.state.name);
      this.setState({name: ''});
    }
  }

  userInputsName(event) {
    this.setState({ 
      name: event.target.value
    });
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