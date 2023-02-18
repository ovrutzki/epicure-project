import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: data.restaurant,
    default: data.restaurant
  },
  reducers: {
    mainFilter: (state, action) => {
      let d = new Date();
      let open: Array<any> = [];

      switch (action.payload){
        case "All":
      state.value = state.default ;
      break;
    case "New":
      let year = d.getFullYear();
      state.value = []
      for (let i = 0; i < state.default.length; i++) {
        if (year - state.default[i].openYear === 0) {
          state.value.push(state.default[i]);
        }
      }
      break;
      case "Open Now":
      let hour = d.getHours();
      let day = d.getDay();
      for (let i = 0; i < state.default.length; i++) {
        if (
          state.default[i].openHours[0] < hour &&
          hour < state.default[i].openHours[1] &&
          state.default[i].openDays.includes(day)
        ) {
          open.push(state.default[i]);
        }
      }
      state.value = open;
      break;
    case "Most Popular":
      let mostPopular1 = state.default.filter((rest: any) =>
        rest.rating.includes("5")
      );
      let mostPopular2 = state.default.filter((rest: any) =>
        rest.rating.includes("4")
      );
      state.value = [...mostPopular1, ...mostPopular2];
      break;
    default:
      state.value = state.default;
      break;
      }
    },
    ratingFilter: (state, action) =>{



    }
    // priceFilter: (state,action):void =>{
    //   for (let i = 0; i < state.default.length; i++) {
    //     let sum = 0;
    //     let rest = data.dishes.filter((dish) => dish.restaurantId === i + 1 )
    //     let price = rest.reduce((accumulator, cornett) => accumulator + cornett.price , sum)
    //     let avrg = price / rest.length
    //     if()
    //   }
    //  }
  },
});

export const {mainFilter , ratingFilter} = restaurantSlice.actions
export default restaurantSlice.reducer;
