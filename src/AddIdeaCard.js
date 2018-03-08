import React from 'react';

import './App.css';
import SaveButton from './SaveButton.js'
import Idea from './IdeaConstructor.js'

class AddIdeaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardBody: ''
    };

    this.createCard = this.createCard.bind(this);

    this.clearInputFields = this.clearInputFields.bind(this);
  }

  createCard(event) {
    event.preventDefault()
    this.clearInputFields()

    const idea = new Idea(this.state.cardName, this.state.cardBody)

    localStorage.setItem(idea.uniqueID, JSON.stringify(idea))

    this.props.addIdea(idea)
  }

  clearInputFields() {
    document.getElementById('input-title').value = ''
    document.getElementById('input-body').value = ''
  }

  userInputsName(event) {
    this.setState({
      cardName: event.target.value,
    })
  }

  userInputsBody(event) {
    this.setState({
      cardBody: event.target.value
    });
  }

  render() {
    return (
      <section>
        <input type="text"
          className="input-fields"
          id="input-title"
          placeholder="Title"
          maxLength="100"
          aria-labelledby="idea name"
          onChange={(event) => { this.userInputsName(event) }} />
        <input type="text"
          className="input-fields"
          id="input-body"
          placeholder="Body"
          maxLength="100"
          aria-labelledby="body content"
          onChange={(event) => { this.userInputsBody(event) }} />
        <SaveButton createCard={this.createCard} />
      </section>
    );
  }
}

export default AddIdeaCard;

