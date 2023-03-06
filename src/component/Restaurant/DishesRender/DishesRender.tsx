import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
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
  const specificDishes = useSelector(
    (state: IRootState) => state.dishes.specificDishes
  );
  const filteredDishes = useSelector(
    (state: IRootState) => state.dishes.value
  );
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [dishId, setDishId]:[number | undefined,Dispatch<SetStateAction<number | undefined>>] = useState()
  
  let dishModalRef:any = useRef()
    useEffect(()=>{
        let handler = (event:any) =>{
            if(!dishModalRef?.current?.contains(event.target)){
              setIsOpen(false)
            }
        }
        document.addEventListener("mousedown",handler)

        return () => {
          document.removeEventListener("mousedown",handler)
        }
    })

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
        {filteredDishes?.map((dish: ICard, index: number) => (
          <>
          <Card
            class = "card dish-render dish"
            key={index}
            name={dish.name}
            img={dish.img}
            icons={dish.icons}
            about={dish.about}
            price={dish.price}
            onClick = {() => openModal(dish.id)}
            id={dish.id}
            />
          </>
          ))}
      </div>
          {isOpen && <DishModal refProps={dishModalRef} onClose={openModal} open={isOpen} id={dishId} restaurantName={props.restName}/>}
    </>
  );
};

export default DishesRender;

