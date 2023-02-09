import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import SingleRest from "../SingleRest/SingleRest";
import { ICard, IPopular } from "../../interFaces/interFaces";
import Card from "../Card/Card";
import { type } from "os";

const Popular: React.FC<any>= (props:IPopular) => {
    const popularRest: any = data.restaurant.filter((popu) =>
    popu.rating.includes("5")
  );
    const popularDish: any = data.dishes.filter((popu) =>
    popu.rating.includes("5")
  );

  return (
    <>
      <div className="popular">
        <h1>popular restaurant in epicure:</h1>
        <div className="three-div">
        {props.kind.map((_x:ICard)=>(
            <Card />
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

<Card class="rest" img={data.restaurant[0].img} name={data.restaurant[0].name} chef={data.restaurant[0].chef} rating={data.restaurant[0].rating} />
          <Card class="dish" img={data.dishes[0].img} name={data.dishes[0].name} icons={data.dishes[0].icons} about={data.dishes[0].about} price={data.dishes[0].price}/>
          <Card class="dish" img={data.dishes[0].img} name={data.dishes[0].name} icons={data.dishes[0].icons} about={"iufd sl fds"} price={data.dishes[0].price}/>