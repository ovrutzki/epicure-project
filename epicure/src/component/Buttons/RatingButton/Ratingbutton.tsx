import React, { useState } from "react";
import { IButtons } from "../../../interFaces/interFaces";
// import { SortButtons } from "../FilterButtons/Buttons";
import "./RatingButton.css";


const RatingButton: React.FC<IButtons> = (props:IButtons) => {
  const [rating, setRating] = useState()
  const onChangeRatingValue = (e: any): void => {
    setRating(e.target.value);
  };
      return (<>
      <div className="rating-popup ">
          <h2>{props.name}</h2>
          <div id={props.name} className="rating-div" >
            <form action="">
            <label htmlFor=""><input className="checkbox" type="checkbox" /><img className="stars" src="/image/rating/1.svg" alt="1 star"  /></label>
            <label htmlFor=""><input className="checkbox" type="checkbox" /><img className="stars" src="/image/rating/2.svg" alt="2 star"  /></label>
            <label htmlFor=""><input className="checkbox" type="checkbox" /><img className="stars" src="/image/rating/3.svg" alt="3 star"  /></label>
            <label htmlFor=""><input className="checkbox" type="checkbox" /><img className="stars" src="/image/rating/4.svg" alt="4 star"  /></label>
            <label htmlFor=""><input className="checkbox" type="checkbox" /><img className="stars" src="/image/rating/5.svg" alt="5 star"  /></label>

            </form>
          </div>
        </div>

        </>
      )
    }

export default RatingButton;