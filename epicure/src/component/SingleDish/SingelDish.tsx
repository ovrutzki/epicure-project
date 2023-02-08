import React from "react";
import "./ SingelDish.css";


const  SingelDish = (props: any) => {

      return (<>
      <div className="dish">
        <img className="food" src={props.dish.img} alt="" />
        <div className="info">
          <h1>{props.dish.name}</h1>
          <p>{props.dish.chef}</p>
          <img className ="rating" src={props.dish.rating} alt="" />
        </div>
      </div>

        </>
      )
    }

export default  SingelDish;