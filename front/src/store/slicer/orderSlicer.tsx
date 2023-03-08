import { createSlice } from "@reduxjs/toolkit";
import { IDishes, IOrder, IOrderState } from "../store/store";

let dishes:IDishes[] = [];
const fetchDishesData = () => {
  const response = fetch("http://localhost:8000/api/dishes")
  .then((response) => {
    return response.json()
  })
  .catch((err) => console.log(err));
  return response;
}

dishes = await fetchDishesData()

export const orderSlicer = createSlice({
  name: "order",
  initialState: {
    allDishes: dishes,
    value: [],
    checkoutPrice:0,
  },
  reducers: {
    addToCart:(state:IOrder,action) => {
        if(state.value.every((dish:IOrderState) => dish.restaurantId === action.payload.restaurantId)){
            state.value = [...state.value, action.payload]
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