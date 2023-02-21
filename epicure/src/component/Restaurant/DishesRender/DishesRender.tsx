import React, { useEffect } from "react";
import "./DishesRender.css";
import FilterButtons from "../../Buttons/FilterButtons/Buttons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/store/store";
import Card from "../../Card/Card";
import { ICard } from "../../../interFaces/interFaces";
import {
  dishTimeFilter,
  getDishesByRestId,
} from "../../../store/slicer/dishesSlicer";

export interface IRestName {
  sortFilter?: string;
  restName?: string;
}

const DishesRender: React.FC<IRestName> = (props: IRestName) => {
  const dishArray = useSelector((state: IRootState) => state.dishes.value);
  const specificDishes = useSelector(
    (state: IRootState) => state.dishes.value
  );
  const restArray = useSelector((state: IRootState) => state.restaurants.value);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDishesByRestId(props.restName));
  }, []);

  useEffect(() => {
    dispatch(dishTimeFilter(filter));
  }, [filter]);

  const filterEvent = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    setFilter(target.value);
  };
  return (
    <>
      <div id="main-dishes">
        <div id="filter-dish">
          <FilterButtons name="Breakfast" onClick={filterEvent} />
          <FilterButtons name="Lunch" onClick={filterEvent} />
          <FilterButtons name="Dinner" onClick={filterEvent} />
        </div>
      </div>
      <div className="dish-div">
        {specificDishes?.map((dish: ICard, index: number) => (
          <Card
            name={dish.name}
            img={dish.img}
            key={index}
            about={dish.about}
            price={dish.price}
            class="card"
            navigate={""}
          />
        ))}
      </div>
    </>
  );
};

export default DishesRender;

// let AllRestDishes = dishArray.filter(
//   (dish) =>
//     dish.restaurantId === restArray.find((rest) => rest.name === props.restName)?.id
// );
// let specificDishes: ICard[] = [];
// switch (filter) {
//   case "Breakfast":
//     specificDishes = AllRestDishes.filter((dish) =>
//       dish.time.find((time) => time === "breakfast")
//     );
//     break;
//   case "Lunch":
//     specificDishes = AllRestDishes.filter((dish) =>
//       dish.time.find((time) => time === "lunch")
//     );
//     break;
//   case "Dinner":
//     specificDishes = AllRestDishes.filter((dish) =>
//       dish.time.find((time) => time === "dinner")
//     );
//     break;
//   default:
//     specificDishes = AllRestDishes;
//     break;
// }
