import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json";

export const epicureSlicer = createSlice({
  name: "epicure",
  initialState: {
    value: data,
  },
  reducers: {},
});

export default epicureSlicer.reducer;