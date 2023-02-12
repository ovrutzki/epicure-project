import React, { useState, useEffect } from "react";
import "./Popular.css";
import data from "../../epicure.json";
import { ICard, IPopular } from "../../interFaces/interFaces";
import Card from "../Card/Card";
import Restaurant from "../Restaurant/Restaurant";
import { log } from "console";


const Popular: React.FC<any>= (props:any) => {
    const kind: ICard[] = props.kind
    const popular=kind.filter((best) =>
    best.rating?.includes("5")
  );
  console.log(popular)
//     const popularDish: any = data.dishes.filter((dish) =>
//     dish.rating.includes("5")
//   );

  return (
    <>
      <div className="popular">
        {popular[0].chef ? <h1>popular restaurant in epicure:</h1> : <h1>SIGNATURE DISH OF:</h1>}
        <div className="three-div">
        {popular.map((card:ICard, index:number)=>(
            <Card class={card.price ? "dish" : "rest"} key={index} img={card.img} name={card.name} icons={card.icons} about={card.about} price={card.price}   chef={card.chef} rating= {card.rating} />
        ))}
          
        </div>
        {popular[0].chef ? <button>
          <img src="/image/all-restaurant.svg" alt="arrow" />
        </button> : null}
        
      </div>
    </>
  );
};

export default Popular;

// <Card class="rest" img={data.restaurant[0].img} name={data.restaurant[0].name} chef={data.restaurant[0].chef} rating={data.restaurant[0].rating} />
//           <Card class="dish" img={data.dishes[0].img} name={data.dishes[0].name} icons={data.dishes[0].icons} about={data.dishes[0].about} price={data.dishes[0].price}/>
//           <Card class="dish" img={data.dishes[0].img} name={data.dishes[0].name} icons={data.dishes[0].icons} about={"iufd sl fds"} price={data.dishes[0].price}/>