import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import StyledCard from "./styles";

interface Props{
  id:number;
  thumbnail:string,
  title:string,
  hashTag:string,
  price:string,
  from: string  
}

const Card:FC<Props> = ({ id, thumbnail, title, hashTag, price, from }) => {

  const history = useHistory();
  const onClickCard = useCallback(
      (from:string, id:number) => {
        if(from==='content') history.push(`/detail/${id}`);
        if(from==='review') history.push(`/review/${id}`);
      },
      [],
  )
  return (
    <StyledCard className="card-item">
      <div className="card-image-wrapper" onClick={()=>onClickCard(from, id)}>
        <img className="card-img" src={thumbnail}></img>
      </div>
      <div className="card-content">
        <h1 className="card-header">{title}</h1>
        <h3 className="card-middle">{hashTag}</h3>
        <p className="card-price">{price}</p>
      </div>
    </StyledCard>
  );
}

export default Card;