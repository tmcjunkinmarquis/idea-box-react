import React from 'react';

const Card = ( props ) => {
  
     return(
      
          <li className="card" id="" > 
         
            <h2 className="ideas-title">{props.cardName}</h2>
            <p className="ideas-content">{props.cardBody}</p>
        
          </li>
    

      )}
  
  





export default Card;