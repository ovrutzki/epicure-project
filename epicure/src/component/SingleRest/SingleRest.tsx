import React from "react";
import "./SingleRest.css";


const SingleRest = (props: any) => {

      return (<>
      <div className="rest">
        <img className="food" src={props.restaurant.img} alt="" />
        <div className="info">
          <h1>{props.restaurant.name}</h1>
          <p>{props.restaurant.chef}</p>
          <img className ="rating" src={props.restaurant.rating} alt="" />
        </div>
      </div>

        </>
      )
    }

export default SingleRest;