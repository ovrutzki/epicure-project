import React from "react";
import { ICard } from "../../interFaces/interFaces";
import "./SingleDish.css";


const   SingleDish = (props:any) => {
const dishProps:ICard | undefined = props?.dish
      return (<>
      <div className="dish">
        <img className="food" src={dishProps?.img} alt="" />
        <div className="icons">
          <h1>{dishProps?.name}</h1>
          {dishProps?.icons?.map((source, index)=><img src={source} key={index} alt=""/>)}
          <p>{dishProps?.about}</p>
          <p className="price"><img src="/image/shekel.svg" alt="" /> {dishProps?.price}</p>
        </div>
      </div>
        </>
      )
    }

export default   SingleDish;
// 052322