import React from 'react';

import './App.css';
import NameInput from './NameInput.js'
import BodyInput from './BodyInput.js'
import SaveButton from './SaveButton.js'


class AddIdeaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueID: Date.now(),// default is necessary for the first idea after a refresh
      quality: 'swill',
      cardName: '',
      cardBody: ''
    };

    
    this.cardToLocalStorage = this.cardToLocalStorage.bind(this);
    this.cardNameStateChange = this.cardNameStateChange.bind(this);
    this.cardBodyStateChange = this.cardBodyStateChange.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
  }
 
  cardToLocalStorage(event) {
    event.preventDefault()
    this.clearInputFields()
    this.setState({
      uniqueID: Date.now(),//only sets after local storage has been set
        })
    localStorage.setItem(this.state.uniqueID, JSON.stringify({
      uniqueID: this.state.uniqueID,
      quality: this.state.quality,
      cardName: this.state.cardName, 
      cardBody: this.state.cardBody
    }))
    this.setState({
      cardName: '',
      cardBody: ''
        })
    
    this.props.addIdea({cardName: this.state.cardName, cardBody: this.state.cardBody})
  }

  clearInputFields() {
    
    console.log('holy')

    document.getElementById('input-title').value = ''
    document.getElementById('input-body').value = ''
    
  }


  cardNameStateChange(name) {
    this.setState({ 
      cardName: name,
      cardExists: true 
    });
  }

  cardBodyStateChange(body) {
    this.setState({ 
      cardBody: body   
    });
  }



  render() {
    return (
      <section>
        <NameInput nameProp={this.cardNameStateChange}/> 
        <BodyInput bodyProp={this.cardBodyStateChange}/>
        <SaveButton buttonProp={this.cardToLocalStorage} />
      </section> 
    );
  }
}

export default AddIdeaCard;

