import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import SingleDish from "../SingleDish/SingleDish";
import { ICard } from "../../interFaces/interFaces";

const PopularDish: React.FC = () => {
  const popular: any = data.dishes.filter((dish) =>
    dish.rating.includes("5")
  );
  console.log(popular);

  return (
    <>
      <div className="popular">
        <h1>popular restaurant in epicure:</h1>
        <div className="three-div">
          {popular.map((dish:ICard, index: number) => (
           (index<3) && <SingleDish dish={dish} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularDish;