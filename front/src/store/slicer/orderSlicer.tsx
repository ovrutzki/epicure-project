import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";
import { IOrder, IOrderState } from "../store/store";

export const orderSlicer = createSlice({
  name: "order",
  initialState: {
    allDishes: data.dishes,
    value: [],
    checkoutPrice:0,
  },
  reducers: {
    addToCart:(state:IOrder,action) => {
        if(state.value.every((dish:IOrderState) => dish.restaurantId === action.payload.restaurantId)){
            state.value = [...state.value, action.payload]
            console.log(state.value)
            state.checkoutPrice += action.payload.totalPrice
        } else {
            alert("we can`t do order from more then 0ne restaurant")
        }
    },
    deleteFromCart:(state:IOrder,action) =>{
        // const x = state.value.findIndex((dish) => dish.dishId === action.payload)
        // delete state.value[x]
    }
  },
});

export const {addToCart, deleteFromCart} = orderSlicer.actions
export default orderSlicer.reducer;