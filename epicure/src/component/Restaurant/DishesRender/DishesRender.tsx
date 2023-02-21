import React, { Dispatch, SetStateAction, useEffect } from "react";
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
import DishModal from "../../DishModal/DishModal";

export interface IRestName {
  sortFilter?: string;
  restName?: string;
}

const DishesRender: React.FC<IRestName> = (props: IRestName) => {
  const dishArray = useSelector((state: IRootState) => state.dishes.value);
  const specificDishes = useSelector(
    (state: IRootState) => state.dishes.specificDishes
  );
  const restArray = useSelector((state: IRootState) => state.restaurants.value);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [dishId, setDishId]:[number | undefined,Dispatch<SetStateAction<number | undefined>>] = useState()
  
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
  const openModal = (id:any):void => {
    setIsOpen(!isOpen)
    setDishId(id)
    console.log(isOpen)

  }
  return (
    <>
      <div id="main-dishes">
        <div id="filter-dish">
          <FilterButtons name="Breakfast" onClick={filterEvent} />
          <FilterButtons name="Lunch" onClick={filterEvent} />
          <FilterButtons name="Dinner" onClick={filterEvent} />
        </div>
      </div>
      <div className="dish-div" >
        {specificDishes?.map((dish: ICard, index: number) => (
          <>
          <Card
            key={index}
            name={dish.name}
            img={dish.img}
            about={dish.about}
            price={dish.price}
            class="card"
            onClick = {() => openModal(dish.id)}
            id={dish.id}
            />
          </>
          ))}
      </div>
          <DishModal onClose={openModal} open={isOpen} id={dishId}  /> 
    </>
  );
};

export default DishesRender;

