import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { useSelector } from "react-redux";
import data from "../../epicure.json";
import { IRootState } from "../store/store";
import { restaurantSlice } from "./restaurantSlicer";

export const dishesSlicer = createSlice({
  name: "dishes",
  initialState: {
    value: data.dishes,
    allDishes : data.dishes,
    specificDishes: data.dishes,
    restaurants: data.restaurant
  },
  reducers: {
    getDishesByRestId: (state,action) => {
      state.specificDishes = state.allDishes.filter((dish) => dish.restaurantId === state.restaurants.find((rest) => rest.name === action.payload)?.id)
    },

    dishTimeFilter: (state,action) => {
      switch (action.payload) {
        case "Breakfast":
          state.value = state.specificDishes.filter((dish) =>
            dish.time.find((time) => time === "breakfast")
            );
          break;
        case "Lunch":
          state.value = state.specificDishes.filter((dish) =>
            dish.time.find((time) => time === "lunch")
          );

          break;
        case "Dinner":
          state.value = state.specificDishes.filter((dish) =>
            dish.time.find((time) => time === "dinner")
          );
          break;
        default:
          state.value = state.specificDishes;
          break;
      }
    }
  },
});

export const {dishTimeFilter,  getDishesByRestId} = dishesSlicer.actions
export default dishesSlicer.reducer;