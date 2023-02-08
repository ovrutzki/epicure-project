import React from "react";
import "./SingleRest.css";


const SingleRest = (props: any) => {

      return (<>
      <div className="rest">
        <img src={props.restaurant.img} alt="" />
        <div>
          <h1>{props.restaurant.name}</h1>
          <p>{props.restaurant.chef}</p>
          <img src={props.restaurant.rating} alt="" />
        </div>
      </div>

        </>
      )
    }

export default SingleRest;