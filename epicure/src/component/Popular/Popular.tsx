import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import SingleRest from "../SingleRest/SingleRest";
import Restaurant from "../Restaurant/Restaurant";

const Popular: React.FC = () => {
  const popular: any = data.restaurant.filter((rest) =>
    rest.rating.includes("5")
  );
  console.log(popular);

  return (
    <>
      <div id="popular">
        <h1>popular restaurant in epicure:</h1>
        <div id="three-div">
          {popular.map((rest: object, index: number) => (
            <SingleRest restaurant={rest} key={index} />
          ))}
        </div>
        <button>
          All restaurants <img src="/image/vector.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default Popular;
