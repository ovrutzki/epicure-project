import React from "react";
import data from "../../../epicure.json";
import { ICard, IRenderRest } from "../../../interFaces/interFaces";
import Card from "../../Card/Card";
// import "./RenderRest.css";

const RenderRest: any = (props: IRenderRest) => {
  let filteredRest: Array<{}> = []
  let open:Array<any> = []

    let d = new Date();
    switch (props.sortFilter) {
      case "All":
        filteredRest = data.restaurant;
        break;
      case 'New':
        let year = d.getFullYear()
        for (let i = 0; i < data.restaurant.length; i++) {
            if (year - data.restaurant[i].openYear === 0){
                filteredRest.push(data.restaurant[i])
             };}
          break;
      case "Open Now":
        let hour = d.getHours();
        let day = d.getDay();
        for (let i = 0; i < data.restaurant.length; i++) {
          if (
            data.restaurant[i].openHours[0] < hour &&
            hour < data.restaurant[i].openHours[1] &&
            data.restaurant[i].openDays.includes(day)
          ){open.push(data.restaurant[i]);}
        };
        filteredRest = open;
        break;
      case "Most Popular":
        let mostPopular1 = data.restaurant.filter((rest) => rest.rating.includes("5"))
        let mostPopular2 = data.restaurant.filter((rest) => rest.rating.includes("4"))
        filteredRest = [...mostPopular1 , ...mostPopular2]
        break;
      default:
        filteredRest = data.restaurant;
        break;
    }
  return (
    <>
      <div id="restaurant">
        {filteredRest.map((card: ICard, index: number) => (
          <Card
            class={card.price ? "dish" : "rest"}
            key={index}
            img={card.img}
            name={card.name}
            icons={card.icons}
            about={card.about}
            price={card.price}
            chef={card.chef}
            rating={card.rating}
          />
        ))}
      </div>
    </>
  );
};

export default RenderRest;

// case 'Most Popular':
//     filteredRest === data.restaurant
//     break;
// case 'Map View':
//     filteredRest === data.restaurant
//     break;
