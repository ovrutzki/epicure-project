import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";
import { IOrder, IOrderState } from "../store/store";

export const orderSlicer = createSlice({
  name: "order",
  initialState: {
    allDishes: data.dishes,
    value: [],
  },
  reducers: {
    addToCart:(state:IOrder,action) => {
        if(state.value.every((dish:IOrderState) => dish.restaurantId === action.payload.restaurantId)){
            state.value = [...state.value, action.payload]
            console.log(state.value)
        } else {
            alert("we can`t do order from more then 0ne restaurant")
        }
    }
  },
});

export const {addToCart} = orderSlicer.actions
export default orderSlicer.reducer;