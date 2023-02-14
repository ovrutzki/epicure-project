import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";

export const dishesSlicer = createSlice({
  name: "dishes",
  initialState: {
    value: data.dishes,
  },
  reducers: {},
});

export default dishesSlicer.reducer;