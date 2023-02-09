import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import SingleRest from "../SingleRest/SingleRest";
import { ICard } from "../../interFaces/interFaces";
import Card from "../Card/Card";

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
        {popular.map()}
          <Card class="rest" img={data.restaurant[0].img} name={data.restaurant[0].name} chef={data.restaurant[0].chef} rating={data.restaurant[0].rating} />
          <Card class="dish" img={data.dishes[0].img} name={data.dishes[0].name} icons={data.dishes[0].icons} about={data.dishes[0].about} price={data.dishes[0].price}/>
          <Card class="dish" img={data.dishes[0].img} name={data.dishes[0].name} icons={data.dishes[0].icons} about={"iufd sl fds"} price={data.dishes[0].price}/>
        </div>
        <button>
          All restaurants <img src="/image/vector.svg" alt="" />
        </button>
      </div>
      {/* <div className="popular">
        <h1>popular restaurant in epicure:</h1>
        <div className="three-div">
          {popular.map((rest: ICard, index: number) => (
            <SingleRest rest={rest} key={index}  />
          ))}
        </div>
        <button>
          All restaurants <img src="/image/vector.svg" alt="" />
        </button>
      </div> */}
    </>
  );
};

export default PopularRest;
