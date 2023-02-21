import React, { useState } from "react";
import "./DishModal.css";
import Card from "../Card/Card";
import { ICard, IModal } from "../../interFaces/interFaces";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store/store";
import { log } from "console";

const DishModal: React.FC<IModal> = (props: IModal) => {
  const specificDishes = useSelector((state: IRootState) => state.dishes.value);
  let clickedDish = specificDishes.find((dish) => dish.id === props.id);
  console.log(clickedDish)
 

  if(props.open === false) return null
  return (
    <>
    <div id="modal-content">
      <div id="modal">
        <button id="close" onClick={props.onClose} >X</button>
        <Card
        img={clickedDish?.img}
          name={clickedDish?.name}
          about={clickedDish?.about}
          icons={clickedDish?.icons}
          price = {clickedDish?.price}
        />
        <div id="modal-bottom" >
            <form action="">
            <h1>Choose a side</h1>
              {clickedDish?.sides.map((side) => 
              <label htmlFor=""><input value={side} type="radio" />{side}</label>
              )}
            </form>
            <form action="">
            <h1>Changes</h1>
            {clickedDish?.changes.map((change) => 
              <label htmlFor=""><input value={change} type="checkbox" />{change}</label>
              )}
            </form>
          <div id="quantity">
            <h1>Quantity</h1>
            <div>
            <button>-</button>
            <p>2</p>
            <button>+</button>
            </div>
          </div>
          <button id="cart-btn">ADD TO CART</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default DishModal;
