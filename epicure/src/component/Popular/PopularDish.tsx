import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import SingleDish from "../SingleDish/SingleDish";

const PopularDish: React.FC = () => {
  const popular: any = data.dishes.filter((dish) =>
    dish.rating.includes("5")
  );
  console.log(popular);

  return (
    <>
      <div id="popular">
        <h1>popular restaurant in epicure:</h1>
        <div id="three-div">
          {popular.map((dish: object, index: number) => (
            <SingleDish dish={dish} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularDish;