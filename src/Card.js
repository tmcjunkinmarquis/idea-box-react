import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.uniqueID = this.props.uniqueID

  this.state = {} 
  
  this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.removeIdea(this.uniqueID)
  }
  

  render() {
    return (
      <li className="card" id="" >
        <h2 className="ideas-title">{this.props.cardName}</h2>
        <button 
          className="circle-buttons button-delete" 
          onClick={this.handleDeleteClick}
          id="delete-idea">
          </button>
        <p className="ideas-content">{this.props.cardBody}</p>
        <button className="circle-buttons button-upvote" id="upvote-idea"></button>
        <button className="circle-buttons button-downvote" id="downvote-idea"></button>
        <h5 className="rating">
          <span>quality:</span>
          <span id="span-quality"></span>
        </h5> 
      </li>
    )
  } 
}

export default Card;