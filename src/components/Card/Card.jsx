import React from "react";

const Card = ({item, id, flipCard}) => {
  const itemClass = item.state ? " active " + item.state : ""
  
  return (
    <div className={"memory-card" + itemClass} onClick={() => flipCard(id)}>
        <img className="front-face" src={item.img} alt="cocktail" />
        <img className="back-face" src="/img/front-face.png" alt="back-face" />
    </div>
  );
}

export default Card;