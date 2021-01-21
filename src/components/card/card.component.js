import React from "react";
import './card.styles.css'

// functional component
// card container
export const Card = (props) => {
  return (
    <div className='card-container'>
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=150x200`}/>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
