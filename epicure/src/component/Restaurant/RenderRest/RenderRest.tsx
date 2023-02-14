import React from "react";
import { ICard, IRenderRest } from "../../../interFaces/interFaces";
import Card from "../../Card/Card";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store/store";
// import "./RenderRest.css";

const RenderRest: any = (props: IRenderRest) => {
  const restArray = useSelector(
    (state:IRootState) => state.restaurants.value
  );
  let filteredRest: Array<{}> = []
  let open:Array<any> = []

    let d = new Date();
    switch (props.sortFilter) {
      case "All":
        filteredRest = restArray;
        break;
      case 'New':
        let year = d.getFullYear()
        for (let i = 0; i < restArray.length; i++) {
            if (year - restArray[i].openYear === 0){
                filteredRest.push(restArray[i])
             };}
          break;
      case "Open Now":
        let hour = d.getHours();
        let day = d.getDay();
        for (let i = 0; i < restArray.length; i++) {
          if (
            restArray[i].openHours[0] < hour &&
            hour < restArray[i].openHours[1] &&
            restArray[i].openDays.includes(day)
          ){open.push(restArray[i]);}
        };
        filteredRest = open;
        break;
      case "Most Popular":
        let mostPopular1 = restArray.filter((rest:any) => rest.rating.includes("5"))
        let mostPopular2 = restArray.filter((rest:any) => rest.rating.includes("4"))
        filteredRest = [...mostPopular1 , ...mostPopular2]
        break;
      default:
        filteredRest = restArray;
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
//     filteredRest === restArray
//     break;
// case 'Map View':
//     filteredRest === restArray
//     break;
