import React from 'react';

const Card = (props) => {

  return (

    <li className="card" id="" >
      <h2 className="ideas-title">{props.cardName}</h2>
      <button className="circle-buttons button-delete" id="delete-idea"></button>
      <p className="ideas-content">{props.cardBody}</p>
      <button className="circle-buttons button-upvote" id="upvote-idea"></button>
      <button className="circle-buttons button-downvote" id="downvote-idea"></button>
      <h5 className="rating">
        <span>quality:</span>
        <span id="span-quality"></span>
      </h5>
      
    </li>


  )
}







export default Card;