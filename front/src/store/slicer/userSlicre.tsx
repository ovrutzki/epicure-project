import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Response } from "express";
import { IUser } from "../store/store";

interface IDetails {
  email: string;
  password: string;
}

export const loginUserStore: any = createAsyncThunk(
  "user/login",
  async (data: IDetails, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        data
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const userSlicer = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {
    getUserData: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUserStore.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    // builder.addCase(loginUserStore.pending, (state, action) => {
    //   console.log("pending");
    // });
    // builder.addCase(loginUserStore.rejected, (state, action) => {
    //   console.log("rejected");
    // });
  },
});

export const { getUserData } = userSlicer.actions;
export default userSlicer.reducer;
