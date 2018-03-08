import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  
  this.handleDeleteClick = this.handleDeleteClick.bind(this);
  this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
  this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.removeIdea(this.props.uniqueID)
  }

  handleUpVoteClick() {
    this.props.updateQuality(this.props.uniqueID, this.props.quality)
  }

  handleDownVoteClick() {
    this.props.updateQuality(this.props.uniqueID, this.props.quality)
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
        <button 
          className="circle-buttons button-upvote" 
          id="upvote-idea"
          onClick={this.handleUpVoteClick}></button>
        <button 
          className="circle-buttons button-downvote" 
          id="downvote-idea"
          onClick={this.handleDownVoteClick}></button>
        <h5 className="rating">
          <span>quality:</span>
          <span id="span-quality">{this.props.quality}</span>
        </h5> 
      </li>
    )
  } 
}

export default Card;