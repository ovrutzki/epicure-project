import React, { ReactNode } from "react";
import { ICard } from "../../interFaces/interFaces";
import "./Card.css";

const  Card: React.FC <ICard> = (props: ICard) => {
  return (
    <>
      <div className={`card ${props.class}`}>
        {props.img ? <img className="img-rest food" src={props.img}/> : <img className="img-dish food" src={props.img}/>}
        <div className="card-downer-div">
          <h1>{props.name} </h1>
          
          {props.icons ?<section>{ props.icons?.map((source:string, index:number)=> <img className="icon" src={source} key={index} alt="icon" />)}</section> : null}
          
          <p>{props.chef ? props.chef : props.about}</p>
            {props.chef ? <img className="rating" src={props.rating} alt="rating"/> : null}
            {props.price ? <div ><hr /><p>₪{props.price}</p><hr /></div> : null }
        </div>
      </div>
    </>
  );
};

export default  Card;