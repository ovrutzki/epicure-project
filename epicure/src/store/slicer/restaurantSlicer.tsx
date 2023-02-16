import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: data.restaurant,
  },
  reducers: {
    

    
  },
});

export default restaurantSlice.reducer;
