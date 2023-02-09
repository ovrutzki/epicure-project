import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import SingleRest from "../SingleRest/SingleRest";
import { ICard } from "../../interFaces/interFaces";

const PopularRest: React.FC = () => {
  const popular: any = data.restaurant.filter((rest) =>
    rest.rating.includes("5")
  );
  console.log(popular);

  return (
    <>
      <div className="popular">
        <h1>popular restaurant in epicure:</h1>
        <div className="three-div">
          {popular.map((rest: ICard, index: number) => (
            <SingleRest rest={rest} key={index}  />
          ))}
        </div>
        <button>
          All restaurants <img src="/image/vector.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default PopularRest;
