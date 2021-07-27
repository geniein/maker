import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import StyledCard from "./styles";

interface Props{
  id:number;
  img:string,
  title:string,
  text:string,
  price:string,  
}

const Card:FC<Props> = ({ id, img, title, text, price }) => {

  const history = useHistory();
  const onClickCard = useCallback(
      (id:number) => {
          console.log('push')
          history.push(`/detail/${id}`);
      },
      [],
  )
  return (
    <StyledCard className="card-item">
      <div className="card-image-wrapper" onClick={()=>onClickCard(id)}>
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