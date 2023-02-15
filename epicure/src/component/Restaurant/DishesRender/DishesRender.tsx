import React from "react";
import "./DishesRender.css";
import FilterButtons from "../../Buttons/Buttons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store/store";
import Card from "../../Card/Card";
import { ICard } from "../../../interFaces/interFaces";

export interface IRestName {
  sortFilter?: string;
  restName?: string;
}

const DishesRender: React.FC<IRestName> = (props: IRestName) => {
  const dishArray = useSelector((state: IRootState) => state.dishes.value);
  const restArray = useSelector((state: IRootState) => state.restaurants.value);
  const [filter, setFilter] = useState("");
  let AllRestDishes = dishArray.filter(
    (e) =>
      e.restaurantId === restArray.find((e) => e.name === props.restName)?.id
  );
  let specificDishes: ICard[] = [];
  switch (filter) {
    case "Breakfast":
      specificDishes = AllRestDishes.filter((dish) =>
        dish.time.find((time) => time === "breakfast")
      );
      break;
    case "Lunch":
      specificDishes = AllRestDishes.filter((dish) =>
        dish.time.find((time) => time === "lunch")
      );
      break;
    case "Dinner":
      specificDishes = AllRestDishes.filter((dish) =>
        dish.time.find((time) => time === "dinner")
      );
      break;
    default:
      specificDishes = AllRestDishes;
      break;
  }
  return (
    <>
      <div id="main-dishes">
        <div id="filter-div">
          <FilterButtons
            name="Breakfast"
            filter={filter}
            setFilter={setFilter}
          />
          <FilterButtons name="Lunch" filter={filter} setFilter={setFilter} />
          <FilterButtons name="Dinner" filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <div className="dish-div">
        {specificDishes.map((dish: ICard, index: number) => (
          <Card
            name={dish.name}
            img={dish.img}
            key={index}
            about={dish.about}
            price={dish.price}
            class="card"
          />
        ))}
      </div>
    </>
  );
};

export default DishesRender;
