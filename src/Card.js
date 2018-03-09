import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);

  this.qualityArray = ['swill', 'plausible', 'genius']
  
  this.handleDeleteClick = this.handleDeleteClick.bind(this);
  this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
  this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.removeIdea(this.props.idea.uniqueID)
  }

  handleUpVoteClick() {
    if (this.props.idea.qualityIndex < 2) {
      this.props.idea.qualityIndex++;
      this.props.idea.quality = this.qualityArray[this.props.idea.qualityIndex];
    }
    this.props.updateQuality(this.props.idea);
  }

  handleDownVoteClick() {
    if (this.props.idea.qualityIndex > 0) {
      this.props.idea.qualityIndex--;
      this.props.idea.quality = this.qualityArray[this.props.idea.qualityIndex];
    }
    this.props.updateQuality(this.props.idea)
  }

  render() {
    return (
      <li className="card" id="" >
        <h2 className="ideas-title">{this.props.idea.name}</h2>
        <button 
          className="circle-buttons button-delete" 
          onClick={this.handleDeleteClick}
          id="delete-idea">
          </button>
        <p className="ideas-content">{this.props.idea.body}</p>
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
          <span id="span-quality">{this.props.idea.quality}</span>
        </h5> 
      </li>
    )
  } 
}

export default Card;