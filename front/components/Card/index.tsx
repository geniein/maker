import React from "react";
import StyledCard from "./styles";

const Card = ({ img = "", title = "", text = "", price = "" }) => {
  return (
    <StyledCard className="card-item">
      <div className="card-image-wrapper">
        <img className="card-img" src={img}></img>
      </div>
      <div className="card-content">
        <h1 className="card-header">{title}</h1>
        <h3 className="card-middle">{text}</h3>
        <p className="card-price">{price}</p>
      </div>
    </StyledCard>
  );
}

export default Card;