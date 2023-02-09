import React from "react";
import { ICard, ICardProps } from "../../interFaces/interFaces";
import "./SingleDish.css";


const   SingleDish = (props:ICardProps | undefined) => {
const dishProps:ICard | undefined = props?.dish
      return (<>
      <div className="dish">
        <img className="food" src={dishProps?.img} alt="" />
        <div className="info">
          <h1>{dishProps?.name}</h1>
          {dishProps?.info?.map((source, index)=><img src={source} key={index} alt=""/>)}
          <p>{dishProps?.about}</p>
          <p className="price"><img src="/image/shekel.svg" alt="" /> {dishProps?.price}</p>
        </div>
      </div>
        </>
      )
    }

export default   SingleDish;