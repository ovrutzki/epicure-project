import React from "react";
import "./SingleDish.css";


const   SingleDish = (props: any) => {

      return (<>
      <div className="dish">
        <img className="food" src={props.dish.img} alt="" />
        <div className="info">
          <h1>{props.dish.name}</h1>
          <img src={props.dish.info} alt=""/>
          <p>{props.dish.about}</p>
          <p>{props.dish.price}</p>
        </div>
      </div>

        </>
      )
    }

export default   SingleDish;