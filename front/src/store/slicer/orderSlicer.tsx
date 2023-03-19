import { createSlice } from "@reduxjs/toolkit";
import { addCartToUserData } from "../../utils/UserUtils/addCartToUserData";
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
            sessionStorage.setItem("dish-in-cart",JSON.stringify(state.value))
            if(sessionStorage.getItem("user-logged-in")){
              addCartToUserData(action.payload)
            }
        } else {
            alert("we can`t do order from more then 0ne restaurant")
        }
    },
    getCartFromDb:(state:IOrder,action) => {
            state.value = action.payload.dishInCart
            sessionStorage.setItem("dish-in-cart",JSON.stringify(state.value))
            console.log(action.payload.dishInCart);
            // state.checkoutPrice = action.payload.dishInCart.map((price:any) => price.totalPrice)
    },
    emptyCart:(state) =>{
      state.value = []
    },
    deleteFromCart:(state:IOrder,action) =>{
        // const x = state.value.findIndex((dish) => dish.dishId === action.payload)
        // delete state.value[x]
    }
  },
});

export const {addToCart, deleteFromCart, getCartFromDb, emptyCart} = orderSlicer.actions
export default orderSlicer.reducer;