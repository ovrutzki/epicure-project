import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";

export const chefsSlicer = createSlice({
  name: "chefs",
  initialState: {
    value: data.chefs,
  },
  reducers: {},
});

export default chefsSlicer.reducer;
